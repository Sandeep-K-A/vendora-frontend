import { useState } from "react";

interface PasswordFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
}

export default function PasswordField({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  autoComplete,
}: PasswordFieldProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`w-full px-3.5 py-2.5 pr-10 rounded-lg border text-sm text-ink placeholder:text-ink-3 outline-none transition-colors duration-150 ${error ? "border-red-400 focus:border-red-500" : "border-line focus:border-forest-light"}`}
        />
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-3 hover:text-ink-2 transition-colors duration-150"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {" "}
          {show ? "🙈" : "👁"}
        </button>
      </div>
      {error && <p className="text-red-600 text-xs mt-0.5">{error}</p>}
    </div>
  );
}
