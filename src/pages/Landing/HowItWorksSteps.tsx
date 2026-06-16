import { HOW_IT_WORKS_STEPS } from "@/constants";

interface HowItWorksStepsProps {
  activeStep: number;
  onStepClick: (index: number) => void;
}

export default function HowItWorksSteps({
  activeStep,
  onStepClick,
}: HowItWorksStepsProps) {
  return (
    <div className="flex flex-col">
      {HOW_IT_WORKS_STEPS.map((step, index) => {
        const isActive = activeStep === index;
        return (
          <button
            key={step.title}
            className="flex gap-4 py-5 text-left border-b border-line first:pt-0 last:border-b-0 last:pb-0"
            onClick={() => onStepClick(index)}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold flex-shrink-0 border transition-colors duration-200 ${isActive ? "bg-forest border-forest text-white" : "border-line-2 text-ink-2"}`}
            >
              {index + 1}
            </span>
            <span>
              <span
                className={`block font-head text-sm font-semibold mb-1 transition-colors duration-200 ${isActive ? "text-ink" : "text-ink-2"}`}
              >
                {step.title}
              </span>
              {isActive && (
                <span className="block text-ink-2 text-[13.5px] leading-relaxed">
                  {step.desc}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
