"use client";

import { BuyMenu, DEFAULT_CATEGORIES } from "@/components/ui/cscn/buy-menu";

export function BuyMenuPreview() {
  return (
    <BuyMenu
      categories={DEFAULT_CATEGORIES}
      money={3500}
      team="ct"
    />
  );
}
