import { Outlet } from "react-router-dom";
import BuyerNavbar from "./BuyerNavbar";
import CategoryBar from "./CategoryBar";
import BuyerFooter from "./BuyerFooter";
import { useCartStore } from "@/store/cartStore";

export default function BuyerLayout() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <BuyerNavbar />
      <div className="lg:hidden">
        <CategoryBar />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <BuyerFooter />
    </div>
  );
}
