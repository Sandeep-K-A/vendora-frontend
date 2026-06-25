import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { SORT_OPTIONS } from "@/constants/category/categoryFilters";

interface SortBarProps {
  totalResults: number;
  onFilterOpen: () => void;
}

export default function SortBar({ totalResults, onFilterOpen }: SortBarProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSort = searchParams.get("sort") ?? "popular";

  const setSort = (value: string): void => {
    const next = new URLSearchParams(searchParams);
    next.set("sort", value);
    setSearchParams(next);
  };

  return (
    <div className="flex items-center justify-between gap-4 pb-4 border-b border-line mb-6">
      {/* Sort Tab */}
      <div className="flex items-center gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {SORT_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => setSort(option.value)}
            className={` px-3.5 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap
              transition-all duration-150 flex-shrink-0
              ${
                activeSort === option.value
                  ? "bg-forest-xxl text-forest font-semibold border border-forest-xl"
                  : "text-ink-2 hover:bg-bg hover:text-ink border border-transparent"
              }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Result COunt and mobile filter */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-[13px] text-ink-3 hidden sm:block">
          {totalResults.toLocaleString("en-IN")} products
        </span>
        <button
          onClick={onFilterOpen}
          className="lg:hidden flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-line text-[13px] font-medium text-ink-2 hover:bg-bg transition-colors"
        >
          <SlidersHorizontal size={14} strokeWidth={2} />
          Filters
        </button>
      </div>
    </div>
  );
}
