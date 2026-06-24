export default function AuthSkeleton() {
  return (
    <div
      className="
      min-h-screen bg-bg animate-pulse
      md:bg-forest
      lg:h-screen lg:grid lg:grid-cols-2
    "
    >
      {/* ── Left — brand panel (desktop only) ── */}
      <div className="hidden lg:flex flex-col justify-between p-14">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/20" />
          <div className="w-24 h-5 rounded bg-white/20" />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-4">
          <div className="w-48 h-10 rounded-lg bg-white/20" />
          <div className="w-40 h-10 rounded-lg bg-white/20" />
          <div className="w-52 h-10 rounded-lg bg-white/25" />
          <div className="w-64 h-4 rounded bg-white/15 mt-2" />
          <div className="w-56 h-4 rounded bg-white/15" />
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex-shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <div className="w-32 h-4 rounded bg-white/20" />
                <div className="w-full h-3 rounded bg-white/12" />
                <div className="w-4/5 h-3 rounded bg-white/12" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right — form panel ── */}
      <div
        className="
        md:flex md:items-start md:justify-center md:py-10 md:px-6
        lg:flex lg:items-center lg:justify-center lg:bg-bg
      "
      >
        <div
          className="
          w-full
          md:max-w-md md:bg-bg md:rounded-2xl
          lg:max-w-md
        "
        >
          {/* Mobile/tablet mini navbar */}
          <div className="flex items-center gap-2.5 px-8 py-4 border-b border-line lg:hidden">
            <div className="w-7 h-7 rounded-lg bg-bg-3" />
            <div className="w-20 h-4 rounded bg-bg-3" />
          </div>

          {/* Form content */}
          <div className="px-8 py-10 flex flex-col gap-5">
            {/* Heading */}
            <div className="w-48 h-8 rounded-lg bg-bg-3 mb-2" />

            {/* Form fields */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <div className="w-24 h-3.5 rounded bg-bg-3" />
                <div className="w-full h-11 rounded-xl bg-bg-3" />
              </div>
            ))}

            {/* Submit button */}
            <div className="w-full h-12 rounded-xl bg-bg-3 mt-2" />

            {/* Footer link */}
            <div className="w-48 h-4 rounded bg-bg-3 mx-auto mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
