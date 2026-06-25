import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/common/ScrollToTop";
import LandingLayout from "@/layouts/landing/LandingLayout";
import BuyerLayout from "./layouts/buyer/BuyerLayout";
import LandingSkeleton from "./components/skeletons/LandingSkeleton";
import AuthSkeleton from "./components/skeletons/AuthSkeleton";
import HomeSkeleton from "./components/skeletons/HomeSkeleton";
import CategorySkeleton from "./components/skeletons/CategorySkeleton";
import ProductSkeleton from "./components/skeletons/ProductSkeleton";

const Landing = lazy(() => import("@/pages/landing"));
const Register = lazy(() => import("@/pages/auth/Register"));
const Login = lazy(() => import("@/pages/auth/Login"));
const BuyerHome = lazy(() => import("@/pages/buyer/home"));
const CategoryPage = lazy(() => import("@/pages/category"));
const ProductPage = lazy(() => import("@/pages/product"));

export default function App() {
  return (
    <>
      <ScrollToTop />
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
          <Route
            path="/category/:slug"
            element={
              <Suspense fallback={<CategorySkeleton />}>
                <CategoryPage />
              </Suspense>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Suspense fallback={<ProductSkeleton />}>
                <ProductPage />
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
    </>
  );
}
