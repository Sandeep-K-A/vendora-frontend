export default function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-bg animate-pulse">
      {/* ── Category bar skeleton ── */}
      <div className="bg-white border-b border-line h-[48px] flex items-center px-8 gap-6">
        {[80, 64, 96, 56, 72].map((w, i) => (
          <div key={i} className="h-3 rounded bg-bg-3" style={{ width: w }} />
        ))}
      </div>

      {/* ── Hero skeleton ── */}
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_300px] gap-4">
          {/* Large panel */}
          <div className="rounded-2xl bg-bg-3 min-h-[420px] md:min-h-[520px]" />
          {/* Right panels */}
          <div className="hidden md:flex flex-col gap-4">
            <div className="flex-1 rounded-2xl bg-bg-3 min-h-[200px]" />
            <div className="flex-1 rounded-2xl bg-bg-3 min-h-[200px]" />
          </div>
        </div>
      </div>

      {/* ── Category section skeleton ── */}
      <div className="py-10 px-4 lg:px-8 max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="w-16 h-3 rounded bg-bg-3 mb-2" />
          <div className="w-48 h-6 rounded bg-bg-3" />
        </div>
        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-bg-3 h-[260px]" />
          ))}
        </div>
      </div>

      {/* ── Products section skeleton ── */}
      <div className="py-10 px-4 lg:px-8 max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="w-24 h-3 rounded bg-bg-3 mb-2" />
          <div className="w-56 h-6 rounded bg-bg-3" />
        </div>
        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-bg-3 h-[320px]" />
          ))}
        </div>
      </div>

      {/* ── Stores section skeleton ── */}
      <div className="py-10 px-4 lg:px-8 max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="w-28 h-3 rounded bg-bg-3 mb-2" />
          <div className="w-64 h-6 rounded bg-bg-3" />
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-bg-3 h-[220px]" />
          ))}
        </div>
      </div>
    </div>
  );
}
