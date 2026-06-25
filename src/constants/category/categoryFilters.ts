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

export function getFilters(slug: string, sub: string): FilterConfig[] {
  const key = `${slug}/${sub}`;
  return SUBCATEGORY_FILTERS[key] ?? SUBCATEGORY_FILTERS[`${slug}/all`] ?? [];
}
