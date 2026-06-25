export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Category {
  icon: string;
  name: string;
  count: string;
  to: string;
}

export interface MarqueeItem {
  icon: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
  ai: boolean;
  accent: "green" | "gold" | "teal" | "purple" | "sky" | "rose";
}

export type PanelFeature = Omit<Feature, "ai" | "accent">;

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  rating: number;
  text: string;
}

export interface ComparisonRow {
  feature: string;
  vendora: string | boolean;
  flipkart: string | boolean;
  amazon: string | boolean;
}

export interface HowItWorksStep {
  icon: string;
  title: string;
  desc: string;
}

export interface SellerStep {
  step: string;
  title: string;
  desc: string;
}

export interface AiSearchDemoData {
  icon: string;
  name: string;
  spec: string;
  price: string;
  match: string;
  matchColor: string;
}

export interface SellerProduct {
  icon: string;
  name: string;
  meta: string;
  primaryValue: string;
}

export interface DashboardStat {
  value: string;
  label: string;
  valueColor?: string;
}

export interface Requirement {
  label: string;
  test: (value: string) => boolean;
}

export interface VariantOption {
  value: string;
  label: string;
  price?: string;
  oldPrice?: string;
  inStock: boolean;
  image?: string;
}

export interface VariantDimension {
  id: string;
  label: string;
  options: VariantOption[];
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  verified: boolean;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  rating: number;
  reviewCount: string;
  imageBg?: string;
  image: string;
  images?: string[];
  sellerName?: string;
  category: "electronics" | "fashion" | "home-kitchen" | "books" | "sports";
  subcategory?: string;
  specs?: Record<string, string>;
  variants?: VariantDimension[];
  reviews?: Review[];
  description?: string;
  highlights?: string[];
  inBox?: string[];
}

export interface SearchResult {
  id: string;
  name: string;
  spec: string;
  price: string;
  matchScore: number;
  image: string;
  imageBg: string;
}

export interface Store {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  location: string;
  productCount: number;
  tags: string[];
  isVerified: boolean;
  topProduct: {
    name: string;
    price: string;
    image: string;
  };
}

export interface FooterLink {
  label: string;
  to: string;
}

export type FooterLinks = Record<string, FooterLink[]>;

export type FilterType =
  | "price"
  | "rating"
  | "brand"
  | "checkbox"
  | "availability";

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterConfig {
  id: string;
  type: FilterType;
  label: string;
  options?: FilterOption[];
}

export interface Subcategory {
  label: string;
  value: string;
  icon: string;
  count: number;
}

export interface CategoryConfig {
  label: string;
  slug: string;
  subcategories: Subcategory[];
}

export interface CartItem {
  product: Product;
  selectedVariants: Record<string, string>;
  quantity: number;
  cartItemId: string;
}

export interface CartStore {
  items: CartItem[];
  addItem: (product: Product, selectedVariants: Record<string, string>) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "out_for_delivery"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  product: Product;
  selectedVariants: Record<string, string>;
  quantity: number;
  price: string;
}

export interface TrackingStep {
  status: string;
  label: string;
  timestamp: string;
  completed: boolean;
  current: boolean;
}

export interface StatusConfig {
  label: string;
  color: string;
  bg: string;
  dot: string;
}

export interface Order {
  id: string;
  placedAt: string;
  status: OrderStatus;
  items: OrderItem[];
  total: string;
  deliveryAddress: {
    name: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: string;
  estimatedDelivery?: string;
  tracking?: TrackingStep[];
}

export interface ProfileData {
  name: string;
  email: string;
  phone: string;
}

export interface Address {
  id: string;
  label: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  isDefault: boolean;
}
