"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: React.ReactNode;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, label, value, change, changeType = "neutral", icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[var(--cs-bg)] p-4",
          "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
          "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="cs-font-ui text-[10px] text-[var(--cs-text-secondary)] uppercase tracking-wider">
            {label}
          </span>
          {icon && (
            <span className="text-[var(--cs-text-dim)]">{icon}</span>
          )}
        </div>
        <div className="cs-font-hud text-2xl text-[var(--cs-text-title)] cs-text-shadow tabular-nums">
          {value}
        </div>
        {change && (
          <div className="mt-1 flex items-center gap-1">
            <span
              className={cn(
                "cs-font-ui text-[10px]",
                changeType === "positive" && "text-[var(--cs-hud-green)]",
                changeType === "negative" && "text-[var(--cs-hud-red)]",
                changeType === "neutral" && "text-[var(--cs-text-dim)]"
              )}
            >
              {changeType === "positive" && "▲ "}
              {changeType === "negative" && "▼ "}
              {change}
            </span>
          </div>
        )}
      </div>
    );
  }
);
StatCard.displayName = "StatCard";

export { StatCard };
