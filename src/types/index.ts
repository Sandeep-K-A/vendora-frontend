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
