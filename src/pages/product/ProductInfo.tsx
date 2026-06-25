import { useState, useMemo } from "react";
import { Check, ShoppingCart, Zap } from "lucide-react";
import type { Product, VariantDimension } from "@/types";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";

interface ProductInfoProps {
  product: Product;
  onImageChange?: (image: string) => void;
}

export default function ProductInfo({
  product,
  onImageChange,
}: ProductInfoProps) {
  // Initialize selected variants — first in-stock option per dimension
  const initialVariants = useMemo(() => {
    const init: Record<string, string> = {};
    product.variants?.forEach((dim) => {
      const first = dim.options.find((o) => o.inStock);
      if (first) init[dim.id] = first.value;
    });
    return init;
  }, [product]);

  const [selectedVariants, setSelectedVariants] =
    useState<Record<string, string>>(initialVariants);

  // Derived price — from selected variant or product base price
  const derivedPrice = useMemo(() => {
    for (const dim of product.variants ?? []) {
      const selected = dim.options.find(
        (o) => o.value === selectedVariants[dim.id],
      );
      if (selected?.price)
        return { price: selected.price, oldPrice: selected.oldPrice };
    }
    return { price: product.price, oldPrice: product.oldPrice };
  }, [selectedVariants, product]);

  const addItem = useCartStore((state) => state.addItem);
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addItem(product, selectedVariants);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleBuyNow() {
    addItem(product, selectedVariants);
    navigate("/cart");
  }

  function selectVariant(dimId: string, value: string, dim: VariantDimension) {
    setSelectedVariants((prev) => ({ ...prev, [dimId]: value }));
    // If this dimension has images (color), update gallery
    const opt = dim.options.find((o) => o.value === value);
    if (opt?.image) onImageChange?.(opt.image);
  }

  // Compute discount
  const discount = useMemo(() => {
    if (!derivedPrice.oldPrice) return null;
    const current = parseInt(derivedPrice.price.replace(/[₹,]/g, ""));
    const old = parseInt(derivedPrice.oldPrice.replace(/[₹,]/g, ""));
    return Math.round(((old - current) / old) * 100);
  }, [derivedPrice]);

  const savings = useMemo(() => {
    if (!derivedPrice.oldPrice) return null;
    const current = parseInt(derivedPrice.price.replace(/[₹,]/g, ""));
    const old = parseInt(derivedPrice.oldPrice.replace(/[₹,]/g, ""));
    return (old - current).toLocaleString("en-IN");
  }, [derivedPrice]);

  return (
    <div className="flex flex-col gap-5">
      {/* Brand + name */}
      <div>
        <p className="text-[12px] font-bold text-forest uppercase tracking-[0.07em] mb-1.5">
          {product.brand}
        </p>
        <h1 className="font-head text-[1.35rem] lg:text-[1.5rem] font-bold text-ink leading-tight tracking-[-0.02em]">
          {product.name}
        </h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-forest px-2.5 py-1 rounded-lg">
          <span className="text-white text-[13px] font-bold">
            {product.rating}
          </span>
          <span className="text-white text-[12px]">★</span>
        </div>
        <span className="text-[13px] text-ink-3">
          {product.reviewCount} reviews
        </span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="font-head text-[1.75rem] font-bold text-ink">
          {derivedPrice.price}
        </span>
        {derivedPrice.oldPrice && (
          <span className="text-[15px] text-ink-3 line-through">
            {derivedPrice.oldPrice}
          </span>
        )}
        {discount && (
          <span className="text-[13px] font-bold text-forest bg-forest-xxl px-2.5 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}
      </div>
      {savings && (
        <p className="text-[13px] text-forest font-medium -mt-3">
          You save ₹{savings}
        </p>
      )}

      {/* Variants */}
      {product.variants?.map((dim) => (
        <div key={dim.id}>
          <p className="text-[13px] font-semibold text-ink mb-2.5">
            {dim.label}
            {selectedVariants[dim.id] && (
              <span className="font-normal text-ink-2 ml-1.5">
                —{" "}
                {
                  dim.options.find((o) => o.value === selectedVariants[dim.id])
                    ?.label
                }
              </span>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            {dim.options.map((opt) => {
              const isSelected = selectedVariants[dim.id] === opt.value;
              const isColor = dim.id === "color";

              if (isColor) {
                return (
                  <button
                    key={opt.value}
                    onClick={() =>
                      opt.inStock && selectVariant(dim.id, opt.value, dim)
                    }
                    disabled={!opt.inStock}
                    className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                      isSelected
                        ? "border-forest scale-110"
                        : "border-transparent hover:border-line"
                    } ${!opt.inStock ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                    style={{ background: opt.value }}
                    title={opt.label}
                  />
                );
              }

              return (
                <button
                  key={opt.value}
                  onClick={() =>
                    opt.inStock && selectVariant(dim.id, opt.value, dim)
                  }
                  disabled={!opt.inStock}
                  className={`px-3.5 py-2 rounded-xl text-[13px] font-medium border-[1.5px] transition-all relative ${
                    isSelected
                      ? "border-forest bg-forest-xxl text-forest font-semibold"
                      : "border-line text-ink-2 hover:border-forest-light"
                  } ${!opt.inStock ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {opt.label}
                  {!opt.inStock && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-full h-[1.5px] bg-ink-3 rotate-[-30deg] absolute" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* CTA buttons */}
      <div className="flex gap-3 mt-1">
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-forest text-white font-semibold text-[14px] hover:bg-forest-2 transition-colors"
        >
          {added ? (
            <>
              <Check size={17} strokeWidth={2.5} /> Added to cart
            </>
          ) : (
            <>
              <ShoppingCart size={17} strokeWidth={2} /> Add to cart
            </>
          )}
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold text-white font-semibold text-[14px] hover:opacity-90 transition-opacity"
        >
          <Zap size={17} strokeWidth={2} />
          Buy now
        </button>
      </div>
    </div>
  );
}
