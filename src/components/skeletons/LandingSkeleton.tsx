export default function LandingSkeleton() {
  return (
    <div className="animate-pulse">
      {/* ── Hero — matches pt-24 pb-20 px-10 max-w-[1080px] ── */}
      <section className="pt-24 pb-20 px-10 max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — HeroContent */}
          <div className="flex flex-col gap-5">
            {/* Eyebrow pill */}
            <div className="w-44 h-7 rounded-full bg-bg-3" />
            {/* Headline — 3 lines */}
            <div className="flex flex-col gap-3">
              <div className="w-full h-12 rounded-xl bg-bg-3" />
              <div className="w-5/6 h-12 rounded-xl bg-bg-3" />
              <div className="w-4/6 h-12 rounded-xl bg-bg-3" />
            </div>
            {/* Subtext */}
            <div className="flex flex-col gap-2 mt-1">
              <div className="w-full h-4 rounded bg-bg-3" />
              <div className="w-4/5 h-4 rounded bg-bg-3" />
            </div>
            {/* Search bar */}
            <div className="w-full h-14 rounded-2xl bg-bg-3 mt-2" />
            {/* CTA buttons */}
            <div className="flex items-center gap-4">
              <div className="w-44 h-12 rounded-xl bg-bg-3" />
              <div className="w-36 h-12 rounded-xl bg-bg-3" />
            </div>
            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-1">
              <div className="w-24 h-3.5 rounded bg-bg-3" />
              <div className="w-28 h-3.5 rounded bg-bg-3" />
              <div className="w-20 h-3.5 rounded bg-bg-3" />
            </div>
          </div>

          {/* Right — HeroProductCard (hidden on mobile, pt-16) */}
          <div className="hidden lg:block pt-16">
            <div className="w-full h-[420px] rounded-2xl bg-bg-3" />
          </div>
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <div className="h-14 border-t border-b border-line flex items-center px-8 gap-8 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded bg-bg-3 flex-shrink-0"
            style={{ width: 80 + (i % 3) * 16 }}
          />
        ))}
      </div>

      {/* ── Features section ── */}
      <div className="max-w-[1280px] mx-auto px-8 py-20 flex flex-col gap-6">
        <div className="w-32 h-4 rounded bg-bg-3 mx-auto" />
        <div className="w-64 h-8 rounded-xl bg-bg-3 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 rounded-2xl bg-bg-3" />
          ))}
        </div>
      </div>
    </div>
  );
}
