import { memo } from "react";
import { NAV_LINKS } from "@/constants";

interface NavLinksProps {
  activeSection: string;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  mobile?: boolean;
}

function NavLinks({
  activeSection,
  onLinkClick,
  mobile = false,
}: NavLinksProps) {
  if (mobile) {
    return (
      // MobileNavigation
      <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => onLinkClick(e, link.href)}
              aria-current={isActive ? "true" : undefined}
              className={`
                flex items-center px-4 py-3 rounded-xl
                text-sm font-medium
                border-l-2
                transition-all duration-150
                ${
                  isActive
                    ? "border-forest-light text-forest-light"
                    : "border-transparent text-ink-2 hover:text-ink hover:bg-bg-3"
                }
              `}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    );
  }

  return (
    // MainNavigation
    <nav className="flex items-center gap-1" aria-label="Main navigation">
      {NAV_LINKS.map((link) => {
        const sectionId = link.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => onLinkClick(e, link.href)}
            aria-current={isActive ? "true" : undefined}
            className={`
              px-2 py-2 rounded-lg
              text-sm font-medium
              transition-all duration-150
              ${
                isActive
                  ? "text-forest-light font-semibold"
                  : "text-ink-2 hover:text-ink"
              }
            `}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

export default memo(NavLinks);
