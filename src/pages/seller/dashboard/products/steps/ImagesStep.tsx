import { Controller, type Control } from "react-hook-form";
import MultiImageUpload from "@/components/common/MultiImageUpload";
import SectionHeading from "@/components/common/SectionHeading";
import type { ProductSchema } from "@/lib/schemas/product.schema";

export default function ImagesStep({
  control,
}: {
  control: Control<ProductSchema>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        title="Add product photos"
        subtitle="Clear, well-lit photos help buyers trust your listing."
      />
      <Controller
        name="images"
        control={control}
        render={({ field, fieldState }) => (
          <MultiImageUpload
            images={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />
    </div>
  );
}
