import { Controller, type Control } from "react-hook-form";
import FormField from "@/components/common/FormField";
import SectionHeading from "@/components/common/SectionHeading";
import type { Subcategory } from "@/types/category";
import type { ProductSchema } from "@/lib/schemas/product.schema";

export default function SpecificationsStep({
  control,
  subcategory,
}: {
  control: Control<ProductSchema>;
  subcategory: Subcategory | undefined;
}) {
  if (!subcategory || subcategory.specFields.length === 0) {
    return (
      <div className="flex flex-col gap-5">
        <SectionHeading
          title="Specifications"
          subtitle="No specific fields for this subcategory."
        />
        <p className="text-sm text-ink-2">You can continue to the next step.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        title="Specifications"
        subtitle="Buyers use these details to compare products."
      />
      {subcategory.specFields.map((specField) => (
        <Controller
          key={specField.key}
          name={`specifications.${specField.key}`}
          control={control}
          render={({ field, fieldState }) => (
            <FormField
              label={
                specField.required ? `${specField.label} *` : specField.label
              }
              name={field.name}
              value={field.value ?? ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error?.message}
            />
          )}
        />
      ))}
    </div>
  );
}
