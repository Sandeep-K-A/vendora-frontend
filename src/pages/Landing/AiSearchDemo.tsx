import { useState } from "react";
import { AI_SEARCH_DEMO_DATA } from "@/constants";
import type { AiSearchDemoData } from "@/types";
import ResultCard from "@/components/common/ResultCard";

export default function AiSearchDemo() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AiSearchDemoData[] | null>(null);

  const runDemo = () => {
    if (!query.trim()) return;
    const q = query.toLowerCase();
    const matched = q.includes("laptop")
      ? AI_SEARCH_DEMO_DATA.laptop
      : q.includes("mobile") || q.includes("phone")
        ? AI_SEARCH_DEMO_DATA.phone
        : AI_SEARCH_DEMO_DATA.default;
    setResults(matched);
  };
  return (
    <div className="bg-white/[0.06] border border-white/10 rounded-3xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10">
        <span className="text-sm font-medium text-white/90">
          ✦ Vendora AI Search
        </span>
        <span className="text-xs font-semibold text-forest-light bg-forest-light/15 px-2.5 py-1 rounded-full">
          Live demo
        </span>
      </div>
      <div className="p-4 border-b border-white/[0.06]">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && runDemo()}
          placeholder='Try: "laptop under ₹40k good battery"'
          className="
            w-full bg-white/10 border border-white/15 rounded-lg
            px-3.5 py-2.5 text-sm text-white
            placeholder:text-white/40
            outline-none focus:border-forest-light
            transition-colors duration-150
          "
        />
      </div>
      <div className="p-4 min-h-[180px]">
        {results ? (
          <>
            <p className="text-forest-light text-xs font-medium mb-3">
              ✓ AI found {results.length} matches for "{query}"
            </p>
            <div className="flex flex-col gap-2">
              {results.map((r) => (
                <ResultCard
                  key={r.name}
                  icon={r.icon}
                  name={r.name}
                  meta={r.spec}
                  primaryValue={r.price}
                  secondaryValue={`${r.match} match`}
                  secondaryColor={r.matchColor}
                  bg="bg-white/[0.05]"
                  border="border-white/10"
                  iconBg="bg-white/10"
                  nameColor="text-white"
                  metaColor="text-white/45"
                  primaryColor="text-white"
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-white/35 text-sm">
            Type a query above and press Enter ↑
          </div>
        )}
      </div>
    </div>
  );
}
