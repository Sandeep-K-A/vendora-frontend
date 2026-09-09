import StoreProfileCard from "./StoreProfileCard";
import StoreStatusBanner from "./StoreStatusBanner";
import { useMyStore } from "@/hooks/useMyStore";

export default function StoreOverview() {
  const { store, isLoading, isError } = useMyStore();
  if (isLoading) {
    return <div className="text-sm text-ink-2">Loading your store...</div>;
  }

  if (isError || !store) {
    return (
      <div className="text-sm text-red-600">
        Couldn't load your store details.
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-ink">Store overview</h1>

      <StoreStatusBanner status={store.verificationStatus} />

      <StoreProfileCard store={store} onEdit={() => {}} />
    </div>
  );
}
