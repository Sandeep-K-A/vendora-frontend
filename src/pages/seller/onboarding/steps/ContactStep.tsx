import { Controller, type Control } from "react-hook-form";
import FormField from "@/components/common/FormField";
import SectionHeading from "@/components/common/SectionHeading";
import type { StoreSchema } from "@/lib/schemas/store.schema";

export default function ContactStep({
  control,
}: {
  control: Control<StoreSchema>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        title="Contact & legal details"
        subtitle="Required for verification and buyer trust."
      />
      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label="Phone number"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="+91 98765 43210"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="gstNumber"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label="GST number"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="22AAAAA0000A1Z5"
            error={fieldState.error?.message}
          />
        )}
      />
    </div>
  );
}
