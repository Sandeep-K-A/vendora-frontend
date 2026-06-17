import ResultCard from "@/components/common/ResultCard";
import StatTile from "@/components/common/StatTile";
import { SELLER_TOP_PRODUCTS } from "@/constants";
import { SELLER_DASHBOARD_STATS } from "@/constants";

export default function SellerDashboardPreview() {
  return (
    <div className="bg-white border border-line rounded-2xl overflow-hidden shadow-sm">
      {/* Dashboard header */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-line bg-bg-2">
        <span className="font-head text-sm font-semibold text-ink">
          Seller Dashboard — TechZone Store
        </span>
        <span className="text-xs font-semibold text-forest bg-forest-xl/80 px-2.5 py-1 rounded-full">
          Live
        </span>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 mb-4">
          {SELLER_DASHBOARD_STATS.map((stat) => (
            <StatTile
              key={stat.label}
              value={stat.value}
              label={stat.label}
              valueColor={stat.valueColor}
            />
          ))}
        </div>

        {/* Top products label */}
        <p className="text-ink-3 text-[11px] font-semibold uppercase tracking-wider mb-2">
          Top products
        </p>

        {/* Product rows */}
        <div className="flex flex-col gap-2 mb-3">
          {SELLER_TOP_PRODUCTS.map((product) => (
            <ResultCard
              key={product.name}
              icon={product.icon}
              name={product.name}
              meta={product.meta}
              primaryValue={product.primaryValue}
              primaryColor="text-gold"
            />
          ))}
        </div>

        {/* AI generation button */}
        <button className="w-full bg-forest-xl/60 text-forest text-xs font-semibold py-2.5 rounded-lg hover:bg-forest-xl/90 transition-colors duration-150">
          ✦ Generate AI product description
        </button>
      </div>
    </div>
  );
}
