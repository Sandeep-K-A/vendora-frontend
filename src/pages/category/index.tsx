import { useState, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CategoryHeader from "./CategoryHeader";
import ProductGrid from "./ProductGrid";
import FilterSidebar from "@/layouts/category/FilterSiderbar";
import SortBar from "@/layouts/category/SortBar";
import { CATEGORIES, getFilters } from "@/constants/category/categoryFilters";
import { MOCK_PRODUCTS } from "@/constants/products/mockProductDetails";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);

  const config = CATEGORIES[slug ?? ""] ?? CATEGORIES.electronics;
  const activeSub = searchParams.get("sub") ?? "all";
  const activeSubLabel =
    config.subcategories.find((s) => s.value === activeSub)?.label ?? "All";

  //helper
  const getPrice = (price: string) => Number(price.replace(/[₹,]/g, ""));

  //filter for active subcategory
  const filters = useMemo(() => {
    return getFilters(slug ?? "electronics", activeSub);
  }, [slug, activeSub]);

  //filter and sort

  const filteredProducts = useMemo(() => {
    let products = MOCK_PRODUCTS.filter((product) => product.category === slug);

    //sub category filter -phase 3

    //price
    const minPrice = Number(searchParams.get("minPrice") ?? 0);
    const maxPrice = searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : Infinity;

    if (minPrice) {
      products = products.filter(
        (product) => getPrice(product.price) >= minPrice,
      );
    }

    if (maxPrice !== Infinity) {
      products = products.filter(
        (product) => getPrice(product.price) <= maxPrice,
      );
    }

    //rating
    const rating = Number(searchParams.get("rating") ?? 0);
    if (rating) {
      products = products.filter((product) => product.rating >= rating);
    }

    //sort
    const sort = searchParams.get("sort") ?? "popular";
    if (sort == "price-asc") {
      products = [...products].sort(
        (a, b) => getPrice(a.price) - getPrice(b.price),
      );
    }

    if (sort === "price-desc") {
      products = [...products].sort(
        (a, b) => getPrice(b.price) - getPrice(a.price),
      );
    }

    if (sort === "rating") {
      products = [...products].sort((a, b) => b.rating - a.rating);
    }
    return products;
  }, [slug, searchParams]);

  function setSub(value: string) {
    const next = new URLSearchParams();
    if (value !== "all") next.set("sub", value);
    setSearchParams(next);
  }

  console.log(filteredProducts);
  return (
    <>
      <CategoryHeader
        label={config.label}
        sublabel={activeSubLabel}
        totalResults={filteredProducts.length}
      />

      {/* Mobile sub-category stirp */}
      <div className="lg:hidden bg-white border-b border-line px-4 py-2.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center gap-2 w-max">
          {config.subcategories.map((sub) => {
            const isActive = activeSub === sub.value;
            return (
              <button
                key={sub.value}
                onClick={() => setSub(sub.value)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-medium whitespace-nowrap flex-shrink-0 border transition-all ${
                  isActive
                    ? "bg-forest text-white border-forest"
                    : "border-line text-ink-2 hover:border-forest-light hover:text-forest"
                }`}
              >
                <span className="text-[13px]">{sub.icon}</span>
                {sub.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-[240px] flex-shrink-0">
            <div className="sticky top-[120px]">
              <FilterSidebar
                subcategories={config.subcategories}
                filters={filters}
                totalResults={filteredProducts.length}
              />
            </div>
          </aside>

          {/* Product Area */}
          <main className="flex-1 min-w-0">
            <SortBar
              totalResults={filteredProducts.length}
              onFilterOpen={() => setFilterOpen(true)}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSub}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ProductGrid products={filteredProducts} />
              </motion.div>
            </AnimatePresence>

            {/* pagination */}
            <div className="flex justify-center gap-2 mt-10">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-9 h-9 rounded-lg text-[13.5px] font-medium border transition-all ${
                    page === 1
                      ? "bg-forest text-white border-forest"
                      : "border-line text-ink-2 hover:bg-bg"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Bottom bar */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-[400] lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[500] lg:hidden max-h-[85vh] overflow-y-auto rounded-t-2xl shadow-2xl"
            >
              <FilterSidebar
                subcategories={config.subcategories}
                filters={filters}
                totalResults={filteredProducts.length}
                onClose={() => setFilterOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
