import type {
  CategoryConfig,
  FilterConfig,
  FilterOption as SortOption,
} from "@/types";

export const PRICE_FILTER: FilterConfig = {
  id: "price",
  type: "price",
  label: "Price range",
};

export const RATING_FILTER: FilterConfig = {
  id: "rating",
  type: "rating",
  label: "Customer rating",
};

export const AVAILABILITY_FILTER: FilterConfig = {
  id: "availability",
  type: "availability",
  label: "Availability",
};

export const CATEGORIES: Record<string, CategoryConfig> = {
  electronics: {
    label: "Electronics",
    slug: "electronics",
    subcategories: [
      { label: "All Electronics", value: "all", icon: "⚡", count: 4200 },
      { label: "Mobiles", value: "mobiles", icon: "📱", count: 1240 },
      { label: "Laptops", value: "laptops", icon: "💻", count: 890 },
      { label: "Cameras", value: "cameras", icon: "📷", count: 340 },
      { label: "Smartwatches", value: "smartwatches", icon: "⌚", count: 280 },
      { label: "Audio", value: "audio", icon: "🎧", count: 450 },
    ],
  },
  fashion: {
    label: "Fashion",
    slug: "fashion",
    subcategories: [
      { label: "All Fashion", value: "all", icon: "✨", count: 3100 },
      { label: "Men's Shirts", value: "mens-shirts", icon: "👔", count: 420 },
      { label: "Men's Jeans", value: "mens-jeans", icon: "👖", count: 380 },
      {
        label: "Women's Kurtas",
        value: "womens-kurtas",
        icon: "👗",
        count: 560,
      },
      { label: "Women's Tops", value: "womens-tops", icon: "👚", count: 490 },
      { label: "Footwear", value: "footwear", icon: "👟", count: 640 },
    ],
  },
  "home-kitchen": {
    label: "Home & Kitchen",
    slug: "home-kitchen",
    subcategories: [
      { label: "All Home", value: "all", icon: "✨", count: 2800 },
      { label: "Cookware", value: "cookware", icon: "🍳", count: 480 },
      { label: "Furniture", value: "furniture", icon: "🪑", count: 390 },
      { label: "Decor", value: "decor", icon: "🪴", count: 520 },
    ],
  },
  books: {
    label: "Books",
    slug: "books",
    subcategories: [
      { label: "All Books", value: "all", icon: "✨", count: 1500 },
      { label: "Fiction", value: "fiction", icon: "📖", count: 420 },
      { label: "Business", value: "business", icon: "💼", count: 290 },
      { label: "Biography", value: "biography", icon: "👤", count: 170 },
    ],
  },
  sports: {
    label: "Sports",
    slug: "sports",
    subcategories: [
      { label: "All Sports", value: "all", icon: "✨", count: 900 },
      { label: "Cricket", value: "cricket", icon: "🏏", count: 180 },
      { label: "Football", value: "football", icon: "⚽", count: 140 },
      { label: "Fitness", value: "fitness", icon: "🏋️", count: 260 },
    ],
  },
};

