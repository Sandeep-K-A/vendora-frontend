import { X, ChevronDown } from "lucide-react";
import type { FilterConfig, Subcategory } from "@/types";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { button, div } from "framer-motion/client";
import PriceRangeFilter from "@/components/common/PriceRangeFilter";

interface FilterSidebarProps {
  subcategories: Subcategory[];
  filters: FilterConfig[];
  totalResults: number;
  onClose?: () => void;
}

export default function FilterSidebar({
  subcategories,
  filters,
  totalResults,
  onClose,
}: FilterSidebarProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(filters.map((filter) => [filter.id, true])),
  );

  const activeSub = searchParams.get("sub") ?? "all";

  //toggleSection--Purpose:Open/Close filter groups.
  //Before: {brand:true,rating:true}--user click brand:
  //After: {brand:false,rating:true}
  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  //getParam--Purpose:get a single query parameter.
  //Before: url?rating=4--getParam("rating")
  //After: returns 4
  const getParam = (key: string) => {
    return searchParams.get("key") ?? "";
  };

  //getParamArray--Purpose:get multiple value of a query parameter.
  //
  const getParamArray = (key: string): string[] => {
    return searchParams.getAll(key);
  };

  //setParam--Purpose:set new parameter and value to the url
  //make a copy first, update the changes in the copy
  //then replace the old url with the new url
  const setParam = (key: string, value: string): void => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  //toggleArrayParm--Purpose: treat the url params like an array.
  //if the value exist--remove it
  //if the value doesnt exist--add it
  const toggleArrayParam = (key: string, value: string): void => {
    const next = new URLSearchParams(searchParams);
    const existing = next.getAll(key);
    next.delete(key);
    if (existing.includes(value)) {
      existing.filter((v) => v !== value).forEach((v) => next.append(key, v));
    } else {
      [...existing, value].forEach((v) => next.append(key, v));
    }
    setSearchParams(next);
  };

  //setSub--Purpose: to set the selected sub category to the url.
  //the function checks whether the selected value is all ex:".....?{empty/no params}"
  //if the user select any subcategory ex:"....?sub=camera"
  const setSub = (value: string): void => {
    const next = new URLSearchParams();
    if (value !== "all") next.set("sub", value);
    setSearchParams(next);
  };

  //clearFilters--Purpose: to clear all other parameters(filters) from the url
  //if the user click clearFilters itll clear all other filters except for the selected sub filter
  const clearFilters = () => {
    const next = new URLSearchParams();
    if (activeSub !== "all") {
      next.set("sub", activeSub);
    }
    setSearchParams(next);
  };

  //hasActiveFilters--Purpose: it returns a boolean value that tells us is there any filters,
  //in the url other than sort and sub.
  const hasActiveFilters = [...searchParams.keys()].some(
    (key) => key !== "sort" && key !== "sub",
  );

  return (
    <div className="bg-white rounded-2xl border border-line overflow-hidden">
      {/* Subcategory list */}
      <div className="px-4 pt-4 pb-3 border-b border-line">
        <p className="text-[11px] font-bold text-ink-3 uppercase tracking-[0.07em] mb-3 px-1">
          Browse
        </p>
        <div className="flex flex-col gap-0.5">
          {subcategories.map((sub) => {
            const isActive = activeSub === sub.value;
            return (
              <button
                key={sub.value}
                onClick={() => setSub(sub.value)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-150 ${
                  isActive
                    ? "bg-forest-xxl text-forest"
                    : "hover:bg-bg text-ink-2 hover:text-ink"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[15px] leading-none">{sub.icon}</span>
                  <span
                    className={`text-[13px] ${isActive ? "font-semibold" : "font-medium"}`}
                  >
                    {sub.label}
                  </span>
                </div>
                <span
                  className={`text-[11.5px] ${isActive ? "text-forest font-semibold" : "text-ink-3"}`}
                >
                  {sub.count.toLocaleString("en-IN")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter Header */}
      <div className="divide-y divide-line">
        {filters.map((filter) => (
          <div key={filter.id}>
            <button
              onClick={() => toggleSection(filter.id)}
              className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-bg transition-colors"
            >
              <span className="text-[13px] font-semibold text-ink">
                {filter.label}
              </span>
              <ChevronDown
                size={14}
                strokeWidth={2}
                className={`text-ink-3 transition-transform duration-200 ${openSections[filter.id] ? "rotate-180" : ""}`}
              />
            </button>

            {openSections[filter.id] && (
              <div className="px-5 pb-4">
                {/* Price */}
                {filter.type === "price" && (
                  <PriceRangeFilter
                    min={0}
                    max={100000}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                  />
                )}

                {/* Rating */}
                {filter.type === "rating" && (
                  <div className="flex flex-col gap-1.5">
                    {[4, 3, 2].map((star) => {
                      const active = getParam("rating") === String(star);
                      return (
                        <button
                          key={star}
                          onClick={() =>
                            setParam("rating", active ? "" : String(star))
                          }
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-left ${
                            active
                              ? "border-forest bg-forest-xxl"
                              : "border-transparent hover:bg-bg"
                          }`}
                        >
                          <span className="text-amber-400 text-[13px] leading-none">
                            {"★".repeat(star)}
                            {"☆".repeat(5 - star)}
                          </span>
                          <span className="text-[12.5px] text-ink-2">
                            {star}+ stars
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Brand / Checkbox */}
                {(filter.type === "brand" || filter.type === "checkbox") && (
                  <div className="flex flex-col gap-2.5">
                    {filter.options?.map((opt) => {
                      const checked = getParamArray(filter.id).includes(
                        opt.value,
                      );
                      return (
                        <label
                          key={opt.value}
                          className="flex items-center gap-2.5 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              toggleArrayParam(filter.id, opt.value)
                            }
                            className="w-4 h-4 accent-forest rounded cursor-pointer flex-shrink-0"
                          />
                          <span className="text-[13.5px] text-ink-2 group-hover:text-ink transition-colors">
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}

                {/* Availability */}
                {filter.type === "availability" && (
                  <div className="flex flex-col gap-2.5">
                    {[
                      { label: "In stock only", value: "instock" },
                      { label: "Include out of stock", value: "all" },
                    ].map((opt) => {
                      const checked = getParam("availability") === opt.value;
                      return (
                        <label
                          key={opt.value}
                          className="flex items-center gap-2.5 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              setParam("availability", checked ? "" : opt.value)
                            }
                            className="w-4 h-4 accent-forest rounded cursor-pointer flex-shrink-0"
                          />
                          <span className="text-[13.5px] text-ink-2 group-hover:text-ink transition-colors">
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      {onClose && (
        <div className="px-4 py-4 border-t border-line bg-bg">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-forest text-white text-[13.5px] font-semibold rounded-xl"
          >
            Done · {totalResults.toLocaleString("en-IN")} results
          </button>
        </div>
      )}
    </div>
  );
}
