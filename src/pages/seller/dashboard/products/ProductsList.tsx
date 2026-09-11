import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import ProductSearchBar from "./ProductSearchBar";
import ProductFilters, { type SortOption } from "./ProductFilters";
import ProductTable, { type ProductRowData } from "./ProductTable";
import Pagination from "@/components/common/Pagination";
import ConfirmDialog from "@/components/common/ConfirmDialog";
import { useMyProducts } from "@/hooks/useMyProducts";
import { useCategories } from "@/hooks/useCategories";
import { updateProductStock, deactivateProduct } from "@/lib/api/product";

// Mock data — replace with real fetch once backend is wired
// const MOCK_CATEGORIES = [
//   {
//     _id: "cat1",
//     name: "Electronics",
//     subcategories: [
//       { _id: "sub1", name: "Laptops" },
//       { _id: "sub2", name: "Mobile" },
//     ],
//   },
// ];
// const MOCK_PRODUCTS: ProductRowData[] = [
//   {
//     _id: "p1",
//     name: "Dell XPS 15",
//     image: null,
//     categoryName: "Electronics",
//     subcategoryName: "Laptops",
//     price: 129999,
//     stock: 15,
//     isActive: true,
//   },
//   {
//     _id: "p2",
//     name: "iPhone 15",
//     image: null,
//     categoryName: "Electronics",
//     subcategoryName: "Mobile",
//     price: 79999,
//     stock: 0,
//     isActive: true,
//   },
// ];

export default function ProductsList() {
  const navigate = useNavigate();
  const { categories } = useCategories();

  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [page, setPage] = useState(1);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const { data, isLoading, mutate } = useMyProducts({
    page,
    search,
    categoryId: categoryId || undefined,
    subcategoryId: subcategoryId || undefined,
    sortBy,
  });

  function resetToFirstPage() {
    setPage(1);
  }

  async function handleStockSave(id: string, stock: number) {
    await updateProductStock(id, stock);
    await mutate();
  }

  async function handleConfirmDelete() {
    if (!deletingId) return;
    setIsDeleting(true);
    try {
      await deactivateProduct(deletingId);
      await mutate();
    } finally {
      setIsDeleting(false);
      setDeletingId(null);
    }
  }

  const rows: ProductRowData[] = (data?.products ?? []).map((p) => {
    const category = categories.find((c) => c._id === p.category._id);
    const subcategory = category?.subcategories.find(
      (s) => s._id === p.subcategoryId,
    );

    return {
      _id: p._id,
      name: p.name,
      image: p.images[0] ?? null,
      categoryName: p.category.name,
      subcategoryName: subcategory?.name ?? null,
      price: p.price,
      stock: p.stock,
      isActive: p.isActive,
    };
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-ink">Products</h1>
        <button
          onClick={() => navigate("/seller/dashboard/products/new")}
          className="btn btn-primary flex items-center gap-2 px-4 py-2.5"
        >
          <Plus size={16} /> Add product
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <ProductSearchBar
          value={search}
          onChange={(v) => {
            setSearch(v);
            resetToFirstPage();
          }}
        />
        <ProductFilters
          categories={categories}
          categoryId={categoryId}
          subcategoryId={subcategoryId}
          sortBy={sortBy}
          onCategoryChange={(id) => {
            setCategoryId(id);
            setSubcategoryId("");
            resetToFirstPage();
          }}
          onSubcategoryChange={(id) => {
            setSubcategoryId(id);
            resetToFirstPage();
          }}
          onSortChange={(sort) => {
            setSortBy(sort);
            resetToFirstPage();
          }}
        />
      </div>

      <ProductTable
        products={rows}
        onView={(id) => navigate(`/seller/dashboard/products/${id}`)}
        onEdit={(id) => navigate(`/seller/dashboard/products/${id}/edit`)}
        onDelete={(id) => setDeletingId(id)}
        onStockSave={handleStockSave}
      />

      <Pagination page={page} totalPages={3} onChange={setPage} />

      <ConfirmDialog
        isOpen={!!deletingId}
        title="Remove this product?"
        description="It will be hidden from buyers but past orders referencing it stay intact."
        confirmLabel="Remove"
        isLoading={isDeleting}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeletingId(null)}
      />
    </div>
  );
}
