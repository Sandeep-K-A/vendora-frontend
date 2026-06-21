import { Link } from "react-router-dom";
import type { PanelFeature } from "@/types";

interface AuthBrandPanelProps {
  heading: React.ReactNode;
  subheading: string;
  features: PanelFeature[];
}

export default function AuthBrandPanel({
  heading,
  subheading,
  features,
}: AuthBrandPanelProps) {
  return (
    <div className="hidden lg:flex flex-col justify-between bg-forest px-12 py-12 h-screen">
      <Link to="/" className="flex items-center gap-3 w-fit">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/15 text-white text-sm font-bold font-head flex-shrink-0">
          V
        </div>
        <span className="font-head text-xl font-bold text-forest-light tracking-[-0.02em]">
          Vendora
        </span>
      </Link>

      <div>
        <h2 className="font-head text-4xl font-bold text-white leading-[1.08] tracking-[-0.03em] mb-3">
          {heading}
        </h2>
        <p className="text-white/55 text-[15px] leading-relaxed mb-10 max-w-[300px]">
          {subheading}
        </p>

        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-base flex-shrink-0 mt-0.5">
                {feature.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-0.5">
                  {feature.title}
                </p>
                <p className="text-[13px] text-white/55 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer note */}
      <p className="text-white/25 text-xs">
        © 2026 Vendora · Built by Sandeep K A
      </p>
    </div>
  );
}
