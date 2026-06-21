import type { Requirement } from "@/types";

const REQUIREMENTS: Requirement[] = [
  { label: "At least 8 characters", test: (v) => v.length >= 8 },
  { label: "One uppercase letter", test: (v) => /[A-Z]/.test(v) },
  { label: "One number", test: (v) => /[0-9]/.test(v) },
  { label: "One special character", test: (v) => /[^A-Za-z0-9]/.test(v) },
];

interface PasswordRequirementsProps {
  password: string;
}

export default function PasswordRequirements({
  password,
}: PasswordRequirementsProps) {
  return (
    <ul className="flex flex-col gap-1 mt-2">
      {REQUIREMENTS.map((req) => {
        const met = req.test(password);
        return (
          <li
            key={req.label}
            className={`flex items-center gap-1.5 text-xs transition-colors duration-150 ${met ? "text-vendora-green" : "text-ink-3"}`}
          >
            <span className="w-3.5 text-center" aria-hidden="true">
              {met ? "✓" : "○"}
            </span>
            <span className={met ? "line-through" : ""}>{req.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
