import { useState } from "react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  size?: "sm" | "md";
  onAddToCart: (id: string) => void;
  onCompare: (id: string) => void;
}

function computeSaving(price: string, oldPrice: string): string {
  const clean = (s: string) => parseInt(s.replace(/[₹,]/g, ""), 10);
  const saving = clean(oldPrice) - clean(price);
  if (isNaN(saving) || saving <= 0) return "";
  return `Save ₹${saving.toLocaleString("en-IN")}`;
}

function isUrl(image: string): boolean {
  return image.startsWith("http") || image.startsWith("/");
}

export default function ProductCard({
  product,
  size = "md",
  onAddToCart,
  onCompare,
}: ProductCardProps) {
  const imageHeight = size === "sm" ? "h-36" : "h-48";

  return (
    <div className="h-full bg-white border border-line rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-card hover:border-line-2">
      <div
        className={`relative flex items-center justify-center ${imageHeight} overflow-hidden`}
      >
        {isUrl(product.image) ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-5xl leading-none flex items-center justify-center w-full h-full bg-bg-2">
            {product.image}
          </span>
        )}
        {product.discount && (
          <span className="absolute top-2.5 left-2.5 bg-gold text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-full">
            {product.discount}
          </span>
        )}
      </div>
      <div className="flex flex-col p-3.5">
        {/* Brand */}
        <div className="text-[10.5px] font-semibold text-ink-3 uppercase tracking-[0.05em] mb-0.5">
          {product.brand}
        </div>
        {/* Name */}
        <div className="text-[13.5px] font-semibold text-ink leading-snug mb-1.5 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </div>
        {/* Rating & ReviewCount */}
        <div className="flex items-center gap-1 mb-2">
          <span className="text-[11.5px] text-amber-400">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
          </span>
          <span className="text-[11.5px] font-semibold text-ink-2">
            {product.rating}
          </span>
          <span className="text-[11px] text-ink-3">{product.reviewCount}</span>
        </div>
        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-2.5">
          <span className="font-head text-[1.05em] font-bold text-ink">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-[11.5px] text-ink-3 line-through">
              {product.oldPrice}
            </span>
          )}
          {product.oldPrice && product.price && (
            <span className="text-[11px] font-semibold text-forest">
              {computeSaving(product.price, product.oldPrice)}
            </span>
          )}
        </div>
        {/* Actions */}
        <div className="flex gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(product.id);
            }}
            className="flex-1 py-2 rounded-[10px] bg-forest text-white text-[12.5px] font-semibold transition-colors duration-150 hover:bg-forest-2"
          >
            Add to cart
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCompare?.(product.id);
            }}
            aria-label="Add to compare"
            className="px-2.5 py-2 rounded-[10px] border-[1.5px] border-line text-ink-3 text-[13px] transition-all duration-150 hover:border-line-2 hover:text-ink"
          >
            ⚖️
          </button>
        </div>
        {/* Seller footer */}
        {product.sellerName && (
          <div className="mt-2.5 pt-2.5 border-t border-line flex items-center gap-1.5">
            <span className="text-[10.5px] text-ink-3">by</span>
            <span className="text-[10.5px] font-medium text-ink-2 truncate">
              {product.sellerName}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
