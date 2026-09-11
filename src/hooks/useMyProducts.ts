import useSWR from "swr";
import { fetchMyProducts, type ProductFilters } from "@/lib/api/product";

export function useMyProducts(filters: ProductFilters) {
  const { data, isLoading, mutate } = useSWR(
    [
      "my-products",
      filters.page,
      filters.search,
      filters.categoryId,
      filters.subcategoryId,
      filters.sortBy,
    ],
    () => fetchMyProducts(filters),
  );

  return { data, isLoading, mutate };
}
