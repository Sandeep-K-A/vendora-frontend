export type SortOption = "newest" | "priceAsc" | "priceDesc" | "stockAsc";

interface CategoryOption {
  _id: string;
  name: string;
  subcategories: { _id: string; name: string }[];
}

export default function ProductFilters({
  categories,
  categoryId,
  subcategoryId,
  sortBy,
  onCategoryChange,
  onSubcategoryChange,
  onSortChange,
}: {
  categories: CategoryOption[];
  categoryId: string;
  subcategoryId: string;
  sortBy: SortOption;
  onCategoryChange: (id: string) => void;
  onSubcategoryChange: (id: string) => void;
  onSortChange: (sort: SortOption) => void;
}) {
  const selectedCategory = categories.find((c) => c._id === categoryId);

  return (
    <div className="flex gap-2 flex-wrap">
      <select
        value={categoryId}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="text-sm border border-line rounded-xl px-3 py-2.5 bg-white"
      >
        <option value="">All categories</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      {selectedCategory && selectedCategory.subcategories.length > 0 && (
        <select
          value={subcategoryId}
          onChange={(e) => onSubcategoryChange(e.target.value)}
          className="text-sm border border-line rounded-xl px-3 py-2.5 bg-white"
        >
          <option value="">All subcategories</option>
          {selectedCategory.subcategories.map((sub) => (
            <option key={sub._id} value={sub._id}>
              {sub.name}
            </option>
          ))}
        </select>
      )}

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="text-sm border border-line rounded-xl px-3 py-2.5 bg-white"
      >
        <option value="newest">Newest</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="stockAsc">Stock: Low to High</option>
      </select>
    </div>
  );
}
