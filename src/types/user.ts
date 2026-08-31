export interface User {
  id: string;
  fullname: string;
  email: string;
  role: "user" | "admin";
  isVendor: boolean;
  storeId: string | null; // null until store onboarding is completed
  createdAt: string;
}
