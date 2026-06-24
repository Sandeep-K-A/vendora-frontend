import { Routes, Route } from "react-router-dom";
import LandingLayout from "@/layouts/landing/LandingLayout";
import BuyerLayout from "./layouts/buyer/BuyerLayout";
import LandingSkeleton from "./components/skeletons/LandingSkeleton";
import AuthSkeleton from "./components/skeletons/AuthSkeleton";
import HomeSkeleton from "./components/skeletons/HomeSkeleton";
import { lazy, Suspense } from "react";

const Landing = lazy(() => import("@/pages/landing"));
const Register = lazy(() => import("@/pages/auth/Register"));
const Login = lazy(() => import("@/pages/auth/Login"));
const BuyerHome = lazy(() => import("@/pages/buyer/home"));

export default function App() {
  return (
    <Routes>
      {/* Landing — public marketing page */}
      <Route element={<LandingLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<LandingSkeleton />}>
              <Landing />
            </Suspense>
          }
        />
      </Route>

      {/* Buyer pages */}
      <Route element={<BuyerLayout />}>
        <Route
          path="/home"
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <BuyerHome />
            </Suspense>
          }
        />
      </Route>

      {/* Auth — self contained */}
      <Route
        path="/login"
        element={
          <Suspense fallback={<AuthSkeleton />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<AuthSkeleton />}>
            <Register />
          </Suspense>
        }
      />
    </Routes>
  );
}
