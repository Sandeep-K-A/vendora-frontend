import { Routes, Route } from "react-router-dom";
import LandingLayout from "@/layouts/LandingLayout";
import Landing from "./pages/landing";

export default function App() {
  return (
    <Routes>
      {/* Landing — dedicated marketing layout */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>
    </Routes>
  );
}
