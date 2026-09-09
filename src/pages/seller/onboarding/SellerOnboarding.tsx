import { useState } from "react";
import { useForm, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useCategories } from "@/hooks/useCategories";
import { createStore } from "@/lib/api/store";
import {
  storeSchema,
  stepFields,
  STEPS,
  type StoreSchema,
} from "@/lib/schemas/store.schema";
import StepIndicator from "@/components/common/StepIndicator";
import WizardNav from "@/components/common/WizardNav";
import IdentityStep from "./steps/IdentityStep";
import ContactStep from "./steps/ContactStep";
import AddressStep from "./steps/AddressStep";
import CategoryStep from "./steps/CategoryStep";
import ReviewStep from "./steps/ReviewStep";

export default function SellerOnboarding() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const accessToken = useAuthStore((state) => state.accessToken);
  const { categories, isLoading: categoriesLoading } = useCategories();

  const [step, setStep] = useState(0);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, trigger, watch } = useForm<StoreSchema>({
    resolver: zodResolver(storeSchema),
    mode: "onTouched",
    defaultValues: {
      storeName: "",
      storeDescription: "",
      logo: null,
      banner: null,
      phone: "",
      gstNumber: "",
      address: {
        street: "",
        city: "",
        state: "",
        country: "India",
        postalCode: "",
      },
      categoryMode: "selected",
      categories: [],
    },
  });

  const categoryMode = watch("categoryMode");
  const isLastStep = step === STEPS.length - 1;

  async function handleNext() {
    const fieldsToValidate = stepFields[step] as FieldPath<StoreSchema>[];
    const valid = await trigger(fieldsToValidate);
    if (valid) setStep((s) => s + 1);
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  const onSubmit = handleSubmit(async (data) => {
    setServerError(null);
    setIsSubmitting(true);
    try {
      const { store, user } = await createStore(data);
      if (accessToken) setAuth(user, accessToken);
      navigate("/seller/dashboard", {
        replace: true,
        state: { justCreated: true, storeStatus: store.status },
      });
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data?.message ?? "Couldn't create your store")
        : "Something went wrong";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <div className="min-h-screen bg-bg py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-head text-2xl md:text-3xl font-bold text-ink tracking-tight">
            Set up your store
          </h1>
          <p className="text-sm text-ink-2 mt-1.5">
            A few details and you're ready to start selling on Vendora.
          </p>
        </div>

        <StepIndicator steps={STEPS} currentStep={step} />

        <div className="bg-white border border-line rounded-2xl shadow-sm p-6 md:p-8">
          {serverError && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 mb-5">
              {serverError}
            </div>
          )}

          <form noValidate>
            {step === 0 && <IdentityStep control={control} />}
            {step === 1 && <ContactStep control={control} />}
            {step === 2 && <AddressStep control={control} />}
            {step === 3 && (
              <CategoryStep
                control={control}
                categories={categories}
                categoriesLoading={categoriesLoading}
                categoryMode={categoryMode}
              />
            )}
            {step === 4 && (
              <ReviewStep
                watch={watch}
                categories={categories}
                onEditStep={setStep}
              />
            )}

            <WizardNav
              step={step}
              isLastStep={isLastStep}
              isSubmitting={isSubmitting}
              onNext={handleNext}
              onBack={handleBack}
              onSubmit={onSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
