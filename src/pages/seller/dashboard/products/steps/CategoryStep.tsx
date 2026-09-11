import { Controller, type Control } from "react-hook-form";
import SectionHeading from "@/components/common/SectionHeading";
import type { Category } from "@/types/category";
import type { ProductSchema } from "@/lib/schemas/product.schema";

export default function CategoryStep({
  control,
  categories,
  categoryId,
}: {
  control: Control<ProductSchema>;
  categories: Category[];
  categoryId: string;
}) {
  const selectedCategory = categories.find((c) => c._id === categoryId);

  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        title="Where does this belong?"
        subtitle="This determines what buyers filter by."
      />
      <Controller
        name="categoryId"
        control={control}
        render={({ field, fieldState }) => (
          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">
              Category
            </label>
            <select
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              className="w-full border border-line rounded-xl px-3.5 py-2.5 text-sm bg-white"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {fieldState.error && (
              <p className="text-sm text-red-500 mt-1.5">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      {selectedCategory && (
        <Controller
          name="subcategoryId"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <label className="text-sm font-medium text-ink block mb-1.5">
                Subcategory
              </label>
              <select
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className="w-full border border-line rounded-xl px-3.5 py-2.5 text-sm bg-white"
              >
                <option value="">Select a subcategory</option>
                {selectedCategory.subcategories.map((sub) => (
                  <option key={sub._id} value={sub._id}>
                    {sub.name}
                  </option>
                ))}
              </select>
              {fieldState.error && (
                <p className="text-sm text-red-500 mt-1.5">
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
