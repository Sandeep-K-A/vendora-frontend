import { AlertTriangle, CheckCircle2, XCircle, Clock } from "lucide-react";

type StoreStatus = "pending" | "active" | "suspended" | "rejected";

const CONFIG: Record<
  StoreStatus,
  { icon: React.ElementType; classes: string; message: string }
> = {
  pending: {
    icon: Clock,
    classes: "bg-amber-50 border-amber-200 text-amber-800",
    message:
      "Your store is pending review. You can set up products now — they'll go live once approved.",
  },
  active: {
    icon: CheckCircle2,
    classes: "bg-green-50 border-green-200 text-green-800",
    message: "Your store is live and visible to buyers.",
  },
  suspended: {
    icon: AlertTriangle,
    classes: "bg-red-50 border-red-200 text-red-800",
    message:
      "Your store has been suspended. Contact support for more information.",
  },
  rejected: {
    icon: XCircle,
    classes: "bg-red-50 border-red-200 text-red-800",
    message:
      "Your store application was not approved. Contact support to learn more.",
  },
};

export default function StoreStatusBanner({ status }: { status: StoreStatus }) {
  if (status === "active") return null;

  const { icon: Icon, classes, message } = CONFIG[status];

  return (
    <div
      className={`flex items-start gap-3 border rounded-xl px-4 py-3.5 text-sm ${classes}`}
    >
      <Icon size={18} className="flex-shrink-0 mt-0.5" strokeWidth={1.8} />
      <p>{message}</p>
    </div>
  );
}
