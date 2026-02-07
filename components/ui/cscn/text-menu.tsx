"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

interface TextMenuItem {
  key: string;
  label: string;
  disabled?: boolean;
}

interface TextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  items: TextMenuItem[];
  onItemSelect?: (item: TextMenuItem) => void;
}

const TextMenu = React.forwardRef<HTMLDivElement, TextMenuProps>(
  ({ className, title, items, onItemSelect, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-block bg-black/70 backdrop-blur-sm p-4 min-w-[280px]",
          className
        )}
        {...props}
      >
        {title && (
          <div className="mb-3 cs-hud-glow cs-font-ui text-sm cs-text-shadow">
            {title}
          </div>
        )}
        <div className="flex flex-col gap-0.5">
          {items.map((item) => (
            <button
              key={item.key}
              className={cn(
                "flex items-center gap-2 px-1 py-0.5 text-left transition-none",
                "cs-font-ui text-sm",
                item.disabled
                  ? "text-[var(--cs-text-dim)] cursor-not-allowed"
                  : "text-[var(--cs-hud-amber)] hover:text-white cursor-pointer"
              )}
              disabled={item.disabled}
              onClick={() => !item.disabled && onItemSelect?.(item)}
            >
              <span className="w-4 text-right text-xs opacity-70">
                {item.key}.
              </span>
              <span className="cs-text-shadow">{item.label}</span>
            </button>
          ))}
        </div>
        <div className="mt-3 text-[var(--cs-hud-amber)] cs-font-ui text-xs opacity-60">
          0. Exit
        </div>
      </div>
    );
  }
);
TextMenu.displayName = "TextMenu";

export { TextMenu, type TextMenuItem, type TextMenuProps };
