import { Controller, type Control } from "react-hook-form";
import SectionHeading from "@/components/common/SectionHeading";
import ModeCard from "@/components/common/ModeCard";
import type { Category } from "@/types/category";
import type { StoreSchema } from "@/lib/schemas/store.schema";

export default function CategoryStep({
  control,
  categories,
  categoriesLoading,
  categoryMode,
}: {
  control: Control<StoreSchema>;
  categories: Category[];
  categoriesLoading: boolean;
  categoryMode: "all" | "selected";
}) {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        title="What do you sell?"
        subtitle="Buyers will find your store under these categories."
      />
      <Controller
        name="categoryMode"
        control={control}
        render={({ field }) => (
          <div className="grid grid-cols-2 gap-3">
            <ModeCard
              label="Specific categories"
              selected={field.value === "selected"}
              onClick={() => field.onChange("selected")}
            />
            <ModeCard
              label="All categories"
              selected={field.value === "all"}
              onClick={() => field.onChange("all")}
            />
          </div>
        )}
      />

      {categoryMode === "selected" && (
        <Controller
          name="categories"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              {categoriesLoading ? (
                <p className="text-sm text-ink-2">Loading categories...</p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => {
                    const isChecked = field.value.includes(cat._id);
                    return (
                      <label
                        key={cat._id}
                        className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border cursor-pointer transition-colors ${
                          isChecked
                            ? "border-forest bg-forest-xxl"
                            : "border-line hover:bg-bg"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            field.onChange(
                              e.target.checked
                                ? [...field.value, cat._id]
                                : field.value.filter((id) => id !== cat._id),
                            );
                          }}
                          onBlur={field.onBlur}
                          className="accent-forest"
                        />
                        <span className="text-sm text-ink">{cat.name}</span>
                      </label>
                    );
                  })}
                </div>
              )}
              {fieldState.error && (
                <p className="text-sm text-red-500 mt-2">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />
      )}
    </div>
  );
}
