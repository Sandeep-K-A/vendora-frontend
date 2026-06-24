import { MOCK_STORES } from "@/constants";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StoreCard from "@/components/common/StoreCard";

export default function ExploreStoresSection() {
  return (
    <section className="py-10 lg:py-14 bg-bg-2 border-b border-line">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-bold text-forest uppercase tracking-[0.08em] flex items-center gap-2 mb-1.5"
            >
              <span className="w-3.5 h-[2.5px] bg-forest-light rounded-full inline-block" />
              Verified sellers
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-head text-[1.5rem] lg:text-[1.75rem] font-bold text-ink tracking-[-0.025em]"
            >
              Know who you're buying from
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              to="/stores"
              className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold text-forest px-4 py-2 rounded-xl border-[1.5px] border-forest-xl bg-forest-xxl hover:bg-forest-xl transition-colors duration-150"
            >
              Browse all stores
              <ArrowRight size={13} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Store grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MOCK_STORES.map((store, i) => (
            <motion.div
              key={store.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
            >
              <StoreCard
                store={store}
                onClick={(id) => console.log("Store clicked:", id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile — view all link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-6 flex justify-center md:hidden"
        >
          <Link
            to="/stores"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-forest px-5 py-2.5 rounded-xl border-[1.5px] border-forest-xl bg-forest-xxl"
          >
            Browse all stores
            <ArrowRight size={13} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
