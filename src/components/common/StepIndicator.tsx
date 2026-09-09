import { Check } from "lucide-react";

interface Step {
  label: string;
  icon: React.ElementType;
}

export default function StepIndicator({
  steps,
  currentStep,
}: {
  steps: Step[];
  currentStep: number;
}) {
  return (
    <div className="flex items-center justify-between mb-8 px-2">
      {steps.map((s, i) => {
        const isDone = i < currentStep;
        const isCurrent = i === currentStep;
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className="flex items-center flex-1 last:flex-none"
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-colors duration-200 ${
                  isDone
                    ? "bg-forest border-forest text-white"
                    : isCurrent
                      ? "border-forest text-forest bg-white"
                      : "border-line text-ink-3 bg-white"
                }`}
              >
                {isDone ? (
                  <Check size={16} strokeWidth={2.5} />
                ) : (
                  <Icon size={16} strokeWidth={2} />
                )}
              </div>
              <span
                className={`text-[11px] font-medium hidden sm:block ${
                  isCurrent
                    ? "text-forest"
                    : isDone
                      ? "text-ink-2"
                      : "text-ink-3"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-[2px] flex-1 mx-1.5 transition-colors duration-200 ${isDone ? "bg-forest" : "bg-line"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
