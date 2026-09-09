import { useState } from "react";
import { Outlet } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
import SellerSidebar from "./SellerSidebar";

export default function SellerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex bg-bg overflow-hidden">
      <SellerSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <SellerNavbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="max-w-6xl w-full mx-auto px-4 md:px-8 py-6 flex-1">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
