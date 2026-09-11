interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
  rows?: number;
}

export default function TextareaField({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  rows = 4,
}: TextareaFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium text-ink block mb-1.5"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={rows}
        className={`w-full border rounded-xl px-3.5 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-forest/20 ${
          error ? "border-red-400" : "border-line focus:border-forest"
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}
