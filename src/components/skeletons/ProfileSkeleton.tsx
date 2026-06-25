export default function ProfileSkeleton() {
  return (
    <div className="max-w-[860px] mx-auto px-4 lg:px-8 py-6 animate-pulse">
      {/* Header */}
      <div className="bg-white border border-line rounded-2xl p-6 mb-6 flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-bg-3 flex-shrink-0" />
        <div className="flex flex-col gap-2">
          <div className="w-36 h-6 rounded-lg bg-bg-3" />
          <div className="w-44 h-4 rounded bg-bg-3" />
          <div className="w-28 h-3 rounded bg-bg-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
        {/* Personal info */}
        <div className="bg-white border border-line rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-line">
            <div className="w-40 h-4 rounded bg-bg-3" />
            <div className="w-8 h-4 rounded bg-bg-3" />
          </div>
          <div className="p-5 flex flex-col gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-24 h-3 rounded bg-bg-3" />
                <div className="w-48 h-5 rounded bg-bg-3" />
              </div>
            ))}
          </div>
        </div>

        {/* Account settings */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-line rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-line">
              <div className="w-20 h-4 rounded bg-bg-3" />
            </div>
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3.5 border-b border-line last:border-0"
              >
                <div className="w-8 h-8 rounded-lg bg-bg-3 flex-shrink-0" />
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="w-32 h-4 rounded bg-bg-3" />
                  <div className="w-40 h-3 rounded bg-bg-3" />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-line rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-line">
              <div className="w-24 h-4 rounded bg-bg-3" />
            </div>
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3.5 border-b border-line last:border-0"
              >
                <div className="w-8 h-8 rounded-lg bg-bg-3 flex-shrink-0" />
                <div className="w-24 h-4 rounded bg-bg-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
