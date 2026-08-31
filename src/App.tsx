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
import CartSkeleton from "./components/skeletons/CartSkeleton";
import OrdersSkeleton from "./components/skeletons/OrdersSkeleton";
import ProfileSkeleton from "./components/skeletons/ProfileSkeleton";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import AuthProvider from "./providers/AuthProvider";

const Landing = lazy(() => import("@/pages/landing"));
const Register = lazy(() => import("@/pages/auth/Register"));
const Login = lazy(() => import("@/pages/auth/Login"));
const BuyerHome = lazy(() => import("@/pages/buyer/home"));
const CategoryPage = lazy(() => import("@/pages/category"));
const ProductPage = lazy(() => import("@/pages/product"));
const CartPage = lazy(() => import("@/pages/cart"));
const OrdersPage = lazy(() => import("@/pages/orders"));
const ProfilePage = lazy(() => import("@/pages/profile"));
const VerifyOtp = lazy(() => import("@/pages/auth/VerifyOtp"));

export default function App() {
  return (
    <>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          {/* Landing — public marketing page */}
          {/* <Route element={<LandingLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<LandingSkeleton />}>
                  <Landing />
                </Suspense>
              }
            />
          </Route> */}

          {/* Buyer pages */}
          <Route element={<BuyerLayout />}>
            <Route
              path="/"
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
            <Route
              path="/cart"
              element={
                <Suspense fallback={<CartSkeleton />}>
                  <CartPage />
                </Suspense>
              }
            />
            <Route
              path="/orders"
              element={
                <Suspense fallback={<OrdersSkeleton />}>
                  <OrdersPage />
                </Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<ProfileSkeleton />}>
                  <ProfilePage />
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
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </AuthProvider>
    </>
  );
}
