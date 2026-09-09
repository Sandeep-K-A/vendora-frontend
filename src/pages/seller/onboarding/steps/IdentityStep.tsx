import { Controller, type Control } from "react-hook-form";
import FormField from "@/components/common/FormField";
import SectionHeading from "@/components/common/SectionHeading";
import FileDropField from "@/components/common/FileDropField";
import type { StoreSchema } from "@/lib/schemas/store.schema";

export default function IdentityStep({
  control,
}: {
  control: Control<StoreSchema>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        title="Tell us about your store"
        subtitle="This is what buyers will see on your storefront."
      />
      <Controller
        name="storeName"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label="Store name"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="Ray's Electronics"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="storeDescription"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label="Store description"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="What do you sell? What makes your store worth visiting?"
            error={fieldState.error?.message}
          />
        )}
      />
      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="logo"
          control={control}
          render={({ field }) => (
            <FileDropField
              label="Logo"
              hint="Square, optional"
              file={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="banner"
          control={control}
          render={({ field }) => (
            <FileDropField
              label="Banner"
              hint="Wide, optional"
              file={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </div>
  );
}
