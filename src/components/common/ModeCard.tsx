export default function ModeCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left px-4 py-3 rounded-xl border transition-colors ${
        selected ? "border-forest bg-forest-xxl" : "border-line hover:bg-bg"
      }`}
    >
      <span
        className={`text-sm font-medium ${selected ? "text-forest" : "text-ink"}`}
      >
        {label}
      </span>
    </button>
  );
}
