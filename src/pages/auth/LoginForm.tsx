import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/common/FormField";
import PasswordField from "@/components/common/PasswordField";
import { loginSchema, type LoginSchema } from "@/lib/schemas/auth.schema";
import { object } from "zod";

const MOCK_CREDENTIALS = {
  buyer: {
    email: "buyer@vendora.in",
    password: "Buyer@123",
    name: "Sandeep K A",
    initials: "SK",
    isSeller: false,
  },
};

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginSchema) {
    // TODO: wire to POST /api/auth/login in Phase 3
    const match = Object.values(MOCK_CREDENTIALS).find(
      (cred) => cred.email === data.email && cred.password === data.password,
    );
    if (!match) {
      setError("root", {
        type: "manual",
        message: "Invalid email or password. Please try again.",
      });
      return;
    }
    navigate("/home");
  }

  return (
    <div className="flex flex-col justify-center px-8 py-10 max-w-md mx-auto w-full">
      <div className="mb-7">
        <h1 className="font-head text-3xl font-bold text-ink tracking-[-0.02em]">
          Welcome back
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        noValidate
      >
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <FormField
              label="Email address"
              name={field.name}
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
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-ink">Password</label>
            <Link
              to="/forgot-password"
              className="text-xs text-forest font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <PasswordField
                label=""
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                placeholder="Enter your password"
                autoComplete="current-password"
                error={fieldState.error?.message}
              />
            )}
          />
        </div>

        {errors.root && (
          <p className="text-[13px] text-red-500 text-center -mt-1">
            {errors.root.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg w-full mt-1"
        >
          {isSubmitting ? "Logging in…" : "Log in →"}
        </button>
      </form>

      <p className="text-ink-2 text-sm text-center mt-5">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-forest font-semibold hover:underline"
        >
          Create one free
        </Link>
      </p>
    </div>
  );
}
