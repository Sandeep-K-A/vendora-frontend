import { z } from "zod";
import { Store, Phone, MapPin, LayoutGrid, ClipboardCheck } from "lucide-react";

export const storeSchema = z
  .object({
    //step 1:Identity
    storeName: z
      .string()
      .min(2, "Store Name must be atleast 2 characters long")
      .max(100),
    storeDescription: z
      .string()
      .min(20, "Tell buyers a bit more -- at least 20 characters")
      .max(500),
    logo: z.instanceof(File).nullable().optional(),
    banner: z.instanceof(File).nullable().optional(),

    //step 2:Contact and legal
    phone: z.string().min(10, "Enter a valid phone number").max(15),
    gstNumber: z
      .string()
      .min(1, "GST number is required")
      .regex(
        /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d[A-Z]\d$/,
        "Enter a valid GST number",
      ),

    //step 3:Address
    address: z.object({
      street: z.string().min(1, "Street is required"),
      city: z.string().min(1, "City is required"),
      state: z.string().min(1, "State is required"),
      country: z.string().min(1, "Country is required"),
      postalCode: z.string().min(1, "Enter a valid postal code"),
    }),

    //step 4:Categories
    categoryMode: z.enum(["all", "selected"]),
    categories: z.array(z.string()),
  })
  .refine((data) => data.categoryMode === "all" || data.categories.length > 0, {
    message: "Select at least one category",
    path: ["categories"],
  });

export type StoreSchema = z.infer<typeof storeSchema>;

export const stepFields: Record<number, (keyof StoreSchema)[]> = {
  0: ["storeName", "storeDescription", "logo", "banner"],
  1: ["phone", "gstNumber"],
  2: ["address"],
  3: ["categoryMode", "categories"],
};

export const STEPS = [
  { label: "Identity", icon: Store },
  { label: "Contact", icon: Phone },
  { label: "Address", icon: MapPin },
  { label: "Category", icon: LayoutGrid },
  { label: "Review", icon: ClipboardCheck },
];
