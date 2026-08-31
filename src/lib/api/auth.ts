import api from "./axios";
import type { User } from "@/types/user";

export async function registerUser(payload: {
  fullname: string;
  email: string;
  password: string;
}) {
  const { data } = await api.post("/auth/register", payload);
  console.log("raw response.data:", data.data);
  return data.data as { email: string; emailSent: boolean };
}

export async function verifyOtp(email: string, otp: string) {
  const { data } = await api.post("/auth/verify-otp", { email, otp });
  return data.data as { accessToken: string; user: User };
}

export async function resendOtp(email: string) {
  const { data } = await api.post("/auth/resend-otp", { email });
  return data.data as { emailSent: boolean };
}

export async function loginUser(payload: { email: string; password: string }) {
  const { data } = await api.post("/auth/login", payload);
  return data.data as { accessToken: string; user: User };
}

export async function logoutUser() {
  await api.post("/auth/logout");
  return;
}
export async function forgotPassword(email: string) {
  const { data } = await api.post("/auth/forgot-password", { email });
  return data.message as string;
}

export async function resetPassword(token: string, newPassword: string) {
  const { data } = await api.post("/auth/reset-password", {
    token,
    newPassword,
  });
  return data.message as string;
}

export async function refreshSession() {
  const { data } = await api.post("/auth/refresh");
  return data.data.user as { accessToken: string; user: User };
}

export async function getMe() {
  const { data } = await api.get("/auth/me");
  return data.data.user as User;
}
