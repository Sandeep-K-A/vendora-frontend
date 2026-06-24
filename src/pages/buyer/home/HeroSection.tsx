import { HERO_DISPLAY } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer, slideUp } from "@/lib/motion";

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const display = HERO_DISPLAY[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % HERO_DISPLAY.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white border-b border-line">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_300px] gap-3 lg:gap-4">
          {/* ── Large panel — displayegory rotator ── */}
          <div className="relative overflow-hidden rounded-2xl min-h-[420px] md:min-h-[520px] lg:min-h-[560px]">
            {/* Ken Burns background image — AnimatePresence swaps on key change */}
            <AnimatePresence mode="sync">
              <motion.img
                key={`bg-${active}`}
                src={display.product.image}
                alt={display.label}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Gradient overlay */}
            <AnimatePresence mode="sync">
              <motion.div
                key={`overlay-${active}`}
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${active}`}
                className="relative z-10 h-full flex flex-col justify-between p-6 lg:p-8 min-h-[420px] md:min-h-[520px] lg:min-h-[560px]"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <div>
                  {/* Eyebrow */}
                  <motion.div variants={fadeUp}>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11.5px] font-semibold mb-4"
                      style={{
                        background: display.accentBg,
                        color: display.accent,
                      }}
                    >
                      <Sparkles size={11} strokeWidth={2} />
                      {display.label}
                    </div>
                  </motion.div>

                  {/* Headline */}
                  <motion.h2
                    variants={fadeUp}
                    className="font-head text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-4"
                  >
                    {display.tagline}
                    <br />
                    {display.tagline2}
                  </motion.h2>

                  {/* Product teaser */}
                  <motion.div
                    variants={fadeUp}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div
                      className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <img
                        src={display.product.image}
                        alt={display.product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-white/50 text-[11px] font-medium uppercase tracking-wider mb-0.5">
                        {display.product.brand}
                      </div>
                      <div className="text-white text-[13.5px] font-semibold leading-tight">
                        {display.product.name}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-white font-head font-bold text-[15px]">
                          {display.product.price}
                        </span>
                        <span className="text-white/40 text-[12px] line-through">
                          {display.product.oldPrice}
                        </span>
                        <span
                          className="text-[10.5px] font-bold px-1.5 py-0.5 rounded-full"
                          style={{
                            background: display.accentBg,
                            color: display.accent,
                          }}
                        >
                          {display.product.discount}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div>
                  {/* CTA */}
                  <motion.div variants={fadeUp}>
                    <Link
                      to={display.to}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13.5px] font-semibold transition-all duration-150 hover:gap-3"
                      style={{ background: display.accent, color: "#0A1F12" }}
                    >
                      {display.cta}
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </motion.div>

                  {/* Dots */}
                  <motion.div
                    variants={fadeUp}
                    className="flex items-center gap-1.5 mt-4"
                  >
                    {HERO_DISPLAY.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{
                          width: i === active ? "20px" : "6px",
                          background:
                            i === active
                              ? display.accent
                              : "rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right panels — hidden on mobile ── */}
          <div className="hidden md:flex flex-col gap-3">
            {/* New arrival */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`arrival-${active}`}
                className="flex-1 relative overflow-hidden rounded-2xl min-h-[200px] flex flex-col justify-between"
                variants={slideUp}
                initial="hidden"
                animate="show"
              >
                {/* Background image */}
                <img
                  src={display.newArrival.image}
                  alt={display.newArrival.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* Content */}
                <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 bg-forest text-white text-[10.5px] font-semibold px-2.5 py-1 rounded-full">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-forest-light inline-block"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      Just added
                    </div>
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      New arrival
                    </span>
                  </div>

                  {/* Product info — pinned to bottom */}
                  <div className="mt-auto">
                    <div className="text-[10.5px] text-white/50 font-medium uppercase tracking-wide mb-0.5">
                      {display.newArrival.brand}
                    </div>
                    <div className="text-[13px] font-semibold text-white leading-tight line-clamp-2 mb-1">
                      {display.newArrival.name}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-head font-bold text-[15px] text-white">
                        {display.newArrival.price}
                      </div>
                      <span className="text-[11px] text-white/60 truncate ml-2">
                        {display.newArrival.seller}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bestseller */}
            <AnimatePresence mode="wait">
              // After
              <motion.div
                key={`best-${active}`}
                className="flex-1 relative overflow-hidden rounded-2xl min-h-[200px] flex flex-col justify-between"
                variants={slideUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.05 }}
              >
                {/* Background image */}
                <img
                  src={display.bestseller.image}
                  alt={display.bestseller.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* Content */}
                <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 bg-gold text-white text-[10.5px] font-semibold px-2.5 py-1 rounded-full">
                      <Flame size={11} strokeWidth={2} />
                      Trending
                    </div>
                    <span
                      className="text-[11px] font-bold tracking-wide"
                      style={{ color: display.accent }}
                    >
                      {display.label}
                    </span>
                  </div>

                  {/* Product info — pinned to bottom */}
                  <div className="mt-auto">
                    <div className="text-[13px] font-semibold text-white leading-tight line-clamp-2 mb-1">
                      {display.bestseller.name}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-head font-bold text-[15px] text-white">
                        {display.bestseller.price}
                      </div>
                      <span className="text-[11px] font-semibold text-white/70">
                        {display.bestseller.orders.toLocaleString("en-IN")}+
                        orders
                      </span>
                    </div>
                    {/* Demand bar */}
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden mt-2">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: display.accent }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${display.bestseller.demand}%` }}
                        transition={{
                          duration: 0.7,
                          ease: "easeOut",
                          delay: 0.1,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
