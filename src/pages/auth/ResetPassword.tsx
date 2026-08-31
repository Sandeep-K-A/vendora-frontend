import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import PasswordField from "@/components/common/PasswordField";
import PasswordRequirements from "@/components/common/PasswordRequirements";
import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from "@/lib/schemas/auth.schema";
import { resetPassword } from "@/lib/api/auth";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const navigate = useNavigate();

  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onTouched",
    defaultValues: { newPassword: "", confirmNewPassword: "" },
  });

  const passwordValue = watch("newPassword");

  async function onSubmit(data: ResetPasswordSchema) {
    setServerError(null);
    try {
      await resetPassword(token, data.newPassword);
      setSuccess(true);
      setTimeout(() => navigate("/login", { replace: true }), 2000);
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data?.message ?? "Invalid or expired reset link")
        : "Something went wrong";
      setServerError(message);
    }
  }

  if (!token) {
    return (
      <div className="flex flex-col justify-center px-8 py-10 max-w-md mx-auto w-full text-center">
        <h1 className="font-head text-2xl font-bold text-ink mb-3">
          Invalid link
        </h1>
        <p className="text-ink-2 text-sm leading-relaxed">
          This password reset link is missing or malformed.
        </p>
        <Link
          to="/forgot-password"
          className="text-forest font-semibold text-sm mt-6 hover:underline"
        >
          Request a new link
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex flex-col justify-center px-8 py-10 max-w-md mx-auto w-full text-center">
        <h1 className="font-head text-2xl font-bold text-ink mb-3">
          Password reset
        </h1>
        <p className="text-ink-2 text-sm leading-relaxed">
          Your password has been updated. Redirecting you to login...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center px-8 py-10 max-w-md mx-auto w-full">
      <div className="mb-7">
        <h1 className="font-head text-3xl font-bold text-ink tracking-[-0.02em]">
          Set a new password
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

        <div>
          <Controller
            name="newPassword"
            control={control}
            render={({ field, fieldState }) => (
              <PasswordField
                label="New password"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                placeholder="Create a new password"
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
          name="confirmNewPassword"
          control={control}
          render={({ field, fieldState }) => (
            <PasswordField
              label="Confirm new password"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              placeholder="Repeat your new password"
              autoComplete="new-password"
              error={fieldState.error?.message}
            />
          )}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg w-full mt-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Resetting..." : "Reset password →"}
        </button>
      </form>
    </div>
  );
}
