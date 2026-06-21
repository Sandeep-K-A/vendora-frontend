import { Routes, Route } from "react-router-dom";
import LandingLayout from "@/layouts/LandingLayout";
import Landing from "./pages/landing";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

export default function App() {
  return (
    <Routes>
      {/* Landing — dedicated marketing layout */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
