import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/common/FormField";
import PasswordField from "@/components/common/PasswordField";
import PasswordRequirements from "@/components/common/PasswordRequirements";
import CheckboxField from "@/components/common/CheckboxField";
import { registerSchema, type RegisterSchema } from "@/lib/schemas/auth.schema";
import { useState } from "react";
import { registerUser } from "@/lib/api/auth";
import { isAxiosError } from "axios";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const intentIsSeller = searchParams.get("intent") === "seller";

  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, watch } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      wantsToSell: intentIsSeller,
      agreedToTerms: false,
    },
  });

  const passwordValue = watch("password");
  const wantsToSell = watch("wantsToSell");

  async function onSubmit(data: RegisterSchema) {
    setServerError(null);
    setIsSubmitting(true);
    try {
      const result = await registerUser({
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      });
      console.log("registerUser() returned:", result);

      const { email, emailSent } = result;

      const otpContext = { email, emailSent, wantsToSell: data.wantsToSell };

      sessionStorage.setItem(
        "pendingOtpVerification",
        JSON.stringify(otpContext),
      );
      navigate("/verify-otp", { state: otpContext });
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data?.message ?? "Registration failed")
        : "Something went wrong";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="flex flex-col justify-center px-8 py-10 max-w-md mx-auto w-full">
      <div className="mb-7">
        <h1 className="font-head text-3xl font-bold text-ink tracking-[-0.02em]">
          Create your account
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        noValidate
      >
        {serverError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {serverError}
          </div>
        )}

        <Controller
          name="fullname"
          control={control}
          render={({ field, fieldState }) => (
            <FormField
              label="Full name"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              placeholder="Sandeep K A"
              autoComplete="name"
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <FormField
              label="Email address"
              name={field.name}
              type="email"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              placeholder="you@example.com"
              autoComplete="email"
              error={fieldState.error?.message}
            />
          )}
        />

        <div>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <PasswordField
                label="Password"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                placeholder="Create a strong password"
                autoComplete="new-password"
                error={fieldState.error?.message}
              />
            )}
          />
          {passwordValue.length > 0 && (
            <PasswordRequirements password={passwordValue} />
          )}
        </div>

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <PasswordField
              label="Confirm password"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              placeholder="Repeat your password"
              autoComplete="new-password"
              error={fieldState.error?.message}
            />
          )}
        />

        {/* Seller intent checkbox */}
        <div className="bg-forest-xl/30 border border-forest-xl rounded-xl p-4">
          <Controller
            name="wantsToSell"
            control={control}
            render={({ field }) => (
              <CheckboxField
                name={field.name}
                checked={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              >
                <span className="text-ink font-medium">
                  I also want to sell on Vendora
                </span>
                <span className="block text-ink-2 text-xs mt-0.5">
                  Set up your store right after registration. Zero commission,
                  always.
                </span>
              </CheckboxField>
            )}
          />
        </div>

        {/* Terms checkbox */}
        <Controller
          name="agreedToTerms"
          control={control}
          render={({ field, fieldState }) => (
            <CheckboxField
              name={field.name}
              checked={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error?.message}
            >
              I agree to Vendora's{" "}
              <Link
                to="/terms"
                className="text-forest font-medium hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="text-forest font-medium hover:underline"
              >
                Privacy Policy
              </Link>
            </CheckboxField>
          )}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg w-full mt-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? "Creating account..."
            : wantsToSell
              ? "Create account & set up store →"
              : "Create free account →"}
        </button>
      </form>

      <p className="text-ink-2 text-sm text-center mt-5">
        Already have an account?{" "}
        <Link to="/login" className="text-forest font-semibold hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