export const SUBCATEGORY_FILTERS: Record<string, FilterConfig[]> = {
  // Electronics subcategories
  "electronics/all": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "Samsung", value: "samsung" },
        { label: "OnePlus", value: "oneplus" },
        { label: "iQOO", value: "iqoo" },
        { label: "Acer", value: "acer" },
        { label: "HP", value: "hp" },
        { label: "Lenovo", value: "lenovo" },
        { label: "boAt", value: "boat" },
        { label: "Noise", value: "noise" },
        { label: "JBL", value: "jbl" },
      ],
    },
    RATING_FILTER,
    AVAILABILITY_FILTER,
  ],
  "electronics/mobiles": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "Samsung", value: "samsung" },
        { label: "OnePlus", value: "oneplus" },
        { label: "iQOO", value: "iqoo" },
      ],
    },
    RATING_FILTER,
    {
      id: "ram",
      type: "checkbox",
      label: "RAM",
      options: [
        { label: "6 GB", value: "6gb" },
        { label: "8 GB", value: "8gb" },
        { label: "12 GB", value: "12gb" },
      ],
    },
    {
      id: "storage",
      type: "checkbox",
      label: "Storage",
      options: [
        { label: "128 GB", value: "128gb" },
        { label: "256 GB", value: "256gb" },
        { label: "512 GB", value: "512gb" },
      ],
    },
    AVAILABILITY_FILTER,
  ],
  "electronics/laptops": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "Acer", value: "acer" },
        { label: "HP", value: "hp" },
        { label: "Lenovo", value: "lenovo" },
      ],
    },
    RATING_FILTER,
    {
      id: "ram",
      type: "checkbox",
      label: "RAM",
      options: [
        { label: "8 GB", value: "8gb" },
        { label: "16 GB", value: "16gb" },
        { label: "32 GB", value: "32gb" },
      ],
    },
    {
      id: "processor",
      type: "checkbox",
      label: "Processor",
      options: [
        { label: "Intel i5", value: "i5" },
        { label: "Intel i7", value: "i7" },
        { label: "Ryzen 5", value: "ryzen-5" },
        { label: "Ryzen 7", value: "ryzen-7" },
      ],
    },
    AVAILABILITY_FILTER,
  ],
  "electronics/audio": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "boAt", value: "boat" },
        { label: "JBL", value: "jbl" },
        { label: "Noise", value: "noise" },
      ],
    },
    RATING_FILTER,
    {
      id: "type",
      type: "checkbox",
      label: "Type",
      options: [
        { label: "In-ear", value: "in-ear" },
        { label: "Over-ear", value: "over-ear" },
        { label: "Speakers", value: "speakers" },
      ],
    },
    AVAILABILITY_FILTER,
  ],
  "electronics/smartwatches": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "Noise", value: "noise" },
        { label: "boAt", value: "boat" },
        { label: "Samsung", value: "samsung" },
      ],
    },
    RATING_FILTER,
    {
      id: "display",
      type: "checkbox",
      label: "Display",
      options: [
        { label: "AMOLED", value: "amoled" },
        { label: "LCD", value: "lcd" },
        { label: "TFT", value: "tft" },
      ],
    },
    AVAILABILITY_FILTER,
  ],

  // Fashion subcategories
  "fashion/all": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "H&M", value: "hm" },
        { label: "Zara", value: "zara" },
        { label: "Nike", value: "nike" },
        { label: "Adidas", value: "adidas" },
        { label: "Puma", value: "puma" },
      ],
    },
    RATING_FILTER,
    AVAILABILITY_FILTER,
  ],
  "fashion/mens-shirts": [
    PRICE_FILTER,
    RATING_FILTER,
    {
      id: "size",
      type: "checkbox",
      label: "Size",
      options: [
        { label: "S", value: "s" },
        { label: "M", value: "m" },
        { label: "L", value: "l" },
        { label: "XL", value: "xl" },
        { label: "XXL", value: "xxl" },
      ],
    },
    {
      id: "fit",
      type: "checkbox",
      label: "Fit",
      options: [
        { label: "Slim fit", value: "slim" },
        { label: "Regular fit", value: "regular" },
        { label: "Oversized", value: "oversized" },
      ],
    },
    AVAILABILITY_FILTER,
  ],
  "fashion/womens-kurtas": [
    PRICE_FILTER,
    RATING_FILTER,
    {
      id: "size",
      type: "checkbox",
      label: "Size",
      options: [
        { label: "XS", value: "xs" },
        { label: "S", value: "s" },
        { label: "M", value: "m" },
        { label: "L", value: "l" },
        { label: "XL", value: "xl" },
      ],
    },
    {
      id: "occasion",
      type: "checkbox",
      label: "Occasion",
      options: [
        { label: "Casual", value: "casual" },
        { label: "Festive", value: "festive" },
        { label: "Office", value: "office" },
        { label: "Party", value: "party" },
      ],
    },
    AVAILABILITY_FILTER,
  ],
  "fashion/footwear": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "Nike", value: "nike" },
        { label: "Adidas", value: "adidas" },
        { label: "Puma", value: "puma" },
      ],
    },
    RATING_FILTER,
    {
      id: "size",
      type: "checkbox",
      label: "UK Size",
      options: [
        { label: "8", value: "8" },
        { label: "9", value: "9" },
        { label: "10", value: "10" },
        { label: "11", value: "11" },
      ],
    },
    AVAILABILITY_FILTER,
  ],

  // Sports subcategories
  "sports/all": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "Nike", value: "nike" },
        { label: "Adidas", value: "adidas" },
        { label: "Decathlon", value: "decathlon" },
        { label: "FitPro", value: "fitpro" },
      ],
    },
    RATING_FILTER,
    AVAILABILITY_FILTER,
  ],
  "sports/fitness": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "FitPro", value: "fitpro" },
        { label: "Decathlon", value: "decathlon" },
      ],
    },
    RATING_FILTER,
    {
      id: "equipment",
      type: "checkbox",
      label: "Equipment",
      options: [
        { label: "Dumbbells", value: "dumbbells" },
        { label: "Resistance bands", value: "bands" },
        { label: "Pull-up bar", value: "pullup" },
        { label: "Skipping rope", value: "rope" },
      ],
    },
    AVAILABILITY_FILTER,
  ],

  // Books subcategories
  "books/all": [
    PRICE_FILTER,
    RATING_FILTER,
    {
      id: "format",
      type: "checkbox",
      label: "Format",
      options: [
        { label: "Paperback", value: "paperback" },
        { label: "Hardcover", value: "hardcover" },
      ],
    },
    {
      id: "language",
      type: "checkbox",
      label: "Language",
      options: [
        { label: "English", value: "english" },
        { label: "Hindi", value: "hindi" },
        { label: "Malayalam", value: "malayalam" },
      ],
    },
    AVAILABILITY_FILTER,
  ],
  "books/self-help": [
    PRICE_FILTER,
    RATING_FILTER,
    {
      id: "format",
      type: "checkbox",
      label: "Format",
      options: [
        { label: "Paperback", value: "paperback" },
        { label: "Hardcover", value: "hardcover" },
      ],
    },
    AVAILABILITY_FILTER,
  ],

  // Home & Kitchen subcategories
  "home-kitchen/all": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "Prestige", value: "prestige" },
        { label: "Philips", value: "philips" },
        { label: "Bajaj", value: "bajaj" },
        { label: "Havells", value: "havells" },
      ],
    },
    RATING_FILTER,
    AVAILABILITY_FILTER,
  ],
  "home-kitchen/appliances": [
    PRICE_FILTER,
    {
      id: "brand",
      type: "brand",
      label: "Brand",
      options: [
        { label: "Prestige", value: "prestige" },
        { label: "Philips", value: "philips" },
        { label: "Bajaj", value: "bajaj" },
        { label: "Havells", value: "havells" },
        { label: "Bosch", value: "bosch" },
      ],
    },
    RATING_FILTER,
    {
      id: "type",
      type: "checkbox",
      label: "Type",
      options: [
        { label: "Induction cooktop", value: "induction" },
        { label: "Mixer grinder", value: "mixer" },
        { label: "Air fryer", value: "air-fryer" },
        { label: "Microwave", value: "microwave" },
        { label: "Toaster", value: "toaster" },
      ],
    },
    AVAILABILITY_FILTER,
  ],
  "home-kitchen/furniture": [
    PRICE_FILTER,
    RATING_FILTER,
    {
      id: "material",
      type: "checkbox",
      label: "Material",
      options: [
        { label: "Wood", value: "wood" },
        { label: "Metal", value: "metal" },
        { label: "Fabric", value: "fabric" },
        { label: "Plastic", value: "plastic" },
      ],
    },
    {
      id: "room",
      type: "checkbox",
      label: "Room",
      options: [
        { label: "Living Room", value: "living" },
        { label: "Bedroom", value: "bedroom" },
        { label: "Office", value: "office" },
        { label: "Dining", value: "dining" },
      ],
    },
    AVAILABILITY_FILTER,
  ],
};

