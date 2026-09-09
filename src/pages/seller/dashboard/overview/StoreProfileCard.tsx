import { Pencil, Phone, MapPin, FileBadge2 } from "lucide-react";

interface StoreProfileCardProps {
  store: {
    storeName: string;
    storeDescription: string;
    logo: string | null;
    banner: string | null;
    phone: string;
    gstNumber: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
    };
    categories: { _id: string; name: string; slug: string }[];
    categoryMode: "all" | "selected";
  };
  onEdit: () => void;
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function StoreProfileCard({
  store,
  onEdit,
}: StoreProfileCardProps) {
  const sellingInLabel =
    store.categoryMode === "all"
      ? "All categories"
      : store.categories.map((cat) => cat.name).join(", ") ||
        "No categories selected";
  return (
    <div className="bg-white border border-line rounded-2xl overflow-hidden">
      {/* Banner */}
      <div className="h-32 md:h-40 relative">
        {store.banner ? (
          <img
            src={store.banner}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-forest to-ink flex items-center justify-center">
            <span className="text-white text-lg font-bold">
              {store.storeName}
            </span>
          </div>
        )}
      </div>

      <div className="px-5 md:px-6 pb-6">
        {/* Logo overlapping banner + edit button */}
        <div className="flex items-end justify-between -mt-8 mb-4">
          <div className="w-16 h-16 rounded-2xl border-4 border-white overflow-hidden bg-forest-xxl flex-shrink-0">
            {store.logo ? (
              <img
                src={store.logo}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-forest font-bold text-lg">
                {getInitials(store.storeName)}
              </div>
            )}
          </div>
          <button
            onClick={onEdit}
            className="flex items-center gap-1.5 text-sm font-medium text-forest hover:underline mb-1"
          >
            <Pencil size={14} />
            Edit store
          </button>
        </div>

        <h2 className="text-xl font-bold text-ink">{store.storeName}</h2>
        <p className="text-sm text-ink-2 mt-1.5 leading-relaxed">
          {store.storeDescription}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-5 pt-5 border-t border-line">
          <DetailRow icon={Phone} label="Phone" value={store.phone} />
          <DetailRow
            icon={FileBadge2}
            label="GST number"
            value={store.gstNumber}
          />
          <DetailRow
            icon={MapPin}
            label="Address"
            value={`${store.address.street}, ${store.address.city}, ${store.address.state} ${store.address.postalCode}, ${store.address.country}`}
          />
          <DetailRow
            icon={FileBadge2}
            label="Selling in"
            value={sellingInLabel}
          />
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon
        size={16}
        className="text-ink-3 flex-shrink-0 mt-0.5"
        strokeWidth={1.8}
      />
      <div className="min-w-0">
        <p className="text-xs text-ink-3">{label}</p>
        <p className="text-sm text-ink truncate">{value}</p>
      </div>
    </div>
  );
}
