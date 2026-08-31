import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { logoutUser } from "@/lib/api/auth";
import { extend } from "zod/v4-mini";

export function useLogout() {
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();

  return async function logout() {
    try {
      await logoutUser();
    } catch {
    } finally {
      clearAuth();
      navigate("/login", { replace: true });
    }
  };
}
