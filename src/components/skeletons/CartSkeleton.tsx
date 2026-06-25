export default function CartSkeleton() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-6 animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="w-28 h-7 rounded-lg bg-bg-3 mb-2" />
          <div className="w-16 h-4 rounded bg-bg-3" />
        </div>
        <div className="w-20 h-4 rounded bg-bg-3" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart items */}
        <div className="flex-1 bg-white border border-line rounded-2xl px-5 py-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex gap-4 py-5 border-b border-line last:border-0"
            >
              <div className="w-24 h-24 rounded-xl bg-bg-3 flex-shrink-0" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="w-16 h-3 rounded bg-bg-3" />
                <div className="w-3/4 h-4 rounded bg-bg-3" />
                <div className="w-1/2 h-3 rounded bg-bg-3" />
                <div className="w-1/3 h-3 rounded bg-bg-3" />
                <div className="flex items-center justify-between mt-2">
                  <div className="w-24 h-8 rounded-xl bg-bg-3" />
                  <div className="w-20 h-6 rounded bg-bg-3" />
                  <div className="w-8 h-8 rounded-lg bg-bg-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="lg:w-[340px] flex-shrink-0">
          <div className="bg-white border border-line rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-line bg-bg">
              <div className="w-28 h-4 rounded bg-bg-3" />
            </div>
            <div className="px-5 py-4 flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="w-24 h-4 rounded bg-bg-3" />
                  <div className="w-16 h-4 rounded bg-bg-3" />
                </div>
              ))}
              <div className="border-t border-line pt-3 flex items-center justify-between">
                <div className="w-12 h-5 rounded bg-bg-3" />
                <div className="w-24 h-6 rounded bg-bg-3" />
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="w-full h-12 rounded-xl bg-bg-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
