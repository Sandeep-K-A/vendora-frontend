import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireVendor?: boolean;
  redirectIfVendor?: boolean;
}

export default function ProtectedRoute({
  children,
  requireVendor = false,
  redirectIfVendor = false,
}: ProtectedRouteProps) {
  const location = useLocation();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isBootstrapped = useAuthStore((state) => state.isBootstrapped);
  const isVendor = useAuthStore((state) => state.user?.isVendor);

  if (!isBootstrapped) {
    // Auth state isn't known yet — render nothing (or a tiny spinner)
    // rather than guessing and causing a redirect flicker.
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireVendor && !isVendor) {
    return <Navigate to="/seller/onboarding" replace />;
  }

  if (redirectIfVendor && isVendor) {
    return <Navigate to="/seller/dashboard" replace />;
  }

  return <>{children}</>;
}
