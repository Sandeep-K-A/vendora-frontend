import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { fadeUp } from "@/lib/motion";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalItems = useCartStore((state) => state.totalItems);

  // ── Empty state ──
  if (items.length === 0) {
    return (
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-24 flex flex-col items-center gap-5 text-center">
        <div className="w-20 h-20 rounded-2xl bg-bg-2 border border-line flex items-center justify-center">
          <ShoppingCart size={32} strokeWidth={1.5} className="text-ink-3" />
        </div>
        <div>
          <h2 className="font-head text-[1.4rem] font-bold text-ink mb-2">
            Your cart is empty
          </h2>
          <p className="text-[14px] text-ink-3 max-w-xs leading-relaxed">
            Looks like you haven't added anything yet. Browse our categories to
            find something you'll love.
          </p>
        </div>
        <Link
          to="/home"
          className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white font-semibold text-[14px] rounded-xl hover:bg-forest-2 transition-colors"
        >
          Continue shopping
          <ArrowRight size={15} strokeWidth={2.5} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-head text-[1.5rem] font-bold text-ink tracking-[-0.02em]">
            My Cart
          </h1>
          <p className="text-[13.5px] text-ink-3 mt-0.5">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-[13px] font-medium text-red-500 hover:text-red-600 hover:underline transition-colors"
        >
          Clear cart
        </button>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart items */}
        <div className="flex-1 min-w-0 bg-white border border-line rounded-2xl px-5">
          <AnimatePresence initial={false}>
            {items.map((item, i) => (
              <motion.div
                key={item.cartItemId}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <CartItem item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Order summary — sticky on desktop */}
        <div className="lg:w-[340px] flex-shrink-0">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
