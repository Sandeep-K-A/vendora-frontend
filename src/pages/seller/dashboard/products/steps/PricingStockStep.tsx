import { Controller, type Control } from "react-hook-form";
import FormField from "@/components/common/FormField";
import SectionHeading from "@/components/common/SectionHeading";
import type { ProductSchema } from "@/lib/schemas/product.schema";

export default function PricingStockStep({
  control,
}: {
  control: Control<ProductSchema>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        title="Pricing & stock"
        subtitle="You can update these anytime after listing."
      />
      <Controller
        name="price"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label="Price (₹)"
            name={field.name}
            type="text"
            value={String(field.value ?? "")}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="129999"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="stock"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label="Stock quantity"
            name={field.name}
            type="text"
            value={String(field.value ?? "")}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="15"
            error={fieldState.error?.message}
          />
        )}
      />
    </div>
  );
}
