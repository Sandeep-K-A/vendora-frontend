import { MOCK_PRODUCTS } from "@/constants/products/mockProductDetails";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import ProductCard from "@/components/common/ProductCard";

export default function TrendingProductsSection() {
  return (
    <section className="py-10 lg:py-14 bg-white border-b border-line">
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
            Trending this week
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-head text-[1.5rem] lg:text-[1.75rem] font-bold text-ink tracking-[-0.025em]"
          >
            What everyone's buying
          </motion.h2>
        </motion.div>

        {/* Product grid — 5 columns desktop, 3 tablet, 2 mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {MOCK_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <ProductCard
                product={product}
                size="sm"
                onAddToCart={(id) => console.log("Add to cart:", id)}
                onCompare={(id) => console.log("Compare:", id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
