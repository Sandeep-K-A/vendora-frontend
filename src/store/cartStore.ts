import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartStore, CartItem, Product } from "@/types";

function makeCartItemId(
  productId: string,
  selectedVariants: Record<string, string>,
): string {
  const variantStr = Object.entries(selectedVariants)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}:${v}`)
    .join("|");
  return variantStr ? `${productId}__${variantStr}` : productId;
}

function getVariantPrice(
  product: Product,
  selectedVariants: Record<string, string>,
): number {
  for (const dim of product.variants ?? []) {
    const selected = dim.options.find(
      (o) => o.value === selectedVariants[dim.id],
    );
    if (selected?.price) {
      return parseInt(selected.price.replace(/[₹,]/g, ""));
    }
  }
  return parseInt(product.price.replace(/[₹,]/g, ""));
}

function computeTotals(items: CartItem[]) {
  return {
    totalItems: items.reduce((sum, i) => sum + i.quantity, 0),
    totalPrice: items.reduce(
      (sum, i) =>
        sum + getVariantPrice(i.product, i.selectedVariants) * i.quantity,
      0,
    ),
  };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (product, selectedVariants) => {
        const cartItemId = makeCartItemId(product.id, selectedVariants);
        const existing = get().items.find((i) => i.cartItemId === cartItemId);
        let items: CartItem[];

        if (existing) {
          items = get().items.map((item) =>
            item.cartItemId === cartItemId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        } else {
          items = [
            ...get().items,
            { product, selectedVariants, quantity: 1, cartItemId },
          ];
        }

        set({ items, ...computeTotals(items) });
      },

      removeItem: (cartItemId) => {
        const items = get().items.filter((i) => i.cartItemId !== cartItemId);
        set({ items, ...computeTotals(items) });
      },

      updateQuantity: (cartItemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(cartItemId);
          return;
        }
        const items = get().items.map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity } : item,
        );
        set({ items, ...computeTotals(items) });
      },

      clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
    }),
    { name: "vendora-cart" },
  ),
);
