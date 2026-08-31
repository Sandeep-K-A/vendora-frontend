import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/common/FormField";
import {
  forgotPasswordSchema,
  type ForgotPasswordSchema,
} from "@/lib/schemas/auth.schema";
import { forgotPassword } from "@/lib/api/auth";
import { isAxiosError } from "axios";

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onTouched",
    defaultValues: { email: "" },
  });

  async function onSubmit(data: ForgotPasswordSchema) {
    setServerError(null);
    try {
      await forgotPassword(data.email);
      // Always show the success state, regardless of whether the email
      // actually exists — the backend already returns a generic message
      // for this exact reason (prevents account enumeration).
      setSubmitted(true);
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data?.message ?? "Something went wrong")
        : "Something went wrong";
      setServerError(message);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col justify-center px-8 py-10 max-w-md mx-auto w-full text-center">
        <h1 className="font-head text-2xl font-bold text-ink mb-3">
          Check your email
        </h1>
        <p className="text-ink-2 text-sm leading-relaxed">
          If an account exists with that email, we've sent a link to reset your
          password. The link expires in 30 minutes.
        </p>
        <Link
          to="/login"
          className="text-forest font-semibold text-sm mt-6 hover:underline"
        >
          ← Back to login
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center px-8 py-10 max-w-md mx-auto w-full">
      <div className="mb-7">
        <h1 className="font-head text-3xl font-bold text-ink tracking-[-0.02em]">
          Forgot your password?
        </h1>
        <p className="text-ink-2 text-sm mt-2">
          Enter your email and we'll send you a link to reset it.
        </p>
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg w-full mt-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send reset link →"}
        </button>
      </form>

      <p className="text-ink-2 text-sm text-center mt-5">
        Remembered your password?{" "}
        <Link to="/login" className="text-forest font-semibold hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
