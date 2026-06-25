import { useState, useMemo } from "react";
import { Package } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import OrderCard from "./OrderCard";
import TrackingModal from "./TrackingModal";
import { MOCK_ORDERS } from "@/constants/orders/mockOrders";
import type { Order, OrderStatus } from "@/types";

type FilterTab = "all" | "active" | "delivered" | "cancelled";

const TABS: { label: string; value: FilterTab }[] = [
  { label: "All orders", value: "all" },
  { label: "Active", value: "active" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
];

const ACTIVE_STATUSES: OrderStatus[] = [
  "pending",
  "confirmed",
  "shipped",
  "out_for_delivery",
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [trackingOrder, setTrackingOrder] = useState<Order | null>(null);

  const filteredOrders = useMemo(() => {
    switch (activeTab) {
      case "active":
        return MOCK_ORDERS.filter((o) => ACTIVE_STATUSES.includes(o.status));
      case "delivered":
        return MOCK_ORDERS.filter((o) => o.status === "delivered");
      case "cancelled":
        return MOCK_ORDERS.filter((o) => o.status === "cancelled");
      default:
        return MOCK_ORDERS;
    }
  }, [activeTab]);

  return (
    <>
      <div className="max-w-[860px] mx-auto px-4 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-head text-[1.5rem] font-bold text-ink tracking-[-0.02em]">
            My Orders
          </h1>
          <p className="text-[13.5px] text-ink-3 mt-0.5">
            {MOCK_ORDERS.length} orders placed
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-1.5 mb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-1">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-xl text-[13px] font-medium whitespace-nowrap flex-shrink-0 border transition-all ${
                activeTab === tab.value
                  ? "bg-forest-xxl text-forest font-semibold border-forest-xl"
                  : "border-line text-ink-2 hover:bg-bg"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders list */}
        {filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-bg-2 border border-line flex items-center justify-center">
              <Package size={28} strokeWidth={1.5} className="text-ink-3" />
            </div>
            <div>
              <h3 className="font-head text-[1.1rem] font-bold text-ink mb-1.5">
                No orders here
              </h3>
              <p className="text-[13.5px] text-ink-3">
                {activeTab === "all"
                  ? "You haven't placed any orders yet."
                  : `No ${activeTab} orders found.`}
              </p>
            </div>
            <Link
              to="/home"
              className="text-[13.5px] font-semibold text-forest hover:underline"
            >
              Start shopping →
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredOrders.map((order, i) => (
              <motion.div
                key={order.id}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: i * 0.07 }}
              >
                <OrderCard
                  order={order}
                  onTrack={(order) => setTrackingOrder(order)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Tracking modal / bottom sheet */}
      <TrackingModal
        order={trackingOrder}
        onClose={() => setTrackingOrder(null)}
      />
    </>
  );
}
