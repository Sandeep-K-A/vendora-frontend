import { Trash2, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import type { CartItem as CartItemType } from "@/types";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCartStore();
  const { product, selectedVariants, quantity, cartItemId } = item;

  // Resolve display price from selected variants
  const displayPrice = (() => {
    for (const dim of product.variants ?? []) {
      const selected = dim.options.find(
        (o) => o.value === selectedVariants[dim.id],
      );
      if (selected?.price) return selected.price;
    }
    return product.price;
  })();

  const unitPrice = parseInt(displayPrice.replace(/[₹,]/g, ""));
  const totalPrice = (unitPrice * quantity).toLocaleString("en-IN");

  // Resolve display image from color variant
  const displayImage = (() => {
    for (const dim of product.variants ?? []) {
      if (dim.id === "color") {
        const selected = dim.options.find(
          (o) => o.value === selectedVariants[dim.id],
        );
        if (selected?.image) return selected.image;
      }
    }
    return product.image;
  })();

  // Format selected variants for display
  const variantLabels = product.variants
    ?.map((dim) => {
      const selected = dim.options.find(
        (o) => o.value === selectedVariants[dim.id],
      );
      return selected ? `${dim.label}: ${selected.label}` : null;
    })
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="flex gap-4 py-5 border-b border-line last:border-0">
      {/* Product image */}
      <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden bg-bg-2 border border-line flex-shrink-0">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product details */}
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        <p className="text-[11.5px] font-bold text-forest uppercase tracking-[0.06em]">
          {product.brand}
        </p>
        <p className="text-[14px] font-semibold text-ink leading-snug line-clamp-2">
          {product.name}
        </p>

        {/* Variant labels */}
        {variantLabels && (
          <p className="text-[12.5px] text-ink-3">{variantLabels}</p>
        )}

        {/* Seller */}
        {product.sellerName && (
          <p className="text-[12px] text-ink-3">
            Sold by{" "}
            <span className="text-ink-2 font-medium">{product.sellerName}</span>
          </p>
        )}

        {/* Bottom row — quantity + price + remove */}
        <div className="flex items-center justify-between mt-auto pt-2">
          {/* Quantity controls */}
          <div className="flex items-center gap-2 border border-line rounded-xl overflow-hidden">
            <button
              onClick={() => updateQuantity(cartItemId, quantity - 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-bg transition-colors text-ink-2 hover:text-ink"
            >
              <Minus size={13} strokeWidth={2.5} />
            </button>
            <span className="w-8 text-center text-[14px] font-semibold text-ink">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(cartItemId, quantity + 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-bg transition-colors text-ink-2 hover:text-ink"
            >
              <Plus size={13} strokeWidth={2.5} />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="font-head font-bold text-[16px] text-ink">
              ₹{totalPrice}
            </p>
            {quantity > 1 && (
              <p className="text-[11.5px] text-ink-3">{displayPrice} each</p>
            )}
          </div>

          {/* Remove */}
          <button
            onClick={() => removeItem(cartItemId)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-ink-3 hover:text-red-500 transition-colors"
          >
            <Trash2 size={15} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
