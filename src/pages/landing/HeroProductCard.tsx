export default function HeroProductCard() {
  return (
    <div className="relative flex justify-end">
      {/* Floating pill AI */}
      <div
        aria-hidden="true"
        className="absolute -top-4 -right-2 z-10 flex items-center gap-2 bg-white border border-line rounded-full px-3.5 py-2 text-xs font-medium text-ink shadow-md animate-float-slow"
        style={{ animationDelay: "-1.5s" }}
      >
        <div className="relative w-2 h-2 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-vendora-green" />
          <div
            className="absolute inset-0 rounded-full bg-vendora-green animate-ping"
            style={{ opacity: 0.4 }}
          />
        </div>
        <span>AI search active</span>
        <span className="text-ink-3">·</span>
        <span className="text-vendora-green font-semibold">14 results</span>
      </div>

      {/* Main product card */}

      <div className="w-full max-w-[430px] bg-white border border-line rounded-3xl overflow-hidden shadow-lg animate-float">
        {/* Product Image */}

        <div className="w-full h-52 flex items-center justify-center relative bg-product-placeholder">
          <span
            className="text-6xl select-none drop-shadow-lg"
            aria-hidden="true"
          >
            📱
          </span>

          {/* Discount badge */}

          <div className="absolute top-3 left-3">
            <span className="bg-gold text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              22% OFF
            </span>
          </div>
        </div>

        {/* Product Card body */}

        <div className="p-4">
          {/* Store Name */}

          <div className="flex items-center mb-2 gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full bg-forest-light flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-ink-3 text-xs">TechZone Store · Kochi</span>
          </div>

          {/* Product Name */}

          <h3 className="font-head text-sm font-semibold text-ink leading-snug mb-1">
            iQOO Z9 5G — 8GB+256GB
          </h3>

          {/* Product specs */}

          <p className="text-ink-3 text-xs mb-3">
            Snapdragon 7s Gen 2 · 6000mAh · 50MP
          </p>

          {/* AI verdict */}

          <div className="rounded-xl p-3 mb-3 bg-ai-verdict border border-[rgba(82,183,136,0.2)]">
            <p className="text-forest text-[10px] font-semibold uppercase tracking-wider mb-1.5">
              ✦ AI Verdict
            </p>
            <p className="text-ink-2 text-xs leading-relaxed">
              <span className="text-ink font-medium">Best for:</span> students
              on a budget, daily use.{" "}
              <span className="text-ink font-medium">Weak at:</span> low-light
              photography.
            </p>
          </div>

          {/* Price + Rating */}

          <div className="flex items-end justify-between mb-3">
            <div>
              <p className="font-head text-xl font-bold text-ink leading-none">
                ₹14,999
              </p>
              <p className="text-xs line-through text-ink-3 mt-0.5">₹18,999</p>
            </div>
            <div className="flex items-baseline gap-1 text-gold text-sm font-semibold">
              <span aria-hidden="true">★</span>
              4.4
              <span className="text-ink-3 font-normal text-xs">(1.2k)</span>
            </div>
          </div>

          {/* Action buttons */}

          <div className="flex gap-2">
            <button className="btn btn-primary flex-1 py-2 text-xs rounded-lg">
              Add to cart
            </button>
            <button className="btn btn-ghost py-2 flex-1 text-xs rounded-lg">
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* Floating pill overlapping add to cart */}

      <div
        aria-hidden="true"
        className="
          absolute -bottom-4 -left-2 z-10
          bg-white border border-line
          rounded-2xl px-3.5 py-2.5
          shadow-md
          animate-float-slow
        "
        style={{ animationDelay: "-0.8s" }}
      >
        <p className="text-ink-3 text-xs mb-0.5">📊 Comparing 3 products</p>
        <p className="text-ink text-xs font-semibold">
          iQOO Z9 wins — <span className="text-gold">₹3,000 saved</span>
        </p>
      </div>
    </div>
  );
}
