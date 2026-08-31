import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { refreshSession } from "@/lib/api/auth";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setBootstrapped = useAuthStore((state) => state.setBootstrapped);

  useEffect(() => {
    async function bootstrap() {
      try {
        const { user, accessToken } = await refreshSession();
        setAuth(user, accessToken);
      } catch {
        // No valid session — expected default state, nothing to do.
      } finally {
        setBootstrapped();
      }
    }
    bootstrap();
  }, [setAuth, setBootstrapped]);

  return <>{children}</>; // always renders immediately — no blocking, no spinner
}
