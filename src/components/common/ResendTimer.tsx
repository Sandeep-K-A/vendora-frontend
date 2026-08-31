import { useEffect, useState } from "react";

interface ResendTimerProps {
  seconds: number;
  onResend: () => void;
  disabled?: boolean;
}

export default function ResendTimer({
  seconds,
  onResend,
  disabled,
}: ResendTimerProps) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    setRemaining(seconds);
  }, [seconds]);

  useEffect(() => {
    if (remaining <= 0) return;
    const timer = setInterval(() => setRemaining((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [remaining]);

  return remaining > 0 ? (
    <span className="font-medium text-ink">Resend in {remaining}s</span>
  ) : (
    <button
      type="button"
      onClick={onResend}
      disabled={disabled}
      className="font-semibold text-forest hover:underline disabled:opacity-60"
    >
      {disabled ? "Sending..." : "Resend code"}
    </button>
  );
}
