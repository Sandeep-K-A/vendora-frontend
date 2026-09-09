export default function FileDropField({
  label,
  hint,
  file,
  onChange,
}: {
  label: string;
  hint: string;
  file: File | null | undefined;
  onChange: (file: File | null) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink block mb-1.5">
        {label}
      </label>
      <label className="flex flex-col items-center justify-center gap-1 border-2 border-dashed border-line rounded-xl py-5 cursor-pointer hover:border-forest hover:bg-forest-xxl/30 transition-colors">
        <span className="text-xs text-ink-2 text-center px-2">
          {file ? file.name : hint}
        </span>
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={(e) => onChange(e.target.files?.[0] ?? null)}
          className="hidden"
        />
      </label>
    </div>
  );
}
