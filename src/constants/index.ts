import type {
  NavLink,
  Stat,
  Category,
  MarqueeItem,
  Feature,
  Testimonial,
  ComparisonRow,
  HowItWorksStep,
  SellerStep,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Sell on Vendora", href: "#sellers" },
  { label: "Categories", href: "#categories" },
];

export const STATS: Stat[] = [
  { value: "2.4k+", label: "Active sellers across India" },
  { value: "18k+", label: "Products listed" },
  { value: "0%", label: "Commission — always" },
  { value: "3", label: "AI features built in" },
];

export const CATEGORIES: Category[] = [
  { icon: "📱", name: "Electronics", count: "4,200+ items" },
  { icon: "👗", name: "Fashion", count: "3,100+ items" },
  { icon: "🏠", name: "Home & Kitchen", count: "2,800+ items" },
  { icon: "📚", name: "Books", count: "1,500+ items" },
  { icon: "⚽", name: "Sports", count: "900+ items" },
];

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { icon: "📱", label: "Smartphones" },
  { icon: "💻", label: "Laptops" },
  { icon: "🎧", label: "Audio" },
  { icon: "👗", label: "Fashion" },
  { icon: "🏠", label: "Home & Kitchen" },
  { icon: "📚", label: "Books" },
  { icon: "⚽", label: "Sports" },
  { icon: "⌚", label: "Wearables" },
  { icon: "🎮", label: "Gaming" },
  { icon: "📷", label: "Cameras" },
];

export const BUYER_FEATURES: Feature[] = [
  {
    icon: "🔍",
    title: "AI natural language search",
    desc: "Search the way you think. No need to know exact product names — just describe what you want.",
    ai: true,
    accent: "green",
  },
  {
    icon: "⚖️",
    title: "Smart product comparison",
    desc: "Side-by-side specs with winner-highlighted rows. AI explains which product fits your needs and why.",
    ai: true,
    accent: "gold",
  },
  {
    icon: "📝",
    title: "AI verdict on every product",
    desc: '"Best for" and "Weak at" — a two-line honest summary on every product page. No sponsored spin.',
    ai: true,
    accent: "teal",
  },
  {
    icon: "🏪",
    title: "Verified seller storefronts",
    desc: "Browse a seller's full catalogue, ratings, and location before you buy. Know who you're buying from.",
    ai: false,
    accent: "purple",
  },
  {
    icon: "🛒",
    title: "Persistent cart & wishlist",
    desc: "Your cart and wishlist survive page refreshes and browser restarts. Shop at your own pace.",
    ai: false,
    accent: "sky",
  },
  {
    icon: "🕐",
    title: "Recently viewed history",
    desc: "Products you browsed are always one scroll away. No more retracing your steps.",
    ai: false,
    accent: "rose",
  },
];

export const SELLER_FEATURES: Feature[] = [
  {
    icon: "🏪",
    title: "Your own storefront",
    desc: "A dedicated store page with your brand, catalogue, ratings, and location. Professional in minutes.",
    ai: false,
    accent: "green",
  },
  {
    icon: "0%",
    title: "Zero commission, forever",
    desc: "No platform cut on any sale, ever. What you price is what you earn. Always.",
    ai: false,
    accent: "gold",
  },
  {
    icon: "✦",
    title: "AI description generator",
    desc: "Fill in specs, click Generate — AI writes a conversion-optimised product description instantly.",
    ai: true,
    accent: "teal",
  },
  {
    icon: "📦",
    title: "Full product management",
    desc: "Add, edit, delete products. Toggle stock status in one click. Manage everything from one screen.",
    ai: false,
    accent: "purple",
  },
  {
    icon: "📊",
    title: "Orders & analytics dashboard",
    desc: "Track incoming orders, update shipping status, and see revenue charts at a glance.",
    ai: false,
    accent: "sky",
  },
  {
    icon: "⚡",
    title: "Go live in 3 steps",
    desc: "Register → create your store → add products. No documentation, no approval wait, no fees.",
    ai: false,
    accent: "rose",
  },
];

export const AI_HIGHLIGHTS: Omit<Feature, "ai" | "accent">[] = [
  {
    icon: "🔍",
    title: "Natural language search",
    desc: "Type queries the way you think. Get ranked matches by intent, not keyword density.",
  },
  {
    icon: "📝",
    title: "AI product verdict",
    desc: 'Every product page shows "Best for" and "Weak at" — no reading 40 reviews to find the dealbreaker.',
  },
  {
    icon: "⚖️",
    title: "AI comparison recommendation",
    desc: "Compare up to 3 products. Get an AI paragraph recommending the best one for your use case.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arjun K.",
    role: "Student, Thrissur",
    initials: "AK",
    rating: 5,
    text: 'I searched "best laptop for college under 40k" and it actually understood me. Got 4 relevant results, compared them side by side, AI told me which one to buy. Done in 8 minutes.',
  },
  {
    name: "Rohit S.",
    role: "Seller, Bengaluru",
    initials: "RS",
    rating: 5,
    text: "I've been selling refurbished phones on OLX for 3 years. Vendora gave me a proper storefront in 10 minutes. The AI description writer is a game changer — I never knew what to write before.",
  },
  {
    name: "Priya M.",
    role: "Marketing Manager, Chennai",
    initials: "PM",
    rating: 5,
    text: "The AI verdict badge told me the Sony headphones were weak at call quality. I was going to buy them for WFH. Saved me from a mistake. That feature alone is worth using Vendora.",
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Seller commission",
    vendora: "0%",
    flipkart: "15–25%",
    amazon: "8–20%",
  },
  {
    feature: "AI natural language search",
    vendora: true,
    flipkart: false,
    amazon: false,
  },
  {
    feature: "AI product verdict",
    vendora: true,
    flipkart: false,
    amazon: false,
  },
  {
    feature: "AI comparison recommendation",
    vendora: true,
    flipkart: false,
    amazon: false,
  },
  {
    feature: "AI description generator",
    vendora: true,
    flipkart: false,
    amazon: false,
  },
  {
    feature: "Verified seller storefronts",
    vendora: true,
    flipkart: true,
    amazon: true,
  },
  {
    feature: "Sponsored listing priority",
    vendora: "Never",
    flipkart: "Yes",
    amazon: "Yes",
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    icon: "🔍",
    title: "Search in plain language",
    desc: 'Type exactly what you need — "best earphones under ₹2000 for gym with good bass." Our AI parses your intent and returns products ranked relevance.',
  },
  {
    icon: "⚖️",
    title: "Compare with AI clarity",
    desc: "Pin up to 3 products and get a side-by-side spec table with winner-highlighted rows, plus an AI paragraph explaining which fits your specific use case.",
  },
  {
    icon: "🏪",
    title: "Buy from verified stores",
    desc: "Every listing links to a real seller storefront with their full catalogue, ratings, and location. Know exactly who you're buying from before you add to cart.",
  },
  {
    icon: "🛒",
    title: "Cart that remembers you",
    desc: "Your cart persists across sessions. Recently viewed products are always one scroll away. Wishlist anything, come back later — it's all saved.",
  },
];

export const SELLER_STEPS: SellerStep[] = [
  {
    step: "1",
    title: "Register & create your store",
    desc: "Name your store, pick a category, write a short description — done in under 5 minutes. No documents required.",
  },
  {
    step: "2",
    title: "Add products with AI help",
    desc: 'Fill in specs and price. Hit "Generate with AI" to get a professional product description written for you instantly.',
  },
  {
    step: "3",
    title: "Manage orders & track sales",
    desc: "Your dashboard shows revenue, orders, and top products. Update order status with one click. No spreadsheets.",
  },
];
