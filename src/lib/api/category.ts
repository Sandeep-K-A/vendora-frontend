import api from "./axios";
import type { Category } from "@/types/category";

export async function fetchCategories(): Promise<Category[]> {
  const { data } = await api.get("/categories");
  return data.data.categories;
}
