import { Link } from "react-router-dom";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import type { Product } from "@/types";

interface SellerCardProps {
  product: Product;
}

export default function SellerCard({ product }: SellerCardProps) {
  if (!product.sellerName) return null;

  return (
    <div className="border border-line rounded-2xl p-4 flex flex-col gap-4">
      {/* Seller info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-forest-xxl border border-forest-xl flex items-center justify-center text-[13px] font-bold text-forest flex-shrink-0">
            {product.sellerName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[13.5px] font-semibold text-ink">
                {product.sellerName}
              </span>
              <ShieldCheck
                size={13}
                className="text-forest"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>
        <Link
          to="/stores"
          className="text-[12.5px] font-medium text-forest hover:underline"
        >
          View store
        </Link>
      </div>

      {/* Delivery info */}
      <div className="flex flex-col gap-2.5 pt-3 border-t border-line">
        <div className="flex items-center gap-2.5 text-[13px] text-ink-2">
          <Truck
            size={15}
            strokeWidth={2}
            className="text-forest flex-shrink-0"
          />
          <span>
            Free delivery by <strong className="text-ink">Tomorrow</strong>
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-[13px] text-ink-2">
          <RotateCcw
            size={15}
            strokeWidth={2}
            className="text-forest flex-shrink-0"
          />
          <span>7-day easy returns</span>
        </div>
        <div className="flex items-center gap-2.5 text-[13px] text-ink-2">
          <ShieldCheck
            size={15}
            strokeWidth={2}
            className="text-forest flex-shrink-0"
          />
          <span>Vendora verified seller</span>
        </div>
      </div>
    </div>
  );
}
