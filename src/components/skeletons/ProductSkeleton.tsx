export default function ProductSkeleton() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-6 animate-pulse">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        {[40, 16, 72, 16, 56, 16, 120].map((w, i) => (
          <div key={i} className="h-3 rounded bg-bg-3" style={{ width: w }} />
        ))}
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 mb-8">
        {/* Left — image gallery */}
        <div className="flex flex-col gap-3">
          <div className="aspect-square rounded-2xl bg-bg-3" />
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-xl bg-bg-3 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Right — product info */}
        <div className="flex flex-col gap-5">
          {/* Brand */}
          <div className="w-16 h-3 rounded bg-bg-3" />
          {/* Name */}
          <div className="flex flex-col gap-2">
            <div className="w-full h-6 rounded-lg bg-bg-3" />
            <div className="w-4/5 h-6 rounded-lg bg-bg-3" />
          </div>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-7 rounded-lg bg-bg-3" />
            <div className="w-24 h-4 rounded bg-bg-3" />
          </div>
          {/* Price */}
          <div className="flex items-baseline gap-3">
            <div className="w-28 h-9 rounded-lg bg-bg-3" />
            <div className="w-20 h-5 rounded bg-bg-3" />
            <div className="w-16 h-7 rounded-full bg-bg-3" />
          </div>
          {/* Variants */}
          {[1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-2.5">
              <div className="w-20 h-4 rounded bg-bg-3" />
              <div className="flex gap-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="w-20 h-9 rounded-xl bg-bg-3" />
                ))}
              </div>
            </div>
          ))}
          {/* CTA buttons */}
          <div className="flex gap-3 mt-1">
            <div className="flex-1 h-12 rounded-xl bg-bg-3" />
            <div className="flex-1 h-12 rounded-xl bg-bg-3" />
          </div>
          {/* Seller card */}
          <div className="h-28 rounded-2xl bg-bg-3" />
        </div>
      </div>

      {/* Tabs */}
      <div className="border border-line rounded-2xl overflow-hidden">
        <div className="flex border-b border-line bg-bg">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 py-3.5 flex justify-center">
              <div className="w-20 h-4 rounded bg-bg-3" />
            </div>
          ))}
        </div>
        <div className="p-6 flex flex-col gap-4">
          <div className="w-32 h-5 rounded bg-bg-3" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full h-4 rounded bg-bg-3" />
          ))}
          <div className="w-3/4 h-4 rounded bg-bg-3" />
        </div>
      </div>
    </div>
  );
}
