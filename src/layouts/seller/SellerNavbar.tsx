import { useState, useRef, useEffect } from "react";
import { Menu, LogOut, ChevronDown } from "lucide-react";

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  active: "bg-green-100 text-green-800",
  suspended: "bg-red-100 text-red-800",
  rejected: "bg-red-100 text-red-800",
};

interface SellerNavbarProps {
  onMenuClick: () => void;
}

export default function SellerNavbar({ onMenuClick }: SellerNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Placeholder data — will be wired to useMyStore / useAuthStore later
  const storeName = "Ray's Electronics";
  const storeStatus = "pending";
  const userName = "Sandeep K A";
  const userInitials = "SK";

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setMenuOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="h-[62px] bg-white border-b border-line flex items-center px-4 md:px-8 gap-3 flex-shrink-0">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-ink-2 hover:text-ink transition-colors"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <div className="flex items-baseline gap-2 min-w-0">
        <h1 className="text-base md:text-lg font-bold text-ink truncate">
          {storeName}
        </h1>
        <span className="text-sm text-ink-3 hidden sm:inline">Dashboard</span>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize hidden sm:inline-block ${STATUS_STYLES[storeStatus]}`}
        >
          {storeStatus}
        </span>

        <div ref={menuRef} className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-bg transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-forest-xxl border border-forest-xl text-forest text-[11px] font-bold flex items-center justify-center flex-shrink-0">
              {userInitials}
            </div>
            <ChevronDown size={14} className="text-ink-3 hidden sm:block" />
          </button>

          {menuOpen && (
            <div className="absolute top-[calc(100%+8px)] right-0 w-52 bg-white border border-line rounded-xl shadow-lg overflow-hidden z-[300]">
              <div className="px-4 py-3 border-b border-line">
                <p className="text-sm font-semibold text-ink truncate">
                  {userName}
                </p>
              </div>
              <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-ink-2 hover:bg-bg hover:text-ink transition-colors">
                <LogOut size={15} />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
