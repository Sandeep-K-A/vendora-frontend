import { AI_HIGHLIGHTS } from "@/constants";

export default function AiHighlights() {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-semibold text-forest-light uppercase tracking-wider mb-3">
        <span className="w-5 h-[1.2px] bg-forest-light" aria-hidden="true" />
        AI-powered
      </p>
      <h2 className="font-head text-3xl lg:text-4xl font-bold text-white leading-tight tracking-[-0.02em] mb-3">
        Three AI features
        <br />
        that change how
        <br />
        you shop.
      </h2>
      <p className="text-white/60 mb-8">
        Not chatbots. Not gimmicks. Real AI that saves you time and builds
        purchase confidence.
      </p>
      <div className="flex flex-col gap-4">
        {AI_HIGHLIGHTS.map((feature) => (
          <div
            key={feature.title}
            className="flex gap-3.5 p-3.5 rounded-lg border border-white/10 bg-white/[0.04]"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-base flex-shrink-0">
              {feature.icon}
            </span>
            <div>
              <div>
                <p className="font-head text-sm font-semibold text-white mb-0.5">
                  {feature.title}
                </p>
                <p className="text-white/55 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
