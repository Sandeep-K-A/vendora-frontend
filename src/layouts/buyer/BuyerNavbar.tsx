import { CATEGORIES, MOCK_RESULTS } from "@/constants";
import type { SearchResult } from "@/types";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "@/components/common/SearchBar";
import {
  LayoutDashboard,
  LogOut,
  Package,
  ShoppingCart,
  Store,
  User,
} from "lucide-react";

interface BuyerNavbarProps {
  cartCount?: number;
  userName?: string;
  userInitials?: string;
  isSeller?: boolean;
}

export default function BuyerNavbar({
  cartCount = 0,
  userName = "Sandeep K A",
  userInitials = "SK",
  isSeller = false,
}: BuyerNavbarProps) {
  const navigate = useNavigate();

  //   search
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //   Profile
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleQueryChange(q: string) {
    setQuery(q);
    if (!q.trim()) {
      setResults([]);
      setIsLoading(false);
      setDropdownOpen(false);
      return;
    }
    setDropdownOpen(true);
    setIsLoading(true);
    setResults([]);
    // TODO Phase 3 — replace with GET /api/search?q={q}
    setTimeout(() => {
      setIsLoading(false);
      setResults(
        MOCK_RESULTS.filter(
          (r) =>
            r.name.toLowerCase().includes(q.toLowerCase()) ||
            r.spec.toLowerCase().includes(q.toLowerCase()),
        ),
      );
    }, 600);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && query.trim()) {
      setDropdownOpen(false);
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
    if (e.key === "Escape") setDropdownOpen(false);
  }

  function handleSelect(result: SearchResult) {
    setDropdownOpen(false);
    navigate(`/product/${result.id}`);
  }

  return (
    <header className="sticky top-0 z-[200] bg-white border-b border-line">
      <div className="max-w-[1240px] px-3 mx-auto lg:px-8 flex items-center h-[62px] gap-2 lg:gap-8">
        {/* logo */}
        <Link
          to="/home"
          aria-label="Vendora — go to homepage"
          className="flex items-center gap-2.5 font-head text-xl font-bold text-ink flex-shrink-0"
        >
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-forest text-white text-sm font-bold flex-shrink-0"
            aria-hidden="true"
          >
            V
          </div>
          <span className="hidden md:block">
            Vend<span className="text-forest-light">ora</span>
          </span>
        </Link>
        {/* Category links */}
        <nav className="hidden lg:flex items-center gap-1">
          {CATEGORIES.map((category) => (
            <Link
              key={category.name}
              to={category.to}
              className="px-3 py-1.5 text-[13.5px] font-medium text-ink-2 hover:text-ink rounded-lg hover:bg-bg transition-all duration-150 whitespace-nowrap"
            >
              {category.name}
            </Link>
          ))}
        </nav>
        {/* Search bar */}
        <div className="flex-1 min-w-0 md:max-w-[480px]">
          <SearchBar
            query={query}
            results={results}
            isLoading={isLoading}
            isOpen={dropdownOpen}
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
            onFocus={() => query.trim() && setDropdownOpen(true)}
            onClear={() => handleQueryChange("")}
            onSelect={handleSelect}
            onPopularClick={(q) => handleQueryChange(q)}
            onClickOutside={() => setDropdownOpen(false)}
          />
        </div>

        <div className="flex items-center  lg:gap-1 ml-auto">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex flex-col items-center gap-0.5 px-2 lg:px-3 py-1.5 rounded-lg hover:bg-bg transition-colors duration-150 group"
          >
            <ShoppingCart
              className="w-[22px] h-[22px] text-ink-2 group-hover:text-ink transition-colors"
              strokeWidth={1.7}
            />
            <span className="hidden lg:block text-[11px] text-ink-3 group-hover:text-ink-2 transition-colors leading-none">
              Cart
            </span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1.5 w-[15px] h-[15px] rounded-full bg-gold text-white text-[8.5px] font-bold flex items-center justify-center border-2 border-white">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>

          {/* Profile */}
          <div ref={profileRef} className="relative">
            <button
              onClick={() => setProfileOpen((p) => !p)}
              className="flex flex-col items-center gap-0.5 px-2 lg:px-3 py-1.5 rounded-lg hover:bg-bg transition-colors duration-150 group"
            >
              <User
                className="w-[22px] h-[22px] text-ink-2 group-hover:text-ink transition-colors"
                strokeWidth={1.7}
              />
              <span className="hidden lg:block text-[11px] text-ink-3 group-hover:text-ink-2 transition-colors leading-none">
                Profile
              </span>
            </button>

            {/* Profile dropdown */}
            {profileOpen && (
              <div className="absolute top-[calc(100%+6px)] right-0 w-[220px] bg-white border border-line rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08),0_20px_48px_rgba(0,0,0,0.07)] overflow-hidden z-[300]">
                {userName ? (
                  <>
                    {/* Logged in */}
                    <div className="px-4 py-3.5 border-b border-line">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-forest-xxl border border-forest-xl text-forest text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                          {userInitials}
                        </div>
                        <div>
                          <div className="text-[13.5px] font-semibold text-ink leading-tight">
                            {userName}
                          </div>
                          <div className="text-[11.5px] text-ink-3 leading-tight">
                            Buyer account
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Buyer actions */}
                    <div className="py-1.5">
                      <DropItem
                        icon={User}
                        label="Profile details"
                        to="/profile"
                        close={() => setProfileOpen(false)}
                      />
                      <DropItem
                        icon={Package}
                        label="My orders"
                        to="/orders"
                        close={() => setProfileOpen(false)}
                      />
                    </div>

                    {/* Seller section */}
                    <div className="border-t border-line py-1.5">
                      {isSeller ? (
                        <DropItem
                          icon={LayoutDashboard}
                          label="Seller dashboard"
                          to="/seller/dashboard"
                          close={() => setProfileOpen(false)}
                        />
                      ) : (
                        <DropItem
                          icon={Store}
                          label="Become a seller"
                          to="/seller/onboarding"
                          close={() => setProfileOpen(false)}
                          accent
                        />
                      )}
                    </div>

                    <div className="border-t border-line py-1.5">
                      <button
                        onClick={() => {
                          setProfileOpen(false); /* TODO: logout */
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-[13.5px] text-ink-2 hover:bg-bg hover:text-ink transition-colors duration-100"
                      >
                        <LogOut
                          size={15}
                          strokeWidth={1.7}
                          className="flex-shrink-0"
                        />
                        Sign out
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Logged out */}
                    <div className="p-4">
                      <p className="text-[13.5px] text-ink-2 mb-3 leading-relaxed">
                        Login to access your orders, profile and more.
                      </p>
                      <Link
                        to="/login"
                        onClick={() => setProfileOpen(false)}
                        className="block w-full text-center py-2.5 border-[1.5px] border-forest text-forest text-[13.5px] font-semibold rounded-xl hover:bg-forest-xxl transition-colors"
                      >
                        Login / Register
                      </Link>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function DropItem({
  icon: Icon,
  label,
  to,
  close,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  to: string;
  close: () => void;
  accent?: boolean;
}) {
  return (
    <Link
      to={to}
      onClick={close}
      className={`
        flex items-center gap-3 px-4 py-2.5
        text-[13.5px] transition-colors duration-100
        hover:bg-bg
        ${accent ? "text-forest font-medium" : "text-ink-2 hover:text-ink"}
      `}
    >
      <Icon size={15} strokeWidth={1.7} className="flex-shrink-0" />
      {label}
    </Link>
  );
}
