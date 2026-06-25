import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { div } from "framer-motion/client";

interface CategoryHeaderProps {
  label: string;
  sublabel?: string;
  totalResults: number;
}

export default function CategoryHeader({
  label,
  sublabel,
  totalResults,
}: CategoryHeaderProps) {
  return (
    <div className="py-5 border-b border-line bg-white">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-1.5 text-[12.5px] text-ink-3 mb-2.5">
          <Link to="/home" className="hover:text-forest transition-colors">
            Home
          </Link>
          <ChevronRight size={12} strokeWidth={2} />
          <Link
            to={`/category/${label.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-forest transition-colors"
          >
            {label}
          </Link>
          {sublabel && sublabel !== "All" && (
            <>
              <ChevronRight size={12} strokeWidth={2} />
              <span className="text-ink font-medium">{sublabel}</span>
            </>
          )}
        </div>

        <div className="flex items-baseline gap-3">
          <h1 className="font-head text-[1.6rem] font-bold text-ink tracking-[-0.025em]">
            {sublabel && sublabel !== "All" ? sublabel : label}
          </h1>
          <span className="text-[13.5px] text-ink-3">
            {totalResults.toLocaleString("en-IN")} products
          </span>
        </div>
      </div>
    </div>
  );
}
