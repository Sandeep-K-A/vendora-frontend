import { useState } from "react";
import { Check } from "lucide-react";

export default function StockQuickEdit({
  stock,
  onSave,
}: {
  stock: number;
  onSave: (newStock: number) => Promise<void>;
}) {
  const [value, setValue] = useState(stock);
  const [isSaving, setIsSaving] = useState(false);
  const isDirty = value !== stock;

  async function handleSave() {
    if (!isDirty) return;
    setIsSaving(true);
    try {
      await onSave(value);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="flex items-center gap-1.5">
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        onBlur={handleSave}
        onKeyDown={(e) => e.key === "Enter" && handleSave()}
        className={`w-16 text-sm border rounded-lg px-2 py-1 ${
          stock === 0
            ? "border-red-300 text-red-600 font-medium"
            : "border-line text-ink"
        }`}
      />
      {isDirty && !isSaving && (
        <button
          onClick={handleSave}
          className="text-forest"
          aria-label="Save stock"
        >
          <Check size={14} />
        </button>
      )}
    </div>
  );
}
