import { useState } from "react";
import { BUYER_FEATURES, SELLER_FEATURES } from "@/constants";
import FeaturesGrid from "./FeaturesGrid";

export default function FeaturesSection() {
  const [tab, setTab] = useState("buyer");

  return (
    <div className="bg-bg-2 border-t border-b border-line">
      <section
        className="container-vendora py-20"
        id="features"
        aria-labelledby="features-heading"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold text-forest uppercase tracking-wider mb-3">
              <span
                className="w-5 h-[1.2px] bg-forest-light"
                aria-hidden="true"
              />
              Platform features
            </p>
            <h2
              id="features-heading"
              className="font-head text-3xl lg:text-4xl font-bold text-ink leading-tight tracking-[0.02em] mb-3"
            >
              Everything you need
              <br />
              to buy or sell.
            </h2>
          </div>
          {/* Tab Switch */}
          <div className="inline-flex gap-1 bg-bg-3 p-1 rounded-xl w-fit">
            <button
              onClick={() => setTab("buyer")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${tab === "buyer" ? "bg-white text-ink shadow-sm" : "text-ink-2 hover:text-ink"}`}
              aria-pressed={tab === "buyer"}
            >
              For buyers
            </button>
            <button
              onClick={() => setTab("seller")}
              className={`
              px-5 py-2 rounded-lg text-sm font-medium transition-all duration-150
              ${
                tab === "seller"
                  ? "bg-white text-ink shadow-sm"
                  : "text-ink-2 hover:text-ink"
              }
            `}
              aria-pressed={tab === "seller"}
            >
              For sellers
            </button>
          </div>
        </div>
        <FeaturesGrid
          features={tab === "buyer" ? BUYER_FEATURES : SELLER_FEATURES}
        />
      </section>
    </div>
  );
}
