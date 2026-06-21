import type { ReactFormState } from "react-dom/client";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
}

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  autoComplete,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`px-3.5 py-2.5 rounded-lg border text-sm text-ink placeholder:text-ink-3 outline-none transition-colors duration-150 ${error ? "border-red-400  focus:border-red-500" : "border-line focus:border-forest-light"}`}
      />
      {error && <p className="text-red-600 text-xs mt-0.5">{error}</p>}
    </div>
  );
}
