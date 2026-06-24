import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import SearchDropdown from "./SearchDropdown";
import type { SearchResult } from "@/types";

interface SearchBarProps {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  isOpen: boolean;
  placeholder?: string;
  onChange: (q: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onClear: () => void;
  onSelect: (result: SearchResult) => void;
  onPopularClick: (label: string) => void;
  onClickOutside: () => void;
}

export default function SearchBar({
  query,
  results,
  isLoading,
  isOpen,
  placeholder = "Search for products, brands and more",
  onChange,
  onKeyDown,
  onFocus,
  onClear,
  onSelect,
  onPopularClick,
  onClickOutside,
}: SearchBarProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClickOutside]);

  return (
    <div ref={ref} className="relative w-full">
      <div
        className={`
        flex items-center gap-2 bg-bg-2 border rounded-xl px-3 py-2
        transition-all duration-150
        ${
          isOpen
            ? "bg-white border-forest-light shadow-[0_0_0_3px_rgba(82,183,136,0.1)]"
            : "border-line hover:border-line-2 hover:bg-white"
        }
      `}
      >
        <Search
          size={15}
          className="text-ink-3 flex-shrink-0"
          strokeWidth={2}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none text-[13.5px] text-ink placeholder:text-ink-3 min-w-0"
        />
        {query && (
          <button
            onClick={onClear}
            className="text-ink-3 hover:text-ink flex-shrink-0 transition-colors"
          >
            <X size={14} strokeWidth={2} />
          </button>
        )}
      </div>

      <SearchDropdown
        query={query}
        results={results}
        isLoading={isLoading}
        isOpen={isOpen}
        onSelect={onSelect}
        onPopularClick={onPopularClick}
      />
    </div>
  );
}
