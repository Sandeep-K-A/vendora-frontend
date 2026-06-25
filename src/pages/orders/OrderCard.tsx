import { useState } from "react";
import { ChevronDown, MapPin, CreditCard, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import type { Order } from "@/types";
import {
  STATUS_CONFIG,
  TRACKABLE_STATUSES,
  CANCELLABLE_STATUSES,
} from "@/constants/orders/orderStatus";

interface OrderCardProps {
  order: Order;
  onTrack: (order: Order) => void;
}

export default function OrderCard({ order, onTrack }: OrderCardProps) {
  const [expanded, setExpanded] = useState(false);
  const status = STATUS_CONFIG[order.status];

  return (
    <div className="bg-white border border-line rounded-2xl overflow-hidden">
      {/* ── Card header ── */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-line bg-bg">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-head text-[13.5px] font-bold text-ink">
            #{order.id}
          </span>
          <span className="text-[12.5px] text-ink-3">{order.placedAt}</span>
        </div>
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11.5px] font-semibold ${status.bg} ${status.color}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${status.dot} ${order.status === "out_for_delivery" ? "animate-pulse" : ""}`}
          />
          {status.label}
        </div>
      </div>

      {/* ── Items ── */}
      <div className="px-5 py-4 flex flex-col gap-3">
        {order.items.map((item, i) => {
          const variantLabels = item.product.variants
            ?.map((dim) => {
              const selected = dim.options.find(
                (o) => o.value === item.selectedVariants[dim.id],
              );
              return selected?.label ?? null;
            })
            .filter(Boolean)
            .join(" · ");

          const displayImage = (() => {
            for (const dim of item.product.variants ?? []) {
              if (dim.id === "color") {
                const selected = dim.options.find(
                  (o) => o.value === item.selectedVariants[dim.id],
                );
                if (selected?.image) return selected.image;
              }
            }
            return item.product.image;
          })();

          return (
            <div key={i} className="flex items-center gap-3">
              <Link to={`/product/${item.product.id}`}>
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-bg-2 border border-line flex-shrink-0">
                  <img
                    src={displayImage}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="min-w-0">
                <p className="text-[13.5px] font-semibold text-ink line-clamp-1">
                  {item.product.name}
                </p>
                <p className="text-[12px] text-ink-3 mt-0.5">
                  {[variantLabels, `Qty ${item.quantity}`]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <p className="text-[13px] font-semibold text-ink mt-0.5">
                  {item.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Expanded details ── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 border-t border-line pt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Delivery address */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-[12px] font-bold text-ink-3 uppercase tracking-[0.06em]">
                  <MapPin size={12} strokeWidth={2.5} />
                  Delivery address
                </div>
                <div className="text-[13.5px] text-ink leading-relaxed">
                  <p className="font-semibold">{order.deliveryAddress.name}</p>
                  <p className="text-ink-2">{order.deliveryAddress.line1}</p>
                  {order.deliveryAddress.line2 && (
                    <p className="text-ink-2">{order.deliveryAddress.line2}</p>
                  )}
                  <p className="text-ink-2">
                    {order.deliveryAddress.city}, {order.deliveryAddress.state}{" "}
                    — {order.deliveryAddress.pincode}
                  </p>
                </div>
              </div>

              {/* Payment + price breakdown */}
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[12px] font-bold text-ink-3 uppercase tracking-[0.06em] mb-2">
                    <CreditCard size={12} strokeWidth={2.5} />
                    Payment
                  </div>
                  <p className="text-[13.5px] text-ink">
                    {order.paymentMethod}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[12px] font-bold text-ink-3 uppercase tracking-[0.06em] mb-2">
                    <Package size={12} strokeWidth={2.5} />
                    Price breakdown
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {order.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-[13px]"
                      >
                        <span className="text-ink-2 truncate max-w-[180px]">
                          {item.product.brand} × {item.quantity}
                        </span>
                        <span className="text-ink font-medium">
                          ₹
                          {(
                            parseInt(item.price.replace(/[₹,]/g, "")) *
                            item.quantity
                          ).toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between text-[13px] pt-1.5 border-t border-line mt-1">
                      <span className="text-ink-2">Delivery</span>
                      <span className="text-forest font-medium">FREE</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px] font-bold">
                      <span className="text-ink">Total</span>
                      <span className="text-ink">{order.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Card footer ── */}
      <div className="flex items-center justify-between px-5 py-3.5 border-t border-line bg-bg">
        <div>
          <p className="text-[12px] text-ink-3">
            {order.estimatedDelivery ?? "Order cancelled"}
          </p>
          <p className="font-head font-bold text-[15px] text-ink">
            {order.total}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Cancel — pending and confirmed only */}
          {CANCELLABLE_STATUSES.includes(order.status) && (
            <button className="px-3.5 py-2 rounded-xl text-[13px] font-semibold text-red-500 border border-red-200 hover:bg-red-50 transition-colors">
              Cancel order
            </button>
          )}
          {/* Track order — only for active orders */}
          {TRACKABLE_STATUSES.includes(order.status) && (
            <button
              onClick={() => onTrack(order)}
              className="px-3.5 py-2 rounded-xl text-[13px] font-semibold text-forest bg-forest-xxl border border-forest-xl hover:bg-forest-xl transition-colors"
            >
              Track order
            </button>
          )}

          {/* View details toggle */}
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13px] font-semibold text-ink-2 border border-line hover:bg-bg-2 transition-colors"
          >
            {expanded ? "Hide details" : "View details"}
            <ChevronDown
              size={14}
              strokeWidth={2}
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
