export default function OrdersSkeleton() {
  return (
    <div className="max-w-[860px] mx-auto px-4 lg:px-8 py-6 animate-pulse">
      {/* Header */}
      <div className="mb-6">
        <div className="w-32 h-7 rounded-lg bg-bg-3 mb-2" />
        <div className="w-24 h-4 rounded bg-bg-3" />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[80, 56, 72, 68].map((w, i) => (
          <div
            key={i}
            className="h-9 rounded-xl bg-bg-3"
            style={{ width: w }}
          />
        ))}
      </div>

      {/* Order cards */}
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white border border-line rounded-2xl overflow-hidden"
          >
            {/* Card header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-line bg-bg">
              <div className="flex items-center gap-3">
                <div className="w-32 h-4 rounded bg-bg-3" />
                <div className="w-28 h-3 rounded bg-bg-3" />
              </div>
              <div className="w-24 h-6 rounded-full bg-bg-3" />
            </div>
            {/* Items */}
            <div className="px-5 py-4 flex flex-col gap-3">
              {[1, 2].map((j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-bg-3 flex-shrink-0" />
                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="w-3/4 h-4 rounded bg-bg-3" />
                    <div className="w-1/2 h-3 rounded bg-bg-3" />
                    <div className="w-16 h-4 rounded bg-bg-3" />
                  </div>
                </div>
              ))}
            </div>
            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3.5 border-t border-line bg-bg">
              <div className="flex flex-col gap-1.5">
                <div className="w-36 h-3 rounded bg-bg-3" />
                <div className="w-20 h-5 rounded bg-bg-3" />
              </div>
              <div className="flex gap-2">
                <div className="w-24 h-9 rounded-xl bg-bg-3" />
                <div className="w-28 h-9 rounded-xl bg-bg-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
