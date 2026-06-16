import { useState } from "react";
import HowItWorksSteps from "./HowItWorksSteps";
import HowItWorksPreview from "./HowItWorksPreview";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <section
      className="container-vendora py-20"
      id="how-it-works"
      aria-labelledby="how-heading"
    >
      <div className="text-left mb-12">
        <p className="flex items-center gap-2 text-xs font-semibold text-forest uppercase tracking-wider mb-3">
          <span className="w-5 h-[1.2px] bg-forest-light" aria-hidden="true" />
          How it works
        </p>
        <h2
          id="how-heading"
          className="font-head text-3xl lg:text-4xl font-bold text-ink leading-tight tracking-[0.02em] mb-3"
        >
          Rethought from
          <br />
          the ground up.
        </h2>
        <p className="text-ink-2 max-w-lg">
          Every step of the buying experience — from how you search to how you
          decide.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <HowItWorksSteps activeStep={activeStep} onStepClick={setActiveStep} />
        <HowItWorksPreview activeStep={activeStep} />
      </div>
    </section>
  );
}
