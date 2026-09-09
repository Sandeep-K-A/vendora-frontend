import { Eye, Pencil, Trash2 } from "lucide-react";
import StockQuickEdit from "./StockQuickEdit";

export interface ProductRowData {
  _id: string;
  name: string;
  image: string | null;
  categoryName: string;
  subcategoryName: string | null;
  price: number;
  stock: number;
  isActive: boolean;
}

interface ProductTableProps {
  products: ProductRowData[];
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onStockSave: (id: string, stock: number) => Promise<void>;
}

export default function ProductTable({
  products,
  onView,
  onEdit,
  onDelete,
  onStockSave,
}: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="bg-white border border-line rounded-2xl py-12 text-center text-sm text-ink-2">
        No products found.
      </div>
    );
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block bg-white border border-line rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-bg text-ink-3 text-xs uppercase tracking-wide">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Product</th>
              <th className="text-left px-4 py-3 font-medium">Category</th>
              <th className="text-left px-4 py-3 font-medium">Price</th>
              <th className="text-left px-4 py-3 font-medium">Stock</th>
              <th className="text-left px-4 py-3 font-medium">Status</th>
              <th className="text-right px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-t border-line hover:bg-bg/50">
                <td className="px-4 py-3">
                  <button
                    onClick={() => onView(p._id)}
                    className="flex items-center gap-3 text-left"
                  >
                    <img
                      src={p.image ?? "/placeholder.png"}
                      alt=""
                      className="w-9 h-9 rounded-lg object-cover bg-bg flex-shrink-0"
                    />
                    <span className="font-medium text-ink truncate max-w-[200px]">
                      {p.name}
                    </span>
                  </button>
                </td>
                <td className="px-4 py-3 text-ink-2">
                  {p.categoryName}
                  {p.subcategoryName && (
                    <span className="text-ink-3"> / {p.subcategoryName}</span>
                  )}
                </td>
                <td className="px-4 py-3 text-ink font-medium">
                  ₹{p.price.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <StockQuickEdit
                    stock={p.stock}
                    onSave={(newStock) => onStockSave(p._id, newStock)}
                  />
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      p.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {p.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-1">
                    <IconButton
                      icon={Eye}
                      label={`View ${p.name}`}
                      onClick={() => onView(p._id)}
                    />
                    <IconButton
                      icon={Pencil}
                      label={`Edit ${p.name}`}
                      onClick={() => onEdit(p._id)}
                    />
                    <IconButton
                      icon={Trash2}
                      label={`Delete ${p.name}`}
                      onClick={() => onDelete(p._id)}
                      danger
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden flex flex-col gap-3">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white border border-line rounded-2xl p-4"
          >
            <div className="flex gap-3">
              <img
                src={p.image ?? "/placeholder.png"}
                alt=""
                className="w-14 h-14 rounded-lg object-cover bg-bg flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <button
                  onClick={() => onView(p._id)}
                  className="font-medium text-ink text-sm truncate block text-left w-full"
                >
                  {p.name}
                </button>
                <p className="text-xs text-ink-3 mt-0.5">
                  {p.categoryName}
                  {p.subcategoryName && ` / ${p.subcategoryName}`}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-sm font-semibold text-ink">
                    ₹{p.price.toLocaleString()}
                  </span>
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                      p.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {p.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-line">
              <StockQuickEdit
                stock={p.stock}
                onSave={(newStock) => onStockSave(p._id, newStock)}
              />
              <div className="flex gap-1">
                <IconButton
                  icon={Pencil}
                  label={`Edit ${p.name}`}
                  onClick={() => onEdit(p._id)}
                />
                <IconButton
                  icon={Trash2}
                  label={`Delete ${p.name}`}
                  onClick={() => onDelete(p._id)}
                  danger
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function IconButton({
  icon: Icon,
  label,
  onClick,
  danger,
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`p-2 rounded-lg transition-colors ${
        danger ? "hover:bg-red-50 text-red-500" : "hover:bg-bg text-ink-2"
      }`}
    >
      <Icon size={15} />
    </button>
  );
}
