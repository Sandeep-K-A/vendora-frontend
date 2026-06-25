export default function CategorySkeleton() {
  return (
    <div className="animate-pulse">
      {/* ── CategoryHeader ── */}
      <div className="py-5 border-b border-line bg-white px-4 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-10 h-3 rounded bg-bg-3" />
            <div className="w-2 h-2 rounded bg-bg-3" />
            <div className="w-20 h-3 rounded bg-bg-3" />
          </div>
          {/* Title + count */}
          <div className="flex items-baseline gap-3">
            <div className="w-40 h-8 rounded-lg bg-bg-3" />
            <div className="w-24 h-4 rounded bg-bg-3" />
          </div>
        </div>
      </div>

      {/* ── Mobile subcategory strip ── */}
      <div className="lg:hidden bg-white border-b border-line px-4 py-2.5 flex gap-2 overflow-hidden">
        {[80, 64, 96, 72, 80, 60].map((w, i) => (
          <div
            key={i}
            className="h-8 rounded-full bg-bg-3 flex-shrink-0"
            style={{ width: w }}
          />
        ))}
      </div>

      {/* ── Main layout ── */}
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Desktop sidebar */}
          <aside className="hidden lg:flex flex-col gap-3 w-[240px] flex-shrink-0">
            {/* Subcategory list */}
            <div className="bg-white rounded-2xl border border-line p-4">
              <div className="w-16 h-3 rounded bg-bg-3 mb-4" />
              <div className="flex flex-col gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded bg-bg-3" />
                      <div
                        className="h-3 rounded bg-bg-3"
                        style={{ width: 60 + (i % 3) * 20 }}
                      />
                    </div>
                    <div className="w-8 h-3 rounded bg-bg-3" />
                  </div>
                ))}
              </div>
            </div>
            {/* Filter groups */}
            <div className="bg-white rounded-2xl border border-line p-4 flex flex-col gap-4">
              <div className="w-14 h-4 rounded bg-bg-3" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col gap-2.5">
                  <div className="w-24 h-3.5 rounded bg-bg-3" />
                  <div className="flex flex-col gap-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded bg-bg-3" />
                        <div
                          className="h-3 rounded bg-bg-3"
                          style={{ width: 50 + j * 12 }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Product area */}
          <main className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
              <div className="flex gap-2">
                {[80, 112, 112, 64, 80].map((w, i) => (
                  <div
                    key={i}
                    className="h-8 rounded-lg bg-bg-3"
                    style={{ width: w }}
                  />
                ))}
              </div>
              <div className="w-24 h-4 rounded bg-bg-3 hidden sm:block" />
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-bg-3 h-[320px]" />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
