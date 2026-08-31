import { create } from "zustand";
import { setAccessToken as setAxiosAccessToken } from "@/lib/api/axios";
import type { User } from "@/types/user";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isBootstrapped: boolean;
  setAuth: (user: User, accessToken: string) => void;
  clearAuth: () => void;
  setBootstrapped: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,
  isBootstrapped: false,

  setAuth: (user, accessToken) => {
    setAxiosAccessToken(accessToken);
    set({ user, accessToken, isAuthenticated: true });
  },

  clearAuth: () => {
    setAxiosAccessToken(null);
    set({ user: null, accessToken: null, isAuthenticated: false });
  },

  setBootstrapped: () => set({ isBootstrapped: true }),
}));
