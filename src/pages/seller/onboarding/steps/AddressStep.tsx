import { Controller, type Control } from "react-hook-form";
import FormField from "@/components/common/FormField";
import SectionHeading from "@/components/common/SectionHeading";
import type { StoreSchema } from "@/lib/schemas/store.schema";

export default function AddressStep({
  control,
}: {
  control: Control<StoreSchema>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        title="Store address"
        subtitle="Where your business is registered."
      />
      <Controller
        name="address.street"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label="Street"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={fieldState.error?.message}
          />
        )}
      />
      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="address.city"
          control={control}
          render={({ field, fieldState }) => (
            <FormField
              label="City"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="address.state"
          control={control}
          render={({ field, fieldState }) => (
            <FormField
              label="State"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="address.postalCode"
          control={control}
          render={({ field, fieldState }) => (
            <FormField
              label="Postal code"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="address.country"
          control={control}
          render={({ field, fieldState }) => (
            <FormField
              label="Country"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error?.message}
            />
          )}
        />
      </div>
    </div>
  );
}
