import type { UseFormWatch } from "react-hook-form";
import SectionHeading from "@/components/common/SectionHeading";
import ReviewSection from "@/components/common/ReviewSection";
import ReviewRow from "@/components/common/ReviewRow";
import type { Category } from "@/types/category";
import type { StoreSchema } from "@/lib/schemas/store.schema";

export default function ReviewStep({
  watch,
  categories,
  onEditStep,
}: {
  watch: UseFormWatch<StoreSchema>;
  categories: Category[];
  onEditStep: (step: number) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading
        title="Review your details"
        subtitle="Your store goes live once approved — you can add products right away."
      />

      <ReviewSection title="Identity" onEdit={() => onEditStep(0)}>
        <ReviewRow label="Store name" value={watch("storeName")} />
        <ReviewRow label="Description" value={watch("storeDescription")} />
        <ReviewRow label="Logo" value={watch("logo")?.name ?? "Not uploaded"} />
        <ReviewRow
          label="Banner"
          value={watch("banner")?.name ?? "Not uploaded"}
        />
      </ReviewSection>

      <ReviewSection title="Contact & legal" onEdit={() => onEditStep(1)}>
        <ReviewRow label="Phone" value={watch("phone")} />
        <ReviewRow label="GST number" value={watch("gstNumber")} />
      </ReviewSection>

      <ReviewSection title="Address" onEdit={() => onEditStep(2)}>
        <ReviewRow
          label="Address"
          value={`${watch("address.street")}, ${watch("address.city")}, ${watch("address.state")} ${watch("address.postalCode")}, ${watch("address.country")}`}
        />
      </ReviewSection>

      <ReviewSection title="Categories" onEdit={() => onEditStep(3)}>
        <ReviewRow
          label="Selling in"
          value={
            watch("categoryMode") === "all"
              ? "All categories"
              : categories
                  .filter((cat) => watch("categories").includes(cat._id))
                  .map((cat) => cat.name)
                  .join(", ") || "None selected"
          }
        />
      </ReviewSection>
    </div>
  );
}
