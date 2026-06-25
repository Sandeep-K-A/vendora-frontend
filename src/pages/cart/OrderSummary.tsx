import { useNavigate } from "react-router-dom";
import { ShieldCheck, Tag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function OrderSummary() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalItems = useCartStore((state) => state.totalItems);

  // Compute original total for savings
  const originalTotal = items.reduce((sum, item) => {
    const oldPrice = item.product.oldPrice
      ? parseInt(item.product.oldPrice.replace(/[₹,]/g, ""))
      : parseInt(item.product.price.replace(/[₹,]/g, ""));
    return sum + oldPrice * item.quantity;
  }, 0);

  const savings = originalTotal - totalPrice;
  const deliveryFree = totalPrice >= 499;

  return (
    <div className="bg-white border border-line rounded-2xl overflow-hidden sticky top-[120px]">
      {/* Header */}
      <div className="px-5 py-4 border-b border-line bg-bg">
        <h2 className="font-head text-[14px] font-bold text-ink uppercase tracking-[0.05em]">
          Order summary
        </h2>
      </div>

      {/* Price breakdown */}
      <div className="px-5 py-4 flex flex-col gap-3">
        <div className="flex items-center justify-between text-[13.5px]">
          <span className="text-ink-2">
            Price ({totalItems} {totalItems === 1 ? "item" : "items"})
          </span>
          <span className="text-ink">
            ₹{originalTotal.toLocaleString("en-IN")}
          </span>
        </div>

        {savings > 0 && (
          <div className="flex items-center justify-between text-[13.5px]">
            <span className="text-ink-2">Discount</span>
            <span className="text-forest font-medium">
              − ₹{savings.toLocaleString("en-IN")}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between text-[13.5px]">
          <span className="text-ink-2">Delivery</span>
          <span
            className={deliveryFree ? "text-forest font-medium" : "text-ink"}
          >
            {deliveryFree ? "FREE" : "₹49"}
          </span>
        </div>

        {!deliveryFree && (
          <p className="text-[12px] text-ink-3 -mt-1">
            Add ₹{(499 - totalPrice).toLocaleString("en-IN")} more for free
            delivery
          </p>
        )}

        {/* Divider */}
        <div className="border-t border-line pt-3 flex items-center justify-between">
          <span className="font-head text-[15px] font-bold text-ink">
            Total
          </span>
          <span className="font-head text-[18px] font-bold text-ink">
            ₹{(totalPrice + (deliveryFree ? 0 : 49)).toLocaleString("en-IN")}
          </span>
        </div>

        {savings > 0 && (
          <div className="flex items-center gap-2 bg-forest-xxl rounded-xl px-3 py-2.5">
            <Tag
              size={13}
              className="text-forest flex-shrink-0"
              strokeWidth={2}
            />
            <span className="text-[12.5px] text-forest font-medium">
              You save ₹{savings.toLocaleString("en-IN")} on this order
            </span>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="px-5 pb-5 flex flex-col gap-3">
        <button
          onClick={() => navigate("/checkout")}
          className="w-full py-3.5 bg-forest text-white font-semibold text-[14px] rounded-xl hover:bg-forest-2 transition-colors"
        >
          Proceed to checkout
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[12px] text-ink-3">
          <ShieldCheck size={13} strokeWidth={2} className="text-forest" />
          Safe and secure payments
        </div>
      </div>
    </div>
  );
}
