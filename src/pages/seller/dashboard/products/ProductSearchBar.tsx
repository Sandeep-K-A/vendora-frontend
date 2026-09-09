import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function ProductSearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => onChange(localValue), 400);
    return () => clearTimeout(timer);
  }, [localValue]);

  return (
    <div className="relative flex-1 min-w-[200px]">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-3"
      />
      <input
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-9 pr-3 py-2.5 text-sm border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
      />
    </div>
  );
}
