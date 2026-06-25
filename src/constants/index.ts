import type {
  NavLink,
  Stat,
  Category,
  MarqueeItem,
  Feature,
  PanelFeature,
  Testimonial,
  ComparisonRow,
  HowItWorksStep,
  SellerStep,
  AiSearchDemoData,
  SellerProduct,
  DashboardStat,
  Product,
  Store,
  SearchResult,
  FooterLinks,
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
  {
    icon: "📱",
    name: "Electronics",
    count: "4,200+ items",
    to: "/category/electronics",
  },
  {
    icon: "👗",
    name: "Fashion",
    count: "3,100+ items",
    to: "/category/fashion",
  },
  {
    icon: "🏠",
    name: "Home & Kitchen",
    count: "2,800+ items",
    to: "/category/home-kitchen",
  },
  { icon: "📚", name: "Books", count: "1,500+ items", to: "/category/books" },
  { icon: "⚽", name: "Sports", count: "900+ items", to: "/category/sports" },
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

export const AI_SEARCH_DEMO_DATA: Record<string, AiSearchDemoData[]> = {
  laptop: [
    {
      icon: "💻",
      name: "Acer Aspire Lite 15",
      spec: "Ryzen 5 · 16GB · 512GB SSD · 10hr",
      price: "₹38,490",
      match: "94%",
      matchColor: "text-vendora-green",
    },
    {
      icon: "💻",
      name: "HP Pavilion 15",
      spec: "i5-13th · 8GB · 512GB · FHD IPS",
      price: "₹49,990",
      match: "81%",
      matchColor: "text-gold",
    },
    {
      icon: "💻",
      name: "Lenovo IdeaPad Slim 3",
      spec: "Ryzen 3 · 8GB · 256GB · 7hr",
      price: "₹31,990",
      match: "73%",
      matchColor: "text-ink-3",
    },
  ],
  phone: [
    {
      icon: "📱",
      name: "iQOO Z9 5G",
      spec: "Snapdragon 7s · 6000mAh · 50MP",
      price: "₹14,999",
      match: "97%",
      matchColor: "text-vendora-green",
    },
    {
      icon: "📱",
      name: "Redmi Note 13 Pro",
      spec: "SD 7s Gen 2 · 200MP · AMOLED",
      price: "₹17,999",
      match: "88%",
      matchColor: "text-vendora-green",
    },
    {
      icon: "📱",
      name: "Realme 12 Pro",
      spec: "SD 7s · 50MP · 5000mAh",
      price: "₹13,999",
      match: "76%",
      matchColor: "text-gold",
    },
  ],
  default: [
    {
      icon: "🎧",
      name: "boAt Rockerz 255 Pro+",
      spec: "30hr · IPX5 · Magnetic",
      price: "₹1,299",
      match: "95%",
      matchColor: "text-vendora-green",
    },
    {
      icon: "🎵",
      name: "JBL Endurance Run 2",
      spec: "Wired · IP55 · 1-button mic",
      price: "₹899",
      match: "81%",
      matchColor: "text-gold",
    },
  ],
};

export const SELLER_TOP_PRODUCTS: SellerProduct[] = [
  {
    icon: "📱",
    name: "iQOO Z9 5G",
    meta: "12 sold · In stock",
    primaryValue: "₹14,999",
  },
  {
    icon: "🎧",
    name: "boAt Airdopes 141",
    meta: "8 sold · In stock",
    primaryValue: "₹1,299",
  },
  {
    icon: "⌚",
    name: "Noise ColorFit Pro 4",
    meta: "6 sold · Low stock",
    primaryValue: "₹2,499",
  },
];

export const SELLER_DASHBOARD_STATS: DashboardStat[] = [
  { value: "₹28,400", label: "Revenue this month", valueColor: "text-gold" },
  { value: "14", label: "Orders today", valueColor: "text-forest" },
  { value: "23", label: "Active listings" },
  { value: "4.8 ★", label: "Store rating" },
];

export const REGISTER_FEATURES: PanelFeature[] = [
  {
    icon: "✦",
    title: "AI-powered search",
    desc: "Find what you need in plain language — our AI understands intent, not just keywords.",
  },
  {
    icon: "🏪",
    title: "Verified seller storefronts",
    desc: "Know exactly who you're buying from before you add anything to your cart.",
  },
  {
    icon: "0%",
    title: "Zero commission for sellers",
    desc: "List products, make sales, keep 100% of every rupee. No hidden platform fees.",
  },
  {
    icon: "⚖️",
    title: "Honest AI verdicts",
    desc: '"Best for / Weak at" on every product — no reading 40 reviews to find the catch.',
  },
];

export const LOGIN_FEATURES: PanelFeature[] = [
  {
    icon: "✦",
    title: "AI-powered search",
    desc: "Describe what you need in plain language — our AI finds the best matches instantly.",
  },
  {
    icon: "⚖️",
    title: "Smart comparison",
    desc: "Compare products side by side. AI tells you which one fits your needs best.",
  },
  {
    icon: "🏪",
    title: "Verified seller storefronts",
    desc: "Know exactly who you're buying from before you add anything to your cart.",
  },
];

export const MOCK_STORES: Store[] = [
  {
    id: "s1",
    name: "TechZone Store",
    initials: "TZ",
    avatarBg: "#E8F7EF",
    avatarColor: "#1B4332",
    location: "Kochi, Kerala",
    productCount: 23,
    tags: ["Electronics", "Mobiles", "Laptops"],
    isVerified: true,
    topProduct: {
      name: "iQOO Z9 5G",
      price: "₹18,404",
      image:
        "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=100&q=80&fit=crop",
    },
  },
  {
    id: "s2",
    name: "FashionFirst Jaipur",
    initials: "FF",
    avatarBg: "#FFF4E8",
    avatarColor: "#9A560D",
    location: "Jaipur, Rajasthan",
    productCount: 47,
    tags: ["Fashion", "Clothing", "Footwear"],
    isVerified: true,
    topProduct: {
      name: "Women's Floral Kurta Set",
      price: "₹1,199",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100&q=80&fit=crop",
    },
  },
  {
    id: "s3",
    name: "BookNook Delhi",
    initials: "BN",
    avatarBg: "#F0EBFA",
    avatarColor: "#6B46A8",
    location: "Delhi, NCR",
    productCount: 134,
    tags: ["Books", "Academic", "Fiction"],
    isVerified: true,
    topProduct: {
      name: "Atomic Habits",
      price: "₹349",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=100&q=80&fit=crop",
    },
  },
];

export const MOCK_RESULTS: SearchResult[] = [
  {
    id: "1",
    name: "Acer Aspire Lite 15",
    spec: "Ryzen 5 · 16GB · 512GB · 10hr battery",
    price: "₹38,490",
    matchScore: 94,
    image: "💻",
    imageBg: "#E8F7EF",
  },
  {
    id: "2",
    name: "HP Pavilion 15",
    spec: "i5-13th · 8GB · 512GB · FHD",
    price: "₹49,990",
    matchScore: 78,
    image: "💻",
    imageBg: "#EAF3FB",
  },
  {
    id: "3",
    name: "Lenovo IdeaPad Slim 3",
    spec: "Ryzen 3 · 8GB · 256GB",
    price: "₹31,990",
    matchScore: 65,
    image: "💻",
    imageBg: "#F0EBFA",
  },
];

export const FOOTER_LINKS: FooterLinks = {
  Shop: [
    { label: "Electronics", to: "/category/electronics" },
    { label: "Fashion", to: "/category/fashion" },
    { label: "Home & Kitchen", to: "/category/home-kitchen" },
    { label: "Books", to: "/category/books" },
    { label: "Sports", to: "/category/sports" },
  ],
  Sell: [
    { label: "Start selling", to: "/seller/onboarding" },
    { label: "Seller dashboard", to: "/seller/dashboard" },
    { label: "How it works", to: "/how-it-works" },
    { label: "Seller guide", to: "/seller/guide" },
  ],
  Account: [
    { label: "My orders", to: "/orders" },
    { label: "Profile", to: "/profile" },
    { label: "Settings", to: "/settings" },
  ],
};

export const HERO_DISPLAY = [
  {
    id: "electronics",
    label: "Electronics",
    tagline: "Smart tech.",
    tagline2: "Real prices.",
    cta: "Browse Electronics",
    to: "/category/electronics",
    accent: "#52B788",
    accentBg: "rgba(82,183,136,0.15)",
    product: {
      name: "iPhone 17 Pro",
      brand: "Apple",
      price: "₹18,404",
      oldPrice: "₹19,999",
      discount: "8% OFF",
      // White iPhone 17 on dark surface
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80&fit=crop",
    },
    bestseller: {
      name: 'MacBook Pro 14"',
      price: "₹1,99,999",
      orders: 1240,
      demand: 82,
      // iPhone dark background — clean phone shot
      image:
        "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=200&q=80&fit=crop",
    },
    newArrival: {
      name: "Samsung Galaxy S24",
      brand: "Samsung",
      price: "₹2,499",
      // Black iPhone on dark background
      image:
        "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=200&q=80&fit=crop",
      seller: "GadgetWorld · Delhi",
    },
  },
  {
    id: "fashion",
    label: "Fashion",
    tagline: "Style that's",
    tagline2: "authentically yours.",
    cta: "Browse Fashion",
    to: "/category/fashion",
    accent: "#F0A050",
    accentBg: "rgba(240,160,80,0.15)",
    product: {
      name: "Women's Floral Kurta Set",
      brand: "FashionFirst",
      price: "₹1,199",
      oldPrice: "₹1,799",
      discount: "33% OFF",
      // Colorful clothing rack
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80&fit=crop",
    },
    bestseller: {
      name: "Campus Running Shoes",
      price: "₹1,399",
      orders: 980,
      demand: 74,
      // Assorted clothes on rack
      image:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=200&q=80&fit=crop",
    },
    newArrival: {
      name: "Men's Slim Fit Oxford Shirt",
      brand: "StyleHub",
      price: "₹799",
      // Colorful shirts on rack
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200&q=80&fit=crop",
      seller: "FashionFirst · Jaipur",
    },
  },
  {
    id: "home-kitchen",
    label: "Home & Kitchen",
    tagline: "Make your space",
    tagline2: "work harder.",
    cta: "Browse Home",
    to: "/category/home-kitchen",
    accent: "#5B9BD6",
    accentBg: "rgba(91,155,214,0.15)",
    product: {
      name: "Prestige Induction Cooktop",
      brand: "Prestige",
      price: "₹2,799",
      oldPrice: "₹3,499",
      discount: "19% OFF",
      // Clean modern kitchen interior
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&fit=crop",
    },
    bestseller: {
      name: "French Press Coffee Maker",
      price: "₹899",
      orders: 756,
      demand: 61,
      // Modern kitchen with wooden cabinets
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&q=80&fit=crop",
    },
    newArrival: {
      name: "Ergonomic Office Chair",
      brand: "FurniCraft",
      price: "₹8,499",
      // Kitchen interior
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&q=80&fit=crop",
      seller: "HomeFirst · Pune",
    },
  },
  {
    id: "books",
    label: "Books",
    tagline: "The right book",
    tagline2: "finds you here.",
    cta: "Browse Books",
    to: "/category/books",
    accent: "#A07BE0",
    accentBg: "rgba(160,123,224,0.15)",
    product: {
      name: "Atomic Habits",
      brand: "James Clear",
      price: "₹349",
      oldPrice: "₹499",
      discount: "30% OFF",
      // Modern library with bookshelves
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80&fit=crop",
    },
    bestseller: {
      name: "Rich Dad Poor Dad",
      price: "₹249",
      orders: 2100,
      demand: 91,
      // Stack of books in library
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&q=80&fit=crop",
    },
    newArrival: {
      name: "Deep Work — Cal Newport",
      brand: "Cal Newport",
      price: "₹319",
      // Books on bookshelf
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&q=80&fit=crop",
      seller: "BookNook · Delhi",
    },
  },
  {
    id: "sports",
    label: "Sports",
    tagline: "Train harder.",
    tagline2: "Play better.",
    cta: "Browse Sports",
    to: "/category/sports",
    accent: "#52B788",
    accentBg: "rgba(82,183,136,0.15)",
    product: {
      name: "Adjustable Dumbbell Set",
      brand: "FitPro",
      price: "₹3,499",
      oldPrice: "₹4,999",
      discount: "30% OFF",
      // Gym dumbbells dark background
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop",
    },
    bestseller: {
      name: "Anti-slip Yoga Mat",
      price: "₹799",
      orders: 1560,
      demand: 88,
      // Dumbbells close up
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&q=80&fit=crop",
    },
    newArrival: {
      name: "Football Size 5 FIFA",
      brand: "Cosco",
      price: "₹849",
      // Gym equipment
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&q=80&fit=crop",
      seller: "SportZone · Chennai",
    },
  },
];

export const BROWSE_CATEGORIES = [
  {
    name: "Electronics",
    slug: "electronics",
    count: "4,200+ products",
    // Smartphone on dark desk — Andreas Haslinger
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80&fit=crop&crop=center",
    overlay: "from-blue-950/80 via-blue-900/50 to-blue-800/20",
    accent: "#93C5FD",
  },
  {
    name: "Fashion",
    slug: "fashion",
    count: "3,100+ products",
    // Clothing rack with colorful garments
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80&fit=crop&crop=center",
    overlay: "from-rose-950/80 via-rose-900/50 to-rose-800/20",
    accent: "#FDA4AF",
  },
  {
    name: "Home & Kitchen",
    slug: "home-kitchen",
    count: "2,800+ products",
    // Minimal clean kitchen interior
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&fit=crop&crop=center",
    overlay: "from-teal-950/80 via-teal-900/50 to-teal-800/20",
    accent: "#99F6E4",
  },
  {
    name: "Books",
    slug: "books",
    count: "1,500+ products",
    // Stack of books warm toned
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80&fit=crop&crop=center",
    overlay: "from-violet-950/80 via-violet-900/50 to-violet-800/20",
    accent: "#C4B5FD",
  },
  {
    name: "Sports",
    slug: "sports",
    count: "900+ products",
    // Sports equipment gym weights
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop&crop=center",
    overlay: "from-green-950/80 via-green-900/50 to-green-800/20",
    accent: "#6EE7B7",
  },
];
