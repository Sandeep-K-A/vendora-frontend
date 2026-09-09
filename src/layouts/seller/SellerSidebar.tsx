import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingBag, Store, X } from "lucide-react";

const NAV_ITEMS = [
  {
    to: "/seller/dashboard",
    label: "Overview",
    icon: LayoutDashboard,
    end: true,
  },
  { to: "/seller/dashboard/products", label: "Products", icon: Package },
  { to: "/seller/dashboard/orders", label: "Orders", icon: ShoppingBag },
  { to: "/seller/dashboard/store", label: "Store settings", icon: Store },
];

interface SellerSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SellerSidebar({ isOpen, onClose }: SellerSidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[290] lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-[300] w-64 bg-white border-r border-line
          flex flex-col flex-shrink-0 transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        aria-label="Seller navigation"
      >
        <div className="h-[62px] flex items-center justify-between px-5 border-b border-line flex-shrink-0">
          <div className="flex items-center gap-2 font-head text-lg font-bold text-ink">
            <div className="w-7 h-7 rounded-lg bg-forest text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
              V
            </div>
            <span>
              Vend<span className="text-forest-light">ora</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-ink-2 hover:text-ink transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 flex flex-col gap-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-forest-xxl text-forest"
                    : "text-ink-2 hover:bg-bg hover:text-ink"
                }`
              }
            >
              <item.icon size={18} strokeWidth={1.8} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-line flex-shrink-0">
          <p className="text-xs text-ink-3 text-center">Seller Dashboard</p>
        </div>
      </aside>
    </>
  );
}
