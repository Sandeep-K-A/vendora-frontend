import type { Store } from "@/types";

interface StoreCardProps {
  store: Store;
  onClick?: (id: string) => void;
}

export default function StoreCard({ store, onClick }: StoreCardProps) {
  return (
    <div
      onClick={() => onClick?.(store.id)}
      className="
        relative bg-white border border-line rounded-2xl p-5
        cursor-pointer overflow-hidden
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-[0_2px_10px_rgba(0,0,0,0.09),0_20px_48px_rgba(0,0,0,0.08)]
        group
      "
    >
      {/* Hover underline — scales in from left on hover */}
      <div
        className="
        absolute bottom-0 left-0 right-0 h-[3px]
        bg-gradient-to-r from-forest-light to-forest
        scale-x-0 origin-left
        transition-transform duration-300
        group-hover:scale-x-100
      "
      />

      {/* ── Header: avatar + name + location + rating ── */}
      <div className="flex items-center gap-3 mb-3.5">
        <div
          className="w-12 h-12 rounded-[14px] flex items-center justify-center font-head text-base font-bold flex-shrink-0"
          style={{ background: store.avatarBg, color: store.avatarColor }}
        >
          {store.initials}
        </div>
        <div>
          <div className="font-head text-[14px] font-bold text-ink mb-0.5">
            {store.name}
          </div>
          <div className="text-[12px] text-ink-3 mb-1">
            {store.location} · {store.productCount} products
          </div>
        </div>
      </div>

      {/* ── Category tags ── */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {store.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10.5px] font-semibold text-forest bg-forest-xxl px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ── Verified badge ── */}
      {store.isVerified && (
        <div className="flex items-center gap-1.5 text-[12px] font-semibold text-forest mb-3">
          <div className="w-4 h-4 rounded-full bg-forest-xl text-forest-2 flex items-center justify-center text-[9px]">
            ✓
          </div>
          Verified seller
        </div>
      )}

      {/* ── Top product footer ── */}
      <div className="border-t border-line pt-3 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-bg-2 overflow-hidden flex-shrink-0">
          {store.topProduct.image.startsWith("http") ? (
            <img
              src={store.topProduct.image}
              alt={store.topProduct.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="w-full h-full flex items-center justify-center text-lg">
              {store.topProduct.image}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <div className="text-[10.5px] text-ink-3 mb-0.5">Top product</div>
          <div className="text-[12.5px] font-semibold text-ink truncate">
            {store.topProduct.name}
          </div>
        </div>
        <div className="ml-auto flex-shrink-0 text-[13px] font-bold text-gold">
          {store.topProduct.price}
        </div>
      </div>
    </div>
  );
}
