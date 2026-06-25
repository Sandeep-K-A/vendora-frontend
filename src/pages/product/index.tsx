import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, ShoppingCart, Zap } from "lucide-react";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import SellerCard from "./SellerCard";
import ProductTabs from "./ProductTabs";
import { MOCK_PRODUCT_DETAIL } from "@/constants/products/mockProductDetails";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCT_DETAIL[id ?? ""];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-24 flex flex-col items-center gap-4">
        <div className="text-5xl opacity-20">📦</div>
        <h2 className="font-head text-[1.25rem] font-bold text-ink">
          Product not found
        </h2>
        <Link
          to="/home"
          className="text-[13.5px] text-forest font-medium hover:underline"
        >
          Back to home
        </Link>
      </div>
    );
  }

  // Resolve images — if color variant selected use its image as first
  const resolvedImages = (() => {
    const base = product.images ?? [product.image];
    if (!activeImage) return base;
    return [activeImage, ...base.filter((img) => img !== activeImage)];
  })();

  return (
    <>
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[12.5px] text-ink-3 mb-6">
          <Link to="/home" className="hover:text-forest transition-colors">
            Home
          </Link>
          <ChevronRight size={12} strokeWidth={2} />
          <Link
            to={`/category/${product.category}`}
            className="hover:text-forest transition-colors capitalize"
          >
            {product.category.replace("-", " & ")}
          </Link>
          {product.subcategory && (
            <>
              <ChevronRight size={12} strokeWidth={2} />
              <Link
                to={`/category/${product.category}?sub=${product.subcategory}`}
                className="hover:text-forest transition-colors capitalize"
              >
                {product.subcategory.replace(/-/g, " ")}
              </Link>
            </>
          )}
          <ChevronRight size={12} strokeWidth={2} />
          <span className="text-ink truncate max-w-[200px]">
            {product.brand}
          </span>
        </div>

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 mb-8">
          {/* Left — image gallery */}
          <ImageGallery images={resolvedImages} productName={product.name} />

          {/* Right — product info + seller */}
          <div className="flex flex-col gap-5">
            <ProductInfo
              product={product}
              onImageChange={(img) => setActiveImage(img)}
            />
            <SellerCard product={product} />
          </div>
        </div>

        {/* Tabs — full width below */}
        <ProductTabs product={product} />
      </div>
      {/* Bottom padding on mobile*/}
      <div className="lg:hidden h-20" />
    </>
  );
}
