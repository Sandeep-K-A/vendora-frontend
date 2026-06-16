interface HowitWorksPreviewProps {
  activeStep: number;
}

export default function HowItWorksPreview({
  activeStep,
}: HowitWorksPreviewProps) {
  return (
    <div className="hidden lg:block">
      <div className="bg-white border border-line rounded-2xl overflow-hidden shadow-sm">
        {/* Fake browser chrome */}
        <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-line bg-bg-2">
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#FF6058]"
            aria-hidden="true"
          />
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"
            aria-hidden="true"
          />
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#27C940]"
            aria-hidden="true"
          />
        </div>

        {/* Preview content — swaps per step */}
        <div className="p-5 min-h-[260px]">
          {activeStep === 0 && (
            <div>
              <div className="flex items-center gap-2 bg-forest-xl/40 border border-forest-light/30 rounded-lg px-3 py-2.5 mb-3">
                <span className="text-forest text-sm" aria-hidden="true">
                  ✦
                </span>
                <span className="text-ink-2 text-sm">
                  best earphones under ₹2000 for gym
                </span>
                <span className="ml-auto bg-forest text-white text-xs font-medium px-2.5 py-1 rounded-md">
                  Search
                </span>
              </div>
              <p className="text-forest text-xs font-medium mb-2.5">
                ✓ AI found 4 matches · ranked by relevance
              </p>

              <div className="flex flex-col gap-2">
                {/* first item */}
                <div className="flex items-center gap-3 bg-bg-2 border border-line rounded-lg p-2.5">
                  <span className="text-xl">🎧</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-ink">
                      boAt Rockerz 255 Pro+
                    </p>
                    <p className="text-ink-3 text-xs">
                      30hr · IPX5 · Bluetooth 5.0
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-ink">₹1,299</p>
                    <p className="text-vendora-green text-xs font-medium">
                      95% match
                    </p>
                  </div>
                </div>
                {/* second item */}
                <div className="flex items-center gap-3 bg-bg-2 border border-line rounded-lg p-2.5">
                  <span className="text-xl">🎵</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-ink">
                      JBL Endurance Run 2
                    </p>
                    <p className="text-ink-3 text-xs">
                      Wired · IP55 · 1-button mic
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-ink">₹899</p>
                    <p className="text-gold text-xs font-medium">81% match</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-forest-xl/30 border border-forest-light/30 rounded-lg p-3">
                  <p className="text-forest text-xs font-semibold mb-1.5">
                    📱 iQOO Z9 5G
                  </p>
                  <p className="text-ink-2 text-xs leading-relaxed">
                    Battery:{" "}
                    <span className="text-vendora-green font-medium">
                      6000mAh ✓
                    </span>
                    <br />
                    Price: <span className="text-ink font-medium">₹14,999</span>
                  </p>
                </div>
                <div className="bg-bg-2 border border-line rounded-lg p-3">
                  <p className="text-ink-2 text-xs font-semibold mb-1.5">
                    📱 Redmi Note 13
                  </p>
                  <p className="text-ink-2 text-xs leading-relaxed">
                    Battery: 5100mAh
                    <br />
                    Price: ₹17,999
                  </p>
                </div>
              </div>
              <div className="bg-forest-xl/30 border border-forest-light/30 rounded-lg p-2.5 text-xs text-ink-2 leading-relaxed">
                ✦{" "}
                <span className="text-forest font-medium">
                  AI recommendation:
                </span>{" "}
                For battery life, iQOO Z9 wins.
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="flex flex-col gap-2.5">
              {/* first store */}
              <div className="flex items-center gap-3 bg-bg-2 border border-line rounded-lg p-2.5">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-forest-xl/40 text-lg flex-shrink-0">
                  🏪
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink">TechZone Store</p>
                  <p className="text-ink-3 text-xs">
                    Kochi · ★ 4.8 · 23 products
                  </p>
                </div>
                <span className="bg-forest-xl/40 text-forest text-xs font-semibold px-2 py-1 rounded-md">
                  Verified ✓
                </span>
              </div>
              {/* second store */}
              <div className="flex items-center gap-3 bg-bg-2 border border-line rounded-lg p-2.5">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gold/15 text-lg flex-shrink-0">
                  📱
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink">
                    MobileHub Kerala
                  </p>
                  <p className="text-ink-3 text-xs">
                    Ernakulam · ★ 4.6 · 17 products
                  </p>
                </div>
                <span className="bg-forest-xl/40 text-forest text-xs font-semibold px-2 py-1 rounded-md">
                  Verified ✓
                </span>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="flex flex-col gap-2.5">
              {/* cart item 1 */}
              <div className="flex items-center gap-3 bg-bg-2 border border-line rounded-lg p-2.5">
                <span className="text-lg">📱</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink">iQOO Z9 5G</p>
                  <p className="text-ink-3 text-xs">Qty: 1</p>
                </div>
                <p className="text-sm font-semibold text-ink">₹14,999</p>
              </div>
              {/* cart item 2 */}
              <div className="flex items-center gap-3 bg-bg-2 border border-line rounded-lg p-2.5">
                <span className="text-lg">🎧</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink">
                    boAt Rockerz 255
                  </p>
                  <p className="text-ink-3 text-xs">Qty: 1</p>
                </div>
                <p className="text-sm font-semibold text-ink">₹1,299</p>
              </div>
              <div className="flex items-center justify-between pt-2.5 border-t border-line">
                <span className="text-sm text-ink-2">Order total</span>
                <span className="font-head text-lg font-bold text-gold">
                  ₹16,298
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
