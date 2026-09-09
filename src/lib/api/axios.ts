import axios from "axios";
import { useAuthStore } from "@/store/authStore";

let accessToken: string | null = null;

export const getAccessToken = () => accessToken;
export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];
let refreshFailedSubscribers: ((error: unknown) => void)[] = [];

function subscribeTokenRefresh(
  onSuccess: (token: string) => void,
  onFailure: (error: unknown) => void,
) {
  refreshSubscribers.push(onSuccess);
  refreshFailedSubscribers.push(onFailure);
}

function onRefreshed(token: string) {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
  refreshFailedSubscribers = [];
}

function onRefreshFailed(error: unknown) {
  refreshFailedSubscribers.forEach((callback) => callback(error));
  refreshSubscribers = [];
  refreshFailedSubscribers = [];
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isRefreshCall = originalRequest?.url?.includes("/auth/refresh");

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshCall
    ) {
      originalRequest._retry = true;

      const wasAuthenticated = useAuthStore.getState().isAuthenticated;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          subscribeTokenRefresh(
            (newToken) => {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              resolve(api(originalRequest));
            },
            (refreshError) => {
              reject(refreshError);
            },
          );
        });
      }

      isRefreshing = true;

      try {
        const { data } = await api.post("/auth/refresh");
        const newToken = data.data.accessToken;

        setAccessToken(newToken);
        useAuthStore.getState().setAuth(data.data.user, newToken);

        onRefreshed(newToken);
        isRefreshing = false;

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        useAuthStore.getState().clearAuth();
        onRefreshFailed(refreshError);

        if (wasAuthenticated) {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
