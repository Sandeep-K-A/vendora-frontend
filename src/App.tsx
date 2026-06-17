import { Routes, Route } from "react-router-dom";
import LandingLayout from "@/layouts/LandingLayout";
import Landing from "@/pages/landing";

export default function App() {
  return (
    <Routes>
      {/* Landing — dedicated marketing layout */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      {/*
        Buyer pages added here as we build each one:
        <Route element={<BuyerLayout />}>
          <Route path="/products"       element={<ProductListing />} />
          <Route path="/product/:id"    element={<ProductDetail />} />
          <Route path="/compare"        element={<Compare />} />
          <Route path="/cart"           element={<Cart />} />
          <Route path="/store/:storeId" element={<StorePage />} />
        </Route>

        Auth pages:
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />

        Seller portal (protected by role guard):
        <Route element={<SellerGuard><SellerLayout /></SellerGuard>}>
          <Route path="/seller/onboarding" element={<SellerOnboarding />} />
          <Route path="/seller/dashboard"  element={<Dashboard />} />
          <Route path="/seller/products"   element={<Products />} />
          <Route path="/seller/orders"     element={<Orders />} />
          <Route path="/seller/analytics"  element={<Analytics />} />
          <Route path="/seller/settings"   element={<Settings />} />
        </Route>
      */}
    </Routes>
  );
}
