import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Order } from "@/types";

interface TrackingModalProps {
  order: Order | null;
  onClose: () => void;
}

export default function TrackingModal({ order, onClose }: TrackingModalProps) {
  if (!order) return null;

  return (
    <AnimatePresence>
      {order && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[400]"
          />

          {/* Desktop modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[500] hidden lg:flex items-center justify-center p-6"
          >
            <TrackingContent order={order} onClose={onClose} />
          </motion.div>

          {/* Mobile bottom sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[500] lg:hidden rounded-t-2xl overflow-hidden"
          >
            <TrackingContent order={order} onClose={onClose} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function TrackingContent({
  order,
  onClose,
}: {
  order: Order;
  onClose: () => void;
}) {
  return (
    <div className="bg-white w-full lg:max-w-md lg:rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-line">
        {/* Mobile drag handle */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-bg-3 lg:hidden" />
        <div>
          <p className="text-[11.5px] text-ink-3 mb-0.5">Tracking</p>
          <h3 className="font-head text-[15px] font-bold text-ink">
            #{order.id}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-bg text-ink-3 hover:text-ink transition-colors"
        >
          <X size={16} strokeWidth={2} />
        </button>
      </div>

      {/* Timeline */}
      <div className="px-5 py-5 max-h-[60vh] overflow-y-auto">
        <div className="flex flex-col gap-0">
          {order.tracking?.map((step, i) => {
            const isLast = i === (order.tracking?.length ?? 0) - 1;
            return (
              <div key={i} className="flex gap-4">
                {/* Left — dot + line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
                      step.completed
                        ? step.current
                          ? "bg-forest ring-4 ring-forest-xxl"
                          : "bg-forest"
                        : "bg-bg-3 border-2 border-line"
                    } ${step.current && !step.completed ? "animate-pulse" : ""}`}
                  />
                  {!isLast && (
                    <div
                      className={`w-0.5 flex-1 my-1 ${step.completed ? "bg-forest" : "bg-line"}`}
                    />
                  )}
                </div>

                {/* Right — content */}
                <div className={`pb-5 min-w-0 ${isLast ? "pb-0" : ""}`}>
                  <p
                    className={`text-[13.5px] font-semibold ${step.completed ? "text-ink" : "text-ink-3"}`}
                  >
                    {step.label}
                  </p>
                  <p
                    className={`text-[12.5px] mt-0.5 ${step.current ? "text-forest font-medium" : "text-ink-3"}`}
                  >
                    {step.timestamp}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 pt-3 border-t border-line">
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl border border-line text-[13.5px] font-semibold text-ink-2 hover:bg-bg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
