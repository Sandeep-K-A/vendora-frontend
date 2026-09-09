import api from "./axios";
import type { User } from "@/types/user";
import type { StoreSchema } from "@/lib/schemas/store.schema";

export interface Store {
  _id: string;
  owner: string;
  storeName: string;
  storeDescription: string;
  logo: string | null;
  banner: string | null;
  categoryMode: "all" | "selected";
  categories: { _id: string; name: string; slug: string }[];
  phone: string;
  gstNumber: string;
  address: StoreSchema["address"];
  verificationStatus: "pending" | "active" | "suspended" | "rejected";
}

export async function createStore(payload: StoreSchema) {
  const formData = new FormData();

  formData.append("storeName", payload.storeName);
  formData.append("storeDescription", payload.storeDescription);
  formData.append("phone", payload.phone);
  formData.append("gstNumber", payload.gstNumber);
  formData.append("categoryMode", payload.categoryMode);
  formData.append("categories", JSON.stringify(payload.categories));
  formData.append("address", JSON.stringify(payload.address));

  if (payload.logo) formData.append("logo", payload.logo);
  if (payload.banner) formData.append("banner", payload.banner);

  const { data } = await api.post("/store", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data.data as { store: Store; user: User };
}

export async function fetchMyStore() {
  const { data } = await api.get("/store/me");
  return data.data.store as Store;
}
