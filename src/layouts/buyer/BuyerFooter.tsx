import { FOOTER_LINKS } from "@/constants";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function BuyerFooter() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  function toggle(title: string) {
    setOpenSection((prev) => (prev === title ? null : title));
  }
  return (
    <footer className="bg-ink border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 pt-12 pb-8">
        {/* Brand — always visible */}
        <div className="mb-8 lg:hidden">
          <Link
            to="/home"
            className="flex items-center gap-2 font-head text-[1.2rem] font-bold mb-3"
          >
            <div className="w-7 h-7 bg-forest rounded-[8px] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              V
            </div>
            <span className="text-forest-light">
              Vend<span className="text-forest-xl">ora</span>
            </span>
          </Link>
          <p className="text-[13.5px] text-white/40 leading-relaxed max-w-[280px]">
            India's marketplace for buyers and sellers. Find what you mean. Sell
            without commission.
          </p>
        </div>

        {/* ── Mobile: accordion ── */}
        <div className="lg:hidden border-t border-white/[0.08]">
          {Object.entries(FOOTER_LINKS).map(([title, links]) => {
            const isOpen = openSection === title;
            return (
              <div key={title} className="border-b border-white/[0.08]">
                <button
                  onClick={() => toggle(title)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-[14px] font-semibold text-white">
                    {title}
                  </span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2}
                    className={`text-white/40 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Links — animate open/close */}
                <div
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-64 pb-4" : "max-h-0"}`}
                >
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-[13.5px] text-white/40 hover:text-white/85 transition-colors duration-150"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Desktop: 5-column grid ── */}
        <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-10">
          {/* Brand column */}
          <div>
            <Link
              to="/home"
              className="flex items-center gap-2 font-head text-[1.2rem] font-bold mb-3"
            >
              <div className="w-7 h-7 bg-forest rounded-[8px] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                V
              </div>
              <span className="text-forest-light">
                Vend<span className="text-forest-xl">ora</span>
              </span>
            </Link>
            <p className="text-[13.5px] text-white/40 leading-relaxed max-w-[200px]">
              India's marketplace for buyers and sellers. Find what you mean.
              Sell without commission.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <div className="font-head text-[13px] font-bold text-white mb-4">
                {title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[13.5px] text-white/40 hover:text-white/85 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pt-7 border-t border-white/[0.08] mt-8 lg:mt-0">
          <p className="text-[12.5px] text-white/25">
            © 2026 Vendora · Built as a portfolio project
          </p>
          <p className="text-[12.5px] text-white/25">
            Built by{" "}
            <span className="text-forest-light font-medium">Sandeep K A</span> ·
          </p>
        </div>
      </div>
    </footer>
  );
}
