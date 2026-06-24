import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_LINKS } from "@/constants";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function LandingNavbar() {
  const scrolled = useScrolled(50);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMenuOpen(false);
    },
    [],
  );

  const handleClose = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        role="banner"
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          border-b border-line
          ${scrolled ? "bg-bg/90 backdrop-blur-md shadow-sm" : "bg-transparent"}
        `}
      >
        <div className="px-10 max-w-[1160px] mx-auto">
          <div className="flex items-center justify-between h-[60px]">
            {/* ── Logo ─────────────────────────────────────────── */}
            <Link
              to="/"
              aria-label="Vendora — go to homepage"
              className="flex items-center gap-2.5 font-head text-xl font-bold text-ink"
            >
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-forest text-white text-sm font-bold flex-shrink-0"
                aria-hidden="true"
              >
                V
              </div>
              <span>
                Vend<span className="text-forest-light">ora</span>
              </span>
            </Link>

            {/* ── Desktop nav links ─────────────────────────────── */}
            <div className="hidden md:flex">
              <NavLinks
                activeSection={activeSection}
                onLinkClick={handleLinkClick}
              />
            </div>

            {/* ── Desktop CTAs ──────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-2.5">
              <Link to="/login" className="btn btn-ghost">
                Log in
              </Link>
              <Link to="/register" className="btn btn-primary">
                Get started
              </Link>
            </div>

            {/* ── Mobile hamburger ──────────────────────────────── */}
            <button
              className="
                md:hidden flex items-center justify-center
                w-9 h-9 rounded-lg
                text-ink-2 hover:text-ink hover:bg-bg-3
                transition-colors duration-150
              "
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={handleClose}
        activeSection={activeSection}
        onLinkClick={handleLinkClick}
      />
    </>
  );
}
