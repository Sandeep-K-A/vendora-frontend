interface CheckboxFieldProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  error?: string;
}

export default function CheckboxField({
  name,
  checked,
  onChange,
  onBlur,
  children,
  error,
}: CheckboxFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="flex items-start gap-2.5 cursor-pointer">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          className="w-4 h-4 mt-0.5 rounded border-line-2 accent-forest cursor-pointer flex-shrink-0"
        />
        <span className="text-sm text-ink-2 leading-relaxed">{children}</span>
      </label>
      {error && <p className="text-red-600 text-xs mt-1 ml-6">{error}</p>}
    </div>
  );
}
