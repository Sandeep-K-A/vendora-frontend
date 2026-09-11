import type { UseFormWatch } from "react-hook-form";
import SectionHeading from "@/components/common/SectionHeading";
import ReviewSection from "@/components/common/ReviewSection";
import ReviewRow from "@/components/common/ReviewRow";
import type { Category } from "@/types/category";
import type { ProductSchema } from "@/lib/schemas/product.schema";

export default function ProductReviewStep({
  watch,
  categories,
  onEditStep,
}: {
  watch: UseFormWatch<ProductSchema>;
  categories: Category[];
  onEditStep: (step: number) => void;
}) {
  const category = categories.find((c) => c._id === watch("categoryId"));
  const subcategory = category?.subcategories.find(
    (s) => s._id === watch("subcategoryId"),
  );
  const specs = watch("specifications");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading
        title="Review your listing"
        subtitle="Make sure everything looks right before publishing."
      />

      <ReviewSection title="Basics" onEdit={() => onEditStep(0)}>
        <ReviewRow label="Name" value={watch("name")} />
        <ReviewRow label="About" value={watch("aboutThisProduct")} />
        <ReviewRow
          label="Highlights"
          value={watch("keyHighlights").join(", ")}
        />
      </ReviewSection>

      <ReviewSection title="Category" onEdit={() => onEditStep(1)}>
        <ReviewRow label="Category" value={category?.name ?? "—"} />
        <ReviewRow label="Subcategory" value={subcategory?.name ?? "—"} />
      </ReviewSection>

      <ReviewSection title="Specifications" onEdit={() => onEditStep(2)}>
        {Object.entries(specs).length > 0 ? (
          Object.entries(specs).map(([key, value]) => (
            <ReviewRow key={key} label={key} value={value || "—"} />
          ))
        ) : (
          <ReviewRow label="Specifications" value="None" />
        )}
      </ReviewSection>

      <ReviewSection title="Pricing & stock" onEdit={() => onEditStep(3)}>
        <ReviewRow label="Price" value={`₹${watch("price")}`} />
        <ReviewRow label="Stock" value={String(watch("stock"))} />
      </ReviewSection>

      <ReviewSection title="Images" onEdit={() => onEditStep(4)}>
        <ReviewRow
          label="Uploaded"
          value={`${watch("images").filter(Boolean).length} of 4`}
        />
      </ReviewSection>
    </div>
  );
}
