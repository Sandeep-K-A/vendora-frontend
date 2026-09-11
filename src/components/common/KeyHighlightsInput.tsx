import { X, Plus } from "lucide-react";

const MAX_HIGHLIGHTS = 5;

export default function KeyHighlightsInput({
  value,
  onChange,
  error,
}: {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}) {
  function updateAt(index: number, text: string) {
    const next = [...value];
    next[index] = text;
    onChange(next);
  }

  function addRow() {
    if (value.length < MAX_HIGHLIGHTS) onChange([...value, ""]);
  }

  function removeAt(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div>
      <label className="text-sm font-medium text-ink block mb-1.5">
        Key highlights ({value.length}/{MAX_HIGHLIGHTS})
      </label>
      <div className="flex flex-col gap-2">
        {value.map((highlight, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              value={highlight}
              onChange={(e) => updateAt(index, e.target.value)}
              placeholder={`Highlight ${index + 1}`}
              className="flex-1 border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
            />
            <button
              type="button"
              onClick={() => removeAt(index)}
              className="text-red-500 p-1"
              aria-label="Remove highlight"
            >
              <X size={15} />
            </button>
          </div>
        ))}
      </div>
      {value.length < MAX_HIGHLIGHTS && (
        <button
          type="button"
          onClick={addRow}
          className="flex items-center gap-1.5 text-sm text-forest font-medium mt-2"
        >
          <Plus size={14} /> Add highlight
        </button>
      )}
      {error && <p className="text-sm text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}
