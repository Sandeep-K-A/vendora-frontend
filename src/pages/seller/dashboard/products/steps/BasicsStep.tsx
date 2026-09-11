import { Controller, type Control } from "react-hook-form";
import FormField from "@/components/common/FormField";
import TextareaField from "@/components/common/TextareaField";
import KeyHighlightsInput from "@/components/common/KeyHighlightsInput";
import SectionHeading from "@/components/common/SectionHeading";
import type { ProductSchema } from "@/lib/schemas/product.schema";

export default function BasicsStep({
  control,
}: {
  control: Control<ProductSchema>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        title="Tell buyers about this product"
        subtitle="Clear, honest descriptions sell better."
      />
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label="Product name"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="Dell XPS 15"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="aboutThisProduct"
        control={control}
        render={({ field, fieldState }) => (
          <TextareaField
            label="About this product"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="A powerful, sleek laptop built for creators and professionals."
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="keyHighlights"
        control={control}
        render={({ field, fieldState }) => (
          <KeyHighlightsInput
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />
    </div>
  );
}
