import { Outlet } from "react-router-dom";
import LandingNavbar from "./LandingNavbar";
import LandingFooter from "./LandingFooter";

export default function LandingLayout() {
  return (
    <div className="min-h-screen bg-bg">
      <LandingNavbar />
      <div className="h-[60px]" aria-hidden="true" />
      <Outlet />
      <LandingFooter />
    </div>
  );
}
