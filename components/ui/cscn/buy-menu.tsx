"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import "./styles/cstrike.css";

interface BuyMenuItem {
  key: string;
  name: string;
  price: number;
  team?: "ct" | "t" | "both";
}

interface BuyMenuCategory {
  key: string;
  label: string;
  items: BuyMenuItem[];
}

interface BuyMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: BuyMenuCategory[];
  money?: number;
  onBuy?: (item: BuyMenuItem) => void;
  team?: "ct" | "t";
}

const DEFAULT_CATEGORIES: BuyMenuCategory[] = [
  {
    key: "1",
    label: "Pistols",
    items: [
      { key: "1", name: "USP", price: 500, team: "ct" },
      { key: "2", name: "Glock-18", price: 400, team: "t" },
      { key: "3", name: "Desert Eagle", price: 650, team: "both" },
      { key: "4", name: "P228", price: 600, team: "both" },
      { key: "5", name: "Dual Elites", price: 800, team: "t" },
      { key: "6", name: "Five-SeveN", price: 750, team: "ct" },
    ],
  },
  {
    key: "2",
    label: "Shotguns",
    items: [
      { key: "1", name: "M3 Super 90", price: 1700, team: "both" },
      { key: "2", name: "XM1014", price: 3000, team: "both" },
    ],
  },
  {
    key: "3",
    label: "SMGs",
    items: [
      { key: "1", name: "MP5 Navy", price: 1500, team: "both" },
      { key: "2", name: "TMP", price: 1250, team: "ct" },
      { key: "3", name: "P90", price: 2350, team: "both" },
      { key: "4", name: "MAC-10", price: 1400, team: "t" },
      { key: "5", name: "UMP-45", price: 1700, team: "both" },
    ],
  },
  {
    key: "4",
    label: "Rifles",
    items: [
      { key: "1", name: "AK-47", price: 2500, team: "t" },
      { key: "2", name: "SG 552", price: 3500, team: "t" },
      { key: "3", name: "M4A1", price: 3100, team: "ct" },
      { key: "4", name: "AUG", price: 3500, team: "ct" },
      { key: "5", name: "Scout", price: 2750, team: "both" },
      { key: "6", name: "AWP", price: 4750, team: "both" },
      { key: "7", name: "G3SG1", price: 5000, team: "t" },
      { key: "8", name: "SG 550", price: 4200, team: "ct" },
    ],
  },
  {
    key: "5",
    label: "Machine Guns",
    items: [
      { key: "1", name: "M249", price: 5750, team: "both" },
    ],
  },
  {
    key: "8",
    label: "Equipment",
    items: [
      { key: "1", name: "Kevlar Vest", price: 650, team: "both" },
      { key: "2", name: "Kevlar + Helmet", price: 1000, team: "both" },
      { key: "3", name: "Flashbang", price: 200, team: "both" },
      { key: "4", name: "HE Grenade", price: 300, team: "both" },
      { key: "5", name: "Smoke Grenade", price: 300, team: "both" },
      { key: "6", name: "Defuse Kit", price: 200, team: "ct" },
      { key: "7", name: "Night Vision", price: 1250, team: "both" },
    ],
  },
];

const BuyMenu = React.forwardRef<HTMLDivElement, BuyMenuProps>(
  (
    {
      className,
      categories = DEFAULT_CATEGORIES,
      money = 800,
      onBuy,
      team = "ct",
      ...props
    },
    ref
  ) => {
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

    const currentCategory = categories.find((c) => c.key === selectedCategory);
    const filteredItems = currentCategory?.items.filter(
      (item) => item.team === "both" || item.team === team
    );

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-lg bg-[var(--cs-bg)]/95 backdrop-blur-sm",
          "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
          "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[var(--cs-bg-secondary)] border-b-2 border-b-[var(--cs-border-dark)]">
          <span className="cs-font-ui text-sm text-[var(--cs-text-title)] cs-text-shadow">
            Buy Menu
          </span>
          <span className="cs-font-hud text-sm cs-hud-glow-green">
            ${money.toLocaleString()}
          </span>
        </div>

        <div className="flex min-h-[300px]">
          {/* Categories */}
          <div className="w-40 border-r-2 border-r-[var(--cs-border-dark)] bg-[var(--cs-bg-secondary)] p-2">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant="menu"
                size="sm"
                className={cn(
                  "w-full mb-0.5 px-2",
                  selectedCategory === cat.key && "text-white bg-[var(--cs-bg-selection)]"
                )}
                onClick={() => setSelectedCategory(cat.key)}
              >
                <span className="text-[var(--cs-text-dim)] mr-2 text-[10px]">
                  {cat.key}.
                </span>
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Items */}
          <div className="flex-1 p-2">
            {filteredItems ? (
              filteredItems.map((item) => {
                const canAfford = money >= item.price;
                return (
                  <Button
                    key={item.key}
                    variant="buy"
                    size="sm"
                    className={cn(
                      "w-full mb-1 justify-between px-3",
                      !canAfford && "opacity-40"
                    )}
                    disabled={!canAfford}
                    onClick={() => onBuy?.(item)}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[var(--cs-text-dim)] text-[10px]">
                        {item.key}.
                      </span>
                      <span>{item.name}</span>
                    </span>
                    <span
                      className={cn(
                        "text-[10px]",
                        canAfford
                          ? "text-[var(--cs-hud-green)]"
                          : "text-[var(--cs-hud-red)]"
                      )}
                    >
                      ${item.price}
                    </span>
                  </Button>
                );
              })
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="cs-font-ui text-xs text-[var(--cs-text-dim)] cs-text-shadow">
                  Select a category
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-[var(--cs-bg-secondary)] border-t-2 border-t-[var(--cs-border-dark)]">
          <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
            Press [B] to open • Number keys to select
          </span>
        </div>
      </div>
    );
  }
);
BuyMenu.displayName = "BuyMenu";

export { BuyMenu, DEFAULT_CATEGORIES, type BuyMenuCategory, type BuyMenuItem, type BuyMenuProps };
