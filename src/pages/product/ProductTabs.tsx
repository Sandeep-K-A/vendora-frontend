import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/types";

interface ProductTabsProps {
  product: Product;
}

const TABS = ["Overview", "Specifications", "Reviews"] as const;
type Tab = (typeof TABS)[number];

export default function ProductTabs({ product }: ProductTabsProps) {
  const [active, setActive] = useState<Tab>("Overview");

  return (
    <div className="border border-line rounded-2xl overflow-hidden">
      {/* Tab bar */}
      <div className="flex border-b border-line bg-bg">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative flex-1 py-3.5 text-[13.5px] font-medium transition-colors ${
              active === tab
                ? "text-forest font-semibold"
                : "text-ink-3 hover:text-ink"
            }`}
          >
            {tab}
            {active === tab && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-forest"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-5 lg:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* ── Overview ── */}
            {active === "Overview" && (
              <div className="flex flex-col gap-6">
                {product.description && (
                  <div>
                    <h3 className="font-head text-[14px] font-bold text-ink mb-2">
                      About this product
                    </h3>
                    <p className="text-[13.5px] text-ink-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}

                {product.highlights && product.highlights.length > 0 && (
                  <div>
                    <h3 className="font-head text-[14px] font-bold text-ink mb-3">
                      Key highlights
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {product.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[13.5px] text-ink-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-forest mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.inBox && product.inBox.length > 0 && (
                  <div>
                    <h3 className="font-head text-[14px] font-bold text-ink mb-3">
                      In the box
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {product.inBox.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2.5 text-[13.5px] text-ink-2"
                        >
                          <span className="text-forest text-[11px]">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* ── Specifications ── */}
            {active === "Specifications" && (
              <div>
                {product.specs && Object.keys(product.specs).length > 0 ? (
                  <table className="w-full">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value], i) => (
                        <tr
                          key={key}
                          className={i % 2 === 0 ? "bg-bg" : "bg-white"}
                        >
                          <td className="py-2.5 px-4 text-[13px] font-medium text-ink-3 w-[40%] rounded-l-lg">
                            {key}
                          </td>
                          <td className="py-2.5 px-4 text-[13.5px] text-ink rounded-r-lg">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-[13.5px] text-ink-3">
                    No specifications available.
                  </p>
                )}
              </div>
            )}

            {/* ── Reviews ── */}
            {active === "Reviews" && (
              <div className="flex flex-col gap-6">
                {/* Rating summary */}
                <div className="flex items-center gap-6 pb-5 border-b border-line">
                  <div className="flex flex-col items-center">
                    <span className="font-head text-[3rem] font-bold text-ink leading-none">
                      {product.rating}
                    </span>
                    <div className="flex text-amber-400 text-[16px] my-1">
                      {"★".repeat(product.rating)}
                      {"☆".repeat(5 - product.rating)}
                    </div>
                    <span className="text-[12px] text-ink-3">
                      {product.reviewCount}
                    </span>
                  </div>

                  {/* Star bars */}
                  <div className="flex-1 flex flex-col gap-1.5">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-[12px] text-ink-3 w-3">
                          {star}
                        </span>
                        <span className="text-amber-400 text-[11px]">★</span>
                        <div className="flex-1 h-1.5 bg-bg-3 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber-400 rounded-full"
                            style={{
                              width:
                                star === 5
                                  ? "60%"
                                  : star === 4
                                    ? "25%"
                                    : star === 3
                                      ? "10%"
                                      : star === 2
                                        ? "3%"
                                        : "2%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual reviews */}
                <div className="flex flex-col gap-5">
                  {product.reviews?.map((review) => (
                    <div
                      key={review.id}
                      className="flex flex-col gap-2 pb-5 border-b border-line last:border-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-forest-xxl border border-forest-xl flex items-center justify-center text-[11px] font-bold text-forest">
                            {review.initials}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[13px] font-semibold text-ink">
                                {review.author}
                              </span>
                              {review.verified && (
                                <span className="text-[10.5px] font-medium text-forest bg-forest-xxl px-2 py-0.5 rounded-full">
                                  Verified
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className="text-amber-400 text-[12px]">
                                {"★".repeat(review.rating)}
                                {"☆".repeat(5 - review.rating)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="text-[12px] text-ink-3">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-[13.5px] font-semibold text-ink">
                        {review.title}
                      </p>
                      <p className="text-[13px] text-ink-2 leading-relaxed">
                        {review.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
