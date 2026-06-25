import type { OrderStatus, StatusConfig } from "@/types";

export const STATUS_CONFIG: Record<OrderStatus, StatusConfig> = {
  pending: {
    label: "Pending",
    color: "text-amber-600",
    bg: "bg-amber-50",
    dot: "bg-amber-400",
  },
  confirmed: {
    label: "Confirmed",
    color: "text-blue-600",
    bg: "bg-blue-50",
    dot: "bg-blue-400",
  },
  shipped: {
    label: "Shipped",
    color: "text-violet-600",
    bg: "bg-violet-50",
    dot: "bg-violet-400",
  },
  out_for_delivery: {
    label: "Out for delivery",
    color: "text-orange-600",
    bg: "bg-orange-50",
    dot: "bg-orange-400",
  },
  delivered: {
    label: "Delivered",
    color: "text-forest",
    bg: "bg-forest-xxl",
    dot: "bg-forest",
  },
  cancelled: {
    label: "Cancelled",
    color: "text-red-600",
    bg: "bg-red-50",
    dot: "bg-red-400",
  },
};

export const TRACKABLE_STATUSES: OrderStatus[] = [
  "confirmed",
  "shipped",
  "out_for_delivery",
];

export const CANCELLABLE_STATUSES: OrderStatus[] = ["pending", "confirmed"];
