import { Link } from "react-router-dom";

export default function HeroContent() {
  return (
    <div>
      <div className="inline-flex items-center gap-2 bg-forest-xl text-forest text-xs font-semibold px-3 py-1.5 rounded-full mb-7">
        <div
          className="w-1.5 h-1.5 rounded-full bg-forest-light"
          aria-hidden="true"
        />
        Now live across India
      </div>

      <h1 className="font-head text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.03em] text-ink mb-5">
        <span className="block whitespace-nowrap">The smarter way</span>
        <span className="block">
          to <span className="text-forest">buy</span> and{" "}
          <span className="text-gold">sell</span>
        </span>
        <span className="block">in India.</span>
      </h1>

      <p className="text-ink-2 text-base leading-relaxed mb-8 max-w-md">
        AI-powered product discovery for buyers. Zero-commission storefronts for
        sellers. One platform, built for everyone.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 mb-10">
        <Link
          to="/products"
          className="btn btn-primary btn-lg w-full sm:w-auto"
        >
          Browse products
        </Link>
        <Link
          to="/seller/register"
          className="btn btn-gold btn-lg w-full sm:w-auto"
        >
          Start selling free
        </Link>
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-line">
        <div className="flex items-center" aria-label="Sellers on Vendora">
          {["RK", "SM", "AJ", "MN"].map((initials, index) => (
            <div
              key={initials}
              className={`w-7 h-7 rounded-full bg-bg-3 border-2 border-bg flex items-center justify-center text-forest text-[10px] font-semibold flex-shrink-0 ${index !== 0 ? "-ml-1.5" : ""}`}
            >
              {initials}
            </div>
          ))}
        </div>

        {/* Proof of User */}
        <p className="text-ink-2 text-sm leading-snug">
          <span className="text-ink font-semibold">2,400+ sellers</span> already
          on Vendora
          <br />
          <span className="text-forest text-xs font-medium">
            across India · Zero commission, always
          </span>
        </p>
      </div>
    </div>
  );
}
