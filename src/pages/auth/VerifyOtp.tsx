import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { verifyOtp, resendOtp } from "@/lib/api/auth";
import { isAxiosError } from "axios";
import { useAuthStore } from "@/store/authStore";
import ResendTimer from "@/components/common/ResendTimer";

const OTP_LENGTH = 6;
const RESEND_SECONDS = 60;
const STORAGE_KEY = "pendingOtpVerification";

interface OtpContext {
  email: string;
  emailSent: boolean;
  wantsToSell: boolean;
}

function readOtpContext(state: unknown): OtpContext | null {
  if (state && typeof state === "object" && "email" in state) {
    return state as OtpContext;
  }

  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as OtpContext;
  } catch {
    return null;
  }
}

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();
  const setAuth = useAuthStore((state) => state.setAuth);

  const otpContext = readOtpContext(location.state);
  const email = otpContext?.email ?? "";
  const wantsToSell = otpContext?.wantsToSell ?? false;
  const [emailSent, setEmailSent] = useState<boolean>(
    otpContext?.emailSent ?? true,
  );

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendKey, setResendKey] = useState(0); // forces ResendTimer to restart

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  console.log("1");

  useEffect(() => {
    if (!email) navigate("/register", { replace: true });
  }, [email, navigate]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const digit = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    setError("");
    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    if (!pasted) return;
    const newOtp = Array(OTP_LENGTH).fill("");
    pasted.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });
    setOtp(newOtp);
    setError("");
    const nextIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length !== OTP_LENGTH) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const { user, accessToken } = await verifyOtp(email, otpValue);
      setAuth(user, accessToken);

      sessionStorage.removeItem(STORAGE_KEY);

      navigate(wantsToSell ? "/create-store" : "/", { replace: true });
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data?.message ??
          "Invalid or expired verification code.")
        : "Invalid or expired verification code.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (isResending) return;

    try {
      setError("");
      setIsResending(true);
      await resendOtp(email);
      setEmailSent(true);

      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ email, emailSent: true, wantsToSell }),
      );

      setOtp(Array(OTP_LENGTH).fill(""));
      setResendKey((prev) => prev + 1); // restarts ResendTimer's countdown
      inputRefs.current[0]?.focus();
    } catch {
      setError("Unable to resend the code. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-forest/10">
              <svg
                className="h-7 w-7 text-forest"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                />
              </svg>
            </div>

            <h1 className="font-head text-3xl font-bold tracking-tight text-ink">
              Verify your email
            </h1>

            <p className="mt-3 text-sm leading-6 text-ink-2">
              We've sent a 6-digit verification code to
            </p>

            {email && <p className="mt-1 font-medium text-ink">{email}</p>}
          </div>

          {!emailSent && (
            <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
              We couldn't send your verification email. Tap "Resend code" below
              to try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8" noValidate>
            <div className="flex justify-center gap-2 sm:gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  maxLength={1}
                  value={digit}
                  onChange={(event) => handleChange(index, event.target.value)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  onPaste={handlePaste}
                  className="h-12 w-11 rounded-lg border border-border bg-white text-center text-xl font-semibold text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20 sm:h-14 sm:w-12"
                  aria-label={`OTP digit ${index + 1}`}
                />
              ))}
            </div>

            {error && (
              <p className="mt-4 text-center text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary btn-lg mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Verifying..." : "Verify email →"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-ink-2">
            <span>Didn't receive the code? </span>
            <ResendTimer
              key={resendKey}
              seconds={otpContext?.emailSent === false ? 0 : RESEND_SECONDS}
              onResend={handleResend}
              disabled={isResending}
            />
          </div>

          <div className="mt-5 text-center">
            <Link
              to="/login"
              className="text-sm font-medium text-ink-2 hover:text-forest"
            >
              ← Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
