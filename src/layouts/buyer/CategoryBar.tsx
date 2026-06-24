import { Link, useLocation } from "react-router-dom";
import { CATEGORIES } from "@/constants";

export default function CategoryBar() {
  const { pathname } = useLocation();
  return (
    <div className="bg-white border-b border-line sticky top-[62px] z-[100]">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="flex items-center overflow-x-auto gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CATEGORIES.map((category) => {
            const isActive = pathname.startsWith(category.to);
            return (
              <Link
                key={category.name}
                to={category.to}
                className={`
                  flex items-center gap-2 px-4 py-3.5
                  text-[13.5px] font-medium whitespace-nowrap
                  border-b-2 transition-all duration-150 flex-shrink-0
                  ${
                    isActive
                      ? "border-forest text-forest font-semibold"
                      : "border-transparent text-ink-2 hover:text-ink hover:border-line-2"
                  }
                `}
              >
                <span className="text-[15px] lg:hidden">{category.icon}</span>
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
