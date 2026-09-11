export default function WizardNav({
  step,
  isLastStep,
  isSubmitting,
  onNext,
  onBack,
  onSubmit,
  submitLabel = "Submit",
  submittingLabel = "Submitting...",
}: {
  step: number;
  isLastStep: boolean;
  isSubmitting: boolean;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
  submitLabel?: string;
  submittingLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-line">
      {step > 0 ? (
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 rounded-xl text-sm font-medium text-ink-2 hover:bg-bg transition-colors"
        >
          ← Back
        </button>
      ) : (
        <span />
      )}

      {isLastStep ? (
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="btn btn-primary px-7 py-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? submittingLabel : submitLabel}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="btn btn-primary px-7 py-2.5"
        >
          Next →
        </button>
      )}
    </div>
  );
}
