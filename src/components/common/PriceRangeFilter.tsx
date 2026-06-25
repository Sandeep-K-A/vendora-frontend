const PRICE_MIN = 0;
const PRICE_MAX = 100000;

export default function PriceRangeFilter({
  searchParams,
  setSearchParams,
}: {
  min: number;
  max: number;
  searchParams: URLSearchParams;
  setSearchParams: (p: URLSearchParams) => void;
}) {
  const currentMin = Number(searchParams.get("minPrice") ?? PRICE_MIN);
  const currentMax = Number(searchParams.get("maxPrice") ?? PRICE_MAX);

  function setRange(minVal: number, maxVal: number) {
    const next = new URLSearchParams(searchParams);
    if (minVal === PRICE_MIN) next.delete("minPrice");
    else next.set("minPrice", String(minVal));
    if (maxVal === PRICE_MAX) next.delete("maxPrice");
    else next.set("maxPrice", String(maxVal));
    setSearchParams(next);
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Price display */}
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-ink">
          ₹{currentMin.toLocaleString("en-IN")}
        </span>
        <span className="text-[12px] text-ink-3">to</span>
        <span className="text-[13px] font-semibold text-ink">
          ₹{currentMax.toLocaleString("en-IN")}
        </span>
      </div>

      {/* Dual range slider */}
      <div className="relative h-5 flex items-center">
        {/* Track background */}
        <div className="absolute w-full h-1.5 rounded-full bg-bg-3" />

        {/* Active track */}
        <div
          className="absolute h-1.5 rounded-full bg-forest"
          style={{
            left: `${(currentMin / PRICE_MAX) * 100}%`,
            right: `${100 - (currentMax / PRICE_MAX) * 100}%`,
          }}
        />

        {/* Min thumb */}
        <input
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={500}
          value={currentMin}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), currentMax - 500);
            setRange(val, currentMax);
          }}
          className="absolute w-full h-1.5 appearance-none bg-transparent cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-forest
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer"
          style={{ zIndex: currentMin > PRICE_MAX - 1000 ? 5 : 3 }}
        />

        {/* Max thumb */}
        <input
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={500}
          value={currentMax}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), currentMin + 500);
            setRange(currentMin, val);
          }}
          className="absolute w-full h-1.5 appearance-none bg-transparent cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-forest
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer"
          style={{ zIndex: 4 }}
        />
      </div>

      {/* Clear price button — only shows when price is filtered */}
      {(currentMin !== PRICE_MIN || currentMax !== PRICE_MAX) && (
        <button
          onClick={() => setRange(PRICE_MIN, PRICE_MAX)}
          className="text-[12px] font-medium text-forest hover:underline text-left"
        >
          Clear price range
        </button>
      )}
    </div>
  );
}