export const SORT_OPTIONS: SortOption[] = [
  { label: "Popular", value: "popular" },
  { label: "Price: Low → High", value: "price-asc" },
  { label: "Price: High → Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
  { label: "Top rated", value: "rating" },
];

import type { Product } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
  // ── Electronics ──────────────────────────────────────────
  {
    id: "1",
    brand: "iQOO",
    name: "Z9 5G — 8GB+256GB · Dimensity 7200 · 5000mAh · 50MP OIS",
    price: "₹18,404",
    oldPrice: "₹19,999",
    discount: "8% OFF",
    rating: 4,
    reviewCount: "(3.2k)",
    image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-iqoo-z9-1.jpg",
    sellerName: "TechZone Store · Kochi",
    category: "electronics",
  },
  {
    id: "2",
    brand: "Acer",
    name: "Aspire Lite 15 Ryzen 5 · 16GB · 512GB SSD",
    price: "₹38,490",
    oldPrice: "₹45,000",
    discount: "15% OFF",
    rating: 5,
    reviewCount: "(892)",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80&fit=crop",
    sellerName: "DigiMart · Bangalore",
    category: "electronics",
  },
  {
    id: "3",
    brand: "boAt",
    name: "Rockerz 255 Pro+ Neckband Earphones",
    price: "₹1,299",
    oldPrice: "₹2,499",
    discount: "48% OFF",
    rating: 4,
    reviewCount: "(4.1k)",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80&fit=crop",
    sellerName: "SoundHub · Mumbai",
    category: "electronics",
  },
  {
    id: "4",
    brand: "Noise",
    name: "ColorFit Pro 4 AMOLED Smartwatch",
    price: "₹2,499",
    oldPrice: "₹3,999",
    discount: "38% OFF",
    rating: 4,
    reviewCount: "(2.8k)",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80&fit=crop",
    sellerName: "GadgetWorld · Delhi",
    category: "electronics",
  },
  {
    id: "5",
    brand: "Canon",
    name: "EOS 1500D 24.1MP DSLR Camera",
    price: "₹29,990",
    oldPrice: "₹34,995",
    discount: "14% OFF",
    rating: 5,
    reviewCount: "(3.4k)",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80&fit=crop",
    sellerName: "CameraZone · Chennai",
    category: "electronics",
  },
  {
    id: "6",
    brand: "Samsung",
    name: 'Galaxy Tab S6 Lite · 10.4" · 64GB',
    price: "₹24,999",
    oldPrice: "₹28,999",
    discount: "14% OFF",
    rating: 4,
    reviewCount: "(1.2k)",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80&fit=crop",
    sellerName: "TechZone Store · Kochi",
    category: "electronics",
  },

  // ── Fashion ───────────────────────────────────────────────
  {
    id: "7",
    brand: "Naseebo",
    name: "Women's Floral Kurta Set",
    price: "₹1,199",
    oldPrice: "₹1,799",
    discount: "33% OFF",
    rating: 4,
    reviewCount: "(210)",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80&fit=crop",
    sellerName: "FashionFirst · Jaipur",
    category: "fashion",
  },
  {
    id: "8",
    brand: "Campus",
    name: "Running Shoes — Men · Sizes 7–11",
    price: "₹1,399",
    oldPrice: "₹1,999",
    discount: "30% OFF",
    rating: 4,
    reviewCount: "(783)",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80&fit=crop",
    sellerName: "SportZone · Chennai",
    category: "fashion",
  },
  {
    id: "9",
    brand: "H&M",
    name: "Men's Slim Fit Oxford Shirt",
    price: "₹799",
    oldPrice: "₹1,299",
    discount: "38% OFF",
    rating: 4,
    reviewCount: "(156)",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80&fit=crop",
    sellerName: "StyleHub · Mumbai",
    category: "fashion",
  },
  {
    id: "10",
    brand: "Levi's",
    name: "Men's 511 Slim Fit Jeans",
    price: "₹2,099",
    oldPrice: "₹2,999",
    discount: "30% OFF",
    rating: 5,
    reviewCount: "(892)",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80&fit=crop",
    sellerName: "DenimStore · Delhi",
    category: "fashion",
  },

  // ── Books ─────────────────────────────────────────────────
  {
    id: "11",
    brand: "James Clear",
    name: "Atomic Habits — Paperback",
    price: "₹349",
    oldPrice: "₹499",
    discount: "30% OFF",
    rating: 5,
    reviewCount: "(12k)",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80&fit=crop",
    sellerName: "BookNook · Delhi",
    category: "books",
  },
  {
    id: "12",
    brand: "Cal Newport",
    name: "Deep Work — Rules for Focused Success",
    price: "₹319",
    oldPrice: "₹399",
    discount: "20% OFF",
    rating: 5,
    reviewCount: "(3.2k)",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80&fit=crop",
    sellerName: "BookNook · Delhi",
    category: "books",
  },
  {
    id: "13",
    brand: "Robert Kiyosaki",
    name: "Rich Dad Poor Dad — Paperback",
    price: "₹249",
    oldPrice: "₹350",
    discount: "29% OFF",
    rating: 4,
    reviewCount: "(8.4k)",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80&fit=crop",
    sellerName: "PageTurner · Bangalore",
    category: "books",
  },
  {
    id: "14",
    brand: "Yuval Noah Harari",
    name: "Sapiens — A Brief History of Humankind",
    price: "₹399",
    oldPrice: "₹599",
    discount: "33% OFF",
    rating: 5,
    reviewCount: "(5.1k)",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80&fit=crop",
    sellerName: "BookNook · Delhi",
    category: "books",
  },

  // ── Home & Kitchen ────────────────────────────────────────
  {
    id: "15",
    brand: "Prestige",
    name: "Induction Cooktop 2000W · 8 Presets",
    price: "₹2,799",
    oldPrice: "₹3,499",
    discount: "19% OFF",
    rating: 4,
    reviewCount: "(1.8k)",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80&fit=crop",
    sellerName: "HomeFirst · Pune",
    category: "home-kitchen",
  },
  {
    id: "16",
    brand: "Philips",
    name: "Air Fryer HD9200 · 4.1L · 1400W",
    price: "₹6,495",
    oldPrice: "₹8,995",
    discount: "28% OFF",
    rating: 5,
    reviewCount: "(2.3k)",
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80&fit=crop",
    sellerName: "KitchenPro · Mumbai",
    category: "home-kitchen",
  },
  {
    id: "17",
    brand: "Nilkamal",
    name: "Engineered Wood Study Table",
    price: "₹4,999",
    oldPrice: "₹6,499",
    discount: "23% OFF",
    rating: 4,
    reviewCount: "(341)",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80&fit=crop",
    sellerName: "FurniCraft · Pune",
    category: "home-kitchen",
  },
  {
    id: "18",
    brand: "Bajaj",
    name: "Mixer Grinder 750W · 3 Jars",
    price: "₹1,899",
    oldPrice: "₹2,499",
    discount: "24% OFF",
    rating: 4,
    reviewCount: "(967)",
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&q=80&fit=crop",
    sellerName: "HomeFirst · Pune",
    category: "home-kitchen",
  },

  // ── Sports ────────────────────────────────────────────────
  {
    id: "19",
    brand: "Cosco",
    name: "Football Size 5 FIFA Approved",
    price: "₹849",
    oldPrice: "₹999",
    discount: "15% OFF",
    rating: 4,
    reviewCount: "(234)",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc630e2914?w=400&q=80&fit=crop",
    sellerName: "SportZone · Chennai",
    category: "sports",
  },
  {
    id: "20",
    brand: "FitPro",
    name: "Adjustable Dumbbell Set 20kg",
    price: "₹3,499",
    oldPrice: "₹4,999",
    discount: "30% OFF",
    rating: 4,
    reviewCount: "(412)",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80&fit=crop",
    sellerName: "FitZone · Hyderabad",
    category: "sports",
  },
  {
    id: "21",
    brand: "Nivia",
    name: "Anti-slip Yoga Mat 6mm",
    price: "₹799",
    oldPrice: "₹1,199",
    discount: "33% OFF",
    rating: 5,
    reviewCount: "(1.1k)",
    image:
      "https://images.unsplash.com/photo-1601925228932-53a27a72f3dc?w=400&q=80&fit=crop",
    sellerName: "YogaStore · Bangalore",
    category: "sports",
  },
  {
    id: "22",
    brand: "Decathlon",
    name: "Badminton Racket Artengo BR 530",
    price: "₹649",
    oldPrice: "₹849",
    discount: "24% OFF",
    rating: 4,
    reviewCount: "(328)",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&q=80&fit=crop",
    sellerName: "SportZone · Chennai",
    category: "sports",
  },
];

export function getFilters(slug: string, sub: string): FilterConfig[] {
  const key = `${slug}/${sub}`;
  return SUBCATEGORY_FILTERS[key] ?? SUBCATEGORY_FILTERS[`${slug}/all`] ?? [];
}
