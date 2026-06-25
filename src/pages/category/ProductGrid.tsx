import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import ProductCard from "@/components/common/ProductCard";
import type { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  console.log("productGrid recieved:", products);
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-5xl mb-4 opacity-20">🔍</div>
        <h3 className="font-head text-[1.1rem] font-bold text-ink mb-2">
          No products found
        </h3>
        <p className="text-[13.5px] text-ink-3 max-w-xs leading-relaxed">
          Try adjusting your filters or browse a different subcategory.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: i * 0.05 }}
          className="h-full"
        >
          <ProductCard
            product={product}
            size="md"
            onAddToCart={(id) => console.log("Add to cart:", id)}
            onCompare={(id) => console.log("Compare:", id)}
          />
        </motion.div>
      ))}
    </div>
  );
}
