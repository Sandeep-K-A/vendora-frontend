import type { Product } from "@/types";

/**
 * Full product data for the product detail page.
 * Each product has images, variants, specs, reviews,
 * highlights and in-box contents.
 */
export const MOCK_PRODUCT_DETAIL: Record<string, Product> = {
  "1": {
    id: "1",
    brand: "iQOO",
    name: "Z9 5G — Dimensity 7200 · 120Hz AMOLED · 50MP OIS Camera",
    price: "₹18,404",
    oldPrice: "₹19,999",
    discount: "8% OFF",
    rating: 4,
    reviewCount: "(3.2k)",
    image:
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&q=80&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80&fit=crop",
    ],
    sellerName: "TechZone Store . Kochi, Kerala",
    category: "electronics",
    subcategory: "mobiles",
    description:
      "The iQOO Z9 5G brings flagship-level performance to the mid-range segment. Powered by the Dimensity 7200 chipset and paired with a stunning 120Hz AMOLED display, it delivers a smooth and vibrant visual experience. The 50MP OIS camera ensures sharp, stable shots in any condition.",
    highlights: [
      '6.67" FHD+ AMOLED display with 120Hz refresh rate',
      "Dimensity 7200 5G processor for flagship-level performance",
      "50MP OIS primary camera with night mode",
      "5000mAh battery with 44W FlashCharge",
      "Android 14 with FunTouch OS 14",
    ],
    inBox: [
      "iQOO Z9 5G handset",
      "44W FlashCharger adapter",
      "USB Type-C cable",
      "SIM ejector tool",
      "Protective case",
      "Quick start guide",
    ],
    specs: {
      Display: '6.67" FHD+ AMOLED 120Hz',
      Processor: "Dimensity 7200 5G",
      "Front Camera": "16MP",
      "Rear Camera": "50MP OIS + 2MP",
      Battery: "5000mAh",
      Charging: "44W FlashCharge",
      OS: "Android 14",
      SIM: "Dual SIM 5G",
      Dimensions: "164.05 × 75.96 × 8.09 mm",
      Weight: "190g",
    },
    variants: [
      {
        id: "ram-storage",
        label: "RAM + Storage",
        options: [
          {
            value: "6-128",
            label: "6GB + 128GB",
            price: "₹15,999",
            oldPrice: "₹17,999",
            inStock: true,
          },
          {
            value: "8-256",
            label: "8GB + 256GB",
            price: "₹18,404",
            oldPrice: "₹19,999",
            inStock: true,
          },
          {
            value: "12-256",
            label: "12GB + 256GB",
            price: "₹21,999",
            oldPrice: "₹23,999",
            inStock: false,
          },
        ],
      },
      {
        id: "color",
        label: "Color",
        options: [
          {
            value: "black",
            label: "Phantom Black",
            inStock: true,
            image:
              "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&q=80&fit=crop",
          },
          {
            value: "blue",
            label: "Crystal Blue",
            inStock: true,
            image:
              "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80&fit=crop",
          },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Rahul Sharma",
        initials: "RS",
        rating: 5,
        title: "Best phone in this price range",
        body: "Absolutely love this phone. The display is stunning and the camera performance is way better than I expected at this price point. Battery easily lasts a full day with heavy usage.",
        date: "12 Jun 2025",
        verified: true,
      },
      {
        id: "r2",
        author: "Priya Menon",
        initials: "PM",
        rating: 4,
        title: "Great performance, average camera at night",
        body: "The performance is excellent for gaming and daily use. Daylight photos are really good. Night mode could be better but acceptable for the price.",
        date: "8 Jun 2025",
        verified: true,
      },
      {
        id: "r3",
        author: "Arjun K",
        initials: "AK",
        rating: 4,
        title: "Solid mid-ranger",
        body: "Using it for 2 months now. No heating issues, smooth performance, good build quality. The in-box charger is fast. Happy with the purchase.",
        date: "2 May 2025",
        verified: false,
      },
    ],
  },

  "7": {
    id: "7",
    brand: "Naseebo",
    name: "Women's Floral Kurta Set — Cotton · Festive Collection",
    price: "₹1,199",
    oldPrice: "₹1,799",
    discount: "33% OFF",
    rating: 4,
    reviewCount: "(210)",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80&fit=crop",
    ],
    sellerName: "FashionFirst . Jaipur, Rajasthan",
    category: "fashion",
    subcategory: "womens-kurtas",
    description:
      "Crafted from premium cotton fabric, this floral kurta set is perfect for festive occasions and casual outings alike. The intricate floral print and comfortable fit make it a wardrobe staple.",
    highlights: [
      "100% pure cotton — breathable and comfortable",
      "Intricate floral print — festive and casual wear",
      "Includes kurta + palazzo + dupatta",
      "Machine washable",
      "Available in sizes XS to XXL",
    ],
    inBox: ["Kurta", "Palazzo pants", "Dupatta"],
    specs: {
      Fabric: "100% Cotton",
      Pattern: "Floral Print",
      Occasion: "Festive, Casual",
      "Set includes": "Kurta + Palazzo + Dupatta",
      "Wash care": "Machine wash cold",
      "Country of origin": "India",
    },
    variants: [
      {
        id: "size",
        label: "Size",
        options: [
          { value: "xs", label: "XS", inStock: true },
          { value: "s", label: "S", inStock: true },
          { value: "m", label: "M", inStock: true },
          { value: "l", label: "L", inStock: false },
          { value: "xl", label: "XL", inStock: true },
          { value: "xxl", label: "XXL", inStock: true },
        ],
      },
      {
        id: "color",
        label: "Color",
        options: [
          {
            value: "pink",
            label: "Rose Pink",
            inStock: true,
            image:
              "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80&fit=crop",
          },
          {
            value: "blue",
            label: "Sky Blue",
            inStock: true,
            image:
              "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80&fit=crop",
          },
          {
            value: "yellow",
            label: "Mustard Yellow",
            inStock: false,
            image:
              "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80&fit=crop",
          },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Sneha Pillai",
        initials: "SP",
        rating: 5,
        title: "Beautiful quality and fast delivery",
        body: "The fabric quality is excellent. The floral print looks even better in person. Fits true to size. Wore it to a family function and got lots of compliments.",
        date: "15 Jun 2025",
        verified: true,
      },
      {
        id: "r2",
        author: "Divya R",
        initials: "DR",
        rating: 4,
        title: "Good product, color slightly different",
        body: "The kurta set is well made and comfortable. The color is slightly lighter than shown in photos but still looks good. Would recommend.",
        date: "1 Jun 2025",
        verified: true,
      },
    ],
  },

  "11": {
    id: "11",
    brand: "James Clear",
    name: "Atomic Habits — An Easy & Proven Way to Build Good Habits",
    price: "₹349",
    oldPrice: "₹499",
    discount: "30% OFF",
    rating: 5,
    reviewCount: "(12k)",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80&fit=crop",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&q=80&fit=crop",
    ],
    sellerName: "BookNook . Delhi, NCR",
    category: "books",
    subcategory: "self-help",
    description:
      "Atomic Habits is the most comprehensive guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, James Clear teaches you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    highlights: [
      "New York Times bestseller — over 15 million copies sold",
      "Proven framework — The Four Laws of Behavior Change",
      "Practical strategies backed by research",
      "Used by Olympic athletes, Fortune 500 companies, and millions worldwide",
      "320 pages of actionable content",
    ],
    inBox: ["Atomic Habits — Paperback edition"],
    specs: {
      Author: "James Clear",
      Publisher: "Penguin Random House",
      Pages: "320",
      Language: "English",
      ISBN: "978-0735211292",
      Dimensions: "21.3 × 14.7 × 2.3 cm",
      Weight: "340g",
    },
    variants: [
      {
        id: "format",
        label: "Format",
        options: [
          {
            value: "paperback",
            label: "Paperback",
            price: "₹349",
            oldPrice: "₹499",
            inStock: true,
          },
          {
            value: "hardcover",
            label: "Hardcover",
            price: "₹599",
            oldPrice: "₹799",
            inStock: true,
          },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Kiran Bhat",
        initials: "KB",
        rating: 5,
        title: "Life changing book",
        body: "This book completely changed how I think about habits and productivity. The 1% improvement concept is simple but profound. Must read for anyone wanting to improve their life.",
        date: "20 Jun 2025",
        verified: true,
      },
      {
        id: "r2",
        author: "Ananya S",
        initials: "AS",
        rating: 5,
        title: "Best self-help book I have read",
        body: "Very practical and easy to implement. Unlike other self-help books that just give motivation, this one gives you a clear system to follow. Already seeing results after 3 weeks.",
        date: "10 May 2025",
        verified: true,
      },
      {
        id: "r3",
        author: "Mohammed A",
        initials: "MA",
        rating: 4,
        title: "Good but some concepts are repetitive",
        body: "Overall a great book with solid frameworks. Some chapters felt repetitive but the core ideas are excellent and well explained with real world examples.",
        date: "28 Apr 2025",
        verified: false,
      },
    ],
  },
};

export const MOCK_PRODUCTS = Object.values(MOCK_PRODUCT_DETAIL);
