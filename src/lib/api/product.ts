import api from "./axios";
import type { ProductSchema } from "../schemas/product.schema";

export interface Product {
  _id: string;
  store: string;
  category: { _id: string; name: string };
  subcategoryId: string;
  name: string;
  aboutThisProduct: string;
  keyHighlights: string[];
  price: number;
  stock: number;
  images: string[];
  specifications: { key: string; label: string; value: string }[];
  isActive: boolean;
  createdAt: string;
}

export interface PaginatedProducts {
  products: Product[];
  page: number;
  totalPages: number;
  totalCount: number;
}

export interface ProductFilters {
  page: number;
  search?: string;
  categoryId?: string;
  subcategoryId?: string;
  sortBy?: "newest" | "priceAsc" | "priceDesc" | "stockAsc";
}

export async function createProduct(payload: ProductSchema) {
  const formData = new FormData();

  formData.append("name", payload.name);
  formData.append("aboutThisProduct", payload.aboutThisProduct);
  formData.append("keyHighlights", JSON.stringify(payload.keyHighlights));
  formData.append("categoryId", payload.categoryId);
  formData.append("subcategoryId", payload.subcategoryId);
  formData.append("price", payload.price);
  formData.append("stock", payload.stock);

  const specsArray = Object.entries(payload.specifications).map(
    ([key, value]) => ({ key, label: key, value }),
  );
  formData.append("specifications", JSON.stringify(specsArray));

  payload.images.forEach((file) => {
    if (file) formData.append("images", file);
  });

  const { data } = await api.post("/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data.data.product as Product;
}

export async function fetchMyProducts(filters: ProductFilters) {
  const params = new URLSearchParams();
  params.set("page", String(filters.page));
  params.set("limit", "10");
  if (filters.search) params.set("search", filters.search);
  if (filters.categoryId) params.set("category", filters.categoryId);
  if (filters.subcategoryId) params.set("subcategory", filters.subcategoryId);
  if (filters.sortBy) params.set("sort", filters.sortBy);

  const { data } = await api.get(`/products/me?${params}`);
  return data.data as PaginatedProducts;
}

export async function updateProductStock(id: string, stock: number) {
  const { data } = await api.patch(`/products/${id}/stock`, { stock });
  return data.data.product as Product;
}

export async function deactivateProduct(id: string) {
  await api.patch(`/products/${id}/deactivate`);
}
