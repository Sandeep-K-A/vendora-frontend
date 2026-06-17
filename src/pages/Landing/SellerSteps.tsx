import { SELLER_STEPS } from "@/constants";

export default function SellerSteps() {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-semibold text-forest uppercase tracking-wider mb-3">
        <span className="w-5 h-[1.2px] bg-forest-light" aria-hidden="true" />
        For sellers
      </p>
      <h2 className="font-head text-3xl lg:text-4xl font-bold text-ink leading-tight tracking-[-0.02em] mb-1">
        Your store.
        <br />
        Your price.
        <br />
        <span className="text-gold">Zero commission.</span>
      </h2>
      <p className="text-ink-2 mt-4 mb-7 max-w-md">
        Whether you're a reseller, a small business, or a solo creator — Vendora
        gives you a professional storefront without the platform tax.
      </p>

      <button className="btn btn-primary btn-lg mb-2">
        Create your store free →
      </button>

      <div className="flex flex-col mt-6">
        {SELLER_STEPS.map((item, i) => (
          <div
            key={item.step}
            className="flex gap-4 py-4 border-b border-line last:border-b-0 last:pb-0"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-forest-xl/90 text-forest text-xs font-bold flex-shrink-0 mt-0.5">
              {item.step}
            </span>
            <div>
              <p className="font-head text-sm font-semibold text-ink mb-1">
                {item.title}
              </p>
              <p className="text-ink-2 text-[13px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
