import type { Feature } from "@/types";

interface FeaturesGridProps {
  features: Feature[];
}
const ACCENT_STYLES: Record<Feature["accent"], string> = {
  green: "bg-forest-xl/40",
  gold: "bg-gold/15",
  teal: "bg-teal/15",
  purple: "bg-purple/15",
  sky: "bg-sky/15",
  rose: "bg-rose/15",
};

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-white border border-line rounded-2xl p-5 transition-all duration-200 hover:border-line-2 hover:shadow-md"
        >
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-lg ${ACCENT_STYLES[feature.accent]} text-lg mb-3 5`}
          >
            {feature.icon}
          </span>
          <h3 className="font-head text-sm font-semibold text-ink mb-1.5">
            {feature.title}
          </h3>
          <p className="text-ink-2 text-[13px] leading-relaxed">
            {feature.desc}
          </p>
          {feature.ai && (
            <span className="inline-flex items-center gap-1 mt-3 text-[11px] font-semibold text-forest bg-forest-xl/40 px-2 py-1 rounded-full">
              ✦ AI-powered
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
