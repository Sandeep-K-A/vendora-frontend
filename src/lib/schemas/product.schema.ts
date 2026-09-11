import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Product name must be atleast 3 characters long")
    .max(150),
  aboutThisProduct: z
    .string()
    .min(20, "Add a bit more detail - 20 characters long")
    .max(1000),
  keyHighlights: z
    .array(z.string().min(1))
    .min(1, "Add at least one key highlight")
    .max(5, "Maximum 5 key highlights"),
  categoryId: z.string().min(1, "Select a category"),
  subcategoryId: z.string().min(1, "Select a subcategory"),
  specifications: z.record(z.string(), z.string()),

  price: z
    .string()
    .min(1, "Price is required")
    .refine((v) => Number(v) > 0, "Price must be greater than 0"),
  stock: z
    .string()
    .min(1, "Stock is required")
    .refine((v) => Number(v) >= 0, "Stock cannot be negative"),

  images: z
    .array(z.instanceof(File).nullable())
    .length(4)
    .refine((imgs) => imgs.some((img) => img !== null), {
      message: "Add at least one product image",
    }),
});

export type ProductSchema = z.infer<typeof productSchema>;

export const productStepFields: Record<number, (keyof ProductSchema)[]> = {
  0: ["name", "aboutThisProduct", "keyHighlights"],
  1: ["categoryId", "subcategoryId"],
  2: ["specifications"],
  3: ["price", "stock"],
  4: ["images"],
};

export const PRODUCT_STEPS = [
  "Basics",
  "Category",
  "Specifications",
  "Pricing",
  "Images",
  "Review",
];
