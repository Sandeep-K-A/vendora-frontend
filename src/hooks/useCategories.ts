import useSWR from "swr";
import { fetchCategories } from "@/lib/api/category";

export function useCategories() {
  const { data, error, isLoading } = useSWR("categories", fetchCategories, {
    revalidateOnFocus: false,
    dedupingInterval: 60_000,
  });

  return {
    categories: data ?? [],
    isLoading,
    isError: !!error,
  };
}
