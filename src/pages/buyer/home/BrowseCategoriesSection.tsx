import { BROWSE_CATEGORIES } from "@/constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export default function BrowseCategoriesSection() {
  return (
    <section className="py-10 lg:py-14 border-b border-line bg-bg">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          className="mb-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-bold text-forest uppercase tracking-[0.08em] flex items-center gap-2 mb-1.5"
          >
            <span className="w-3.5 h-[2.5px] bg-forest-light rounded-full inline-block" />
            Browse
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-head text-[1.5rem] lg:text-[1.75rem] font-bold text-ink tracking-[-0.025em]"
          >
            Shop by category
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {BROWSE_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/category/${cat.slug}`}
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer h-[200px] md:h-[220px] lg:h-[260px] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                {/* Background image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${cat.overlay} transition-opacity duration-200`}
                />

                {/* Content */}
                <div className="relative z-10 p-4">
                  <div className="text-[14px] lg:text-[15px] font-bold text-white mb-0.5 font-head">
                    {cat.name}
                  </div>
                  <div className="text-[11px] text-white/60 mb-3">
                    {cat.count}
                  </div>

                  {/* Explore link */}
                  <div
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold transition-all duration-150 group-hover:gap-2.5"
                    style={{ color: cat.accent }}
                  >
                    Explore
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
