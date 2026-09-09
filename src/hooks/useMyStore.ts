import useSWR from "swr";
import { fetchMyStore } from "@/lib/api/store";

export function useMyStore() {
  const { data, error, isLoading, mutate } = useSWR("my-store", fetchMyStore);
  return {
    store: data,
    isLoading,
    isError: !!error,
    mutate,
  };
}
