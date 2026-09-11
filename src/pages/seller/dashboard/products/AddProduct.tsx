import { useState } from "react";
import { useForm, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useCategories } from "@/hooks/useCategories";
import { createProduct } from "@/lib/api/product";
import {
  productSchema,
  productStepFields,
  PRODUCT_STEPS,
  type ProductSchema,
} from "@/lib/schemas/product.schema";
import StepIndicator from "@/components/common/StepIndicator";
import WizardNav from "@/components/common/WizardNav";
import BasicsStep from "./steps/BasicsStep";
import CategoryStep from "./steps/CategoryStep";
import SpecificationsStep from "./steps/SpecificationsStep";
import PricingStockStep from "./steps/PricingStockStep";
import ImagesStep from "./steps/ImagesStep";
import ProductReviewStep from "./steps/ProductReviewStep";

const STEP_ICONS = PRODUCT_STEPS.map((label) => ({ label, icon: () => null })); // reuse StepIndicator without custom icons if needed—adjust as required

export default function AddProduct() {
  const navigate = useNavigate();
  const { categories } = useCategories();

  const [step, setStep] = useState(0);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, trigger, watch } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      aboutThisProduct: "",
      keyHighlights: [""],
      categoryId: "",
      subcategoryId: "",
      specifications: {},
      price: "",
      stock: "",
      images: [null, null, null, null],
    },
  });

  const categoryId = watch("categoryId");
  const subcategoryId = watch("subcategoryId");
  const category = categories.find((c) => c._id === categoryId);
  const subcategory = category?.subcategories.find(
    (s) => s._id === subcategoryId,
  );

  const isLastStep = step === PRODUCT_STEPS.length - 1;

  async function handleNext() {
    const fieldsToValidate = productStepFields[
      step
    ] as FieldPath<ProductSchema>[];
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
      await createProduct(data);
      navigate("/seller/dashboard/products", { replace: true });
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data?.message ?? "Couldn't create product")
        : "Something went wrong";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="font-head text-2xl md:text-3xl font-bold text-ink tracking-tight">
          Add a product
        </h1>
        <p className="text-sm text-ink-2 mt-1.5">
          Fill in the details buyers need to make a decision.
        </p>
      </div>

      <StepIndicator steps={STEP_ICONS} currentStep={step} />

      <div className="bg-white border border-line rounded-2xl shadow-sm p-6 md:p-8">
        {serverError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 mb-5">
            {serverError}
          </div>
        )}

        <form noValidate>
          {step === 0 && <BasicsStep control={control} />}
          {step === 1 && (
            <CategoryStep
              control={control}
              categories={categories}
              categoryId={categoryId}
            />
          )}
          {step === 2 && (
            <SpecificationsStep control={control} subcategory={subcategory} />
          )}
          {step === 3 && <PricingStockStep control={control} />}
          {step === 4 && <ImagesStep control={control} />}
          {step === 5 && (
            <ProductReviewStep
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
            submitLabel="Add product"
            submittingLabel="Adding new product..."
          />
        </form>
      </div>
    </div>
  );
}
