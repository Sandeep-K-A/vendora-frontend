import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  onLinkClick,
}: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* ── Overlay ───────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`
          fixed inset-0 z-40 md:hidden
          bg-ink/40
          transition-opacity duration-300
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* ── Drawer ────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        id="mobile-menu"
        className={`
          fixed top-0 right-0 bottom-0 z-50
          w-72 md:hidden
          flex flex-col
          bg-bg border-l border-line
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 flex-shrink-0 border-b border-line">
          <span className="font-head text-lg font-bold text-ink">
            Vend<span className="text-forest-light">ora</span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              flex items-center justify-center
              w-8 h-8 rounded-lg
              text-ink-2
              hover:text-ink hover:bg-bg-3
              transition-colors duration-150
            "
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Drawer nav links */}
        <div className="flex-1 overflow-y-auto p-4">
          <NavLinks
            activeSection={activeSection}
            onLinkClick={onLinkClick}
            mobile
          />
        </div>

        {/* Drawer CTAs */}
        <div className="flex flex-col gap-3 p-4 flex-shrink-0 border-t border-line">
          <Link to="/login" onClick={onClose} className="btn btn-ghost w-full">
            Log in
          </Link>
          <Link
            to="/register"
            onClick={onClose}
            className="btn btn-primary w-full"
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
}
