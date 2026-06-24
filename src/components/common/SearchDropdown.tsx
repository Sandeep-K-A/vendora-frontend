import ResultCard from "@/components/common/ResultCard";
import type { SearchResult } from "@/types";

interface PopularSearch {
  label: string;
  icon: string;
}

interface SearchDropdownProps {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  isOpen: boolean;
  popular?: PopularSearch[];
  onSelect: (result: SearchResult) => void;
  onPopularClick: (label: string) => void;
}

const DEFAULT_POPULAR: PopularSearch[] = [
  { icon: "💻", label: "laptop under ₹40k good battery" },
  { icon: "📱", label: "phone good camera under ₹15k" },
  { icon: "🎧", label: "wireless earbuds for gym" },
  { icon: "🎁", label: "gift for mom under ₹1000" },
];

/**
 * SearchDropdown
 *
 * Purely presentational — renders three states:
 *  1. Empty query  → popular search chips
 *  2. Loading      → skeleton rows
 *  3. Results      → ResultCard list with match label
 *
 * Used by both AppNavbar and HeroSection.
 * Parent owns query state, API call, and open/close logic.
 */
export default function SearchDropdown({
  query,
  results,
  isLoading,
  isOpen,
  popular = DEFAULT_POPULAR,
  onSelect,
  onPopularClick,
}: SearchDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-line rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.09),0_24px_56px_rgba(0,0,0,0.08)] overflow-hidden z-50">
      {/* State 1: Empty — popular searches */}
      {!query.trim() && (
        <>
          <div className="px-4 pt-3 pb-2 text-[10.5px] font-semibold text-ink-3 uppercase tracking-[0.07em] border-b border-line">
            Popular searches
          </div>
          <div className="p-3 flex flex-col gap-1">
            {popular.map((p) => (
              <button
                key={p.label}
                onClick={() => onPopularClick(p.label)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-bg text-left transition-colors duration-100 w-full"
              >
                <span className="w-8 h-8 rounded-lg bg-bg-2 flex items-center justify-center text-base flex-shrink-0">
                  {p.icon}
                </span>
                <span className="text-[13.5px] font-medium text-ink-2">
                  {p.label}
                </span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* State 2: Loading skeleton */}
      {query.trim() && isLoading && (
        <>
          <div className="px-4 pt-3 pb-2 text-[10.5px] font-semibold text-ink-3 uppercase tracking-[0.07em] border-b border-line">
            Searching…
          </div>
          <div className="p-3 flex flex-col gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2.5 animate-pulse"
              >
                <div className="w-9 h-9 rounded-lg bg-bg-3 flex-shrink-0" />
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="h-3 bg-bg-3 rounded w-3/4" />
                  <div className="h-2.5 bg-bg-3 rounded w-1/2" />
                </div>
                <div className="flex flex-col gap-1.5 items-end">
                  <div className="h-3 bg-bg-3 rounded w-16" />
                  <div className="h-2.5 bg-bg-3 rounded w-12" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* State 3a: No results */}
      {query.trim() && !isLoading && results.length === 0 && (
        <div className="py-10 text-center">
          <div className="text-2xl mb-2 opacity-30">✦</div>
          <p className="text-[13px] text-ink-3">
            No matches found. Try different keywords.
          </p>
        </div>
      )}

      {/* State 3b: Results */}
      {query.trim() && !isLoading && results.length > 0 && (
        <>
          <div className="px-4 pt-3 pb-2 text-[10.5px] font-semibold text-forest uppercase tracking-[0.07em] border-b border-line flex items-center gap-2">
            <span>✦</span>
            <span>
              AI found {results.length} match{results.length !== 1 ? "es" : ""}
            </span>
          </div>
          <div className="p-3 flex flex-col gap-2">
            {results.map((r) => (
              <button
                key={r.id}
                onClick={() => onSelect(r)}
                className="w-full text-left"
              >
                <ResultCard
                  icon={r.image}
                  name={r.name}
                  meta={r.spec}
                  primaryValue={r.price}
                  secondaryValue={`${r.matchScore}% match`}
                  secondaryColor={matchColor(r.matchScore)}
                />
              </button>
            ))}
          </div>
        </>
      )}

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-line bg-bg flex items-center justify-between">
        <span className="text-[12px] text-ink-3">
          Press{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-bg-3 text-ink-2 text-[11px] font-medium border border-line">
            Enter
          </kbd>{" "}
          to search
        </span>
        <span className="text-[12px] text-ink-3">
          Press{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-bg-3 text-ink-2 text-[11px] font-medium border border-line">
            Esc
          </kbd>{" "}
          to close
        </span>
      </div>
    </div>
  );
}

function matchColor(score: number): string {
  if (score >= 85) return "text-forest-light";
  if (score >= 70) return "text-gold-light";
  return "text-ink-3";
}
