"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  variant?: "default" | "loading" | "download";
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      value,
      max = 100,
      label,
      showPercentage = true,
      variant = "default",
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {(label || showPercentage) && (
          <div className="flex items-center justify-between mb-1">
            {label && (
              <span className="cs-font-ui text-xs text-[var(--cs-text)] cs-text-shadow">
                {label}
              </span>
            )}
            {showPercentage && (
              <span className="cs-font-ui text-xs text-[var(--cs-text-secondary)]">
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        )}
        <div
          className={cn(
            "h-5 w-full bg-[var(--cs-slider-bg)]",
            "border-2 border-t-[var(--cs-border-dark)] border-l-[var(--cs-border-dark)]",
            "border-b-[var(--cs-border-light)] border-r-[var(--cs-border-light)]",
            "overflow-hidden"
          )}
        >
          <div
            className={cn(
              "h-full transition-all duration-300",
              variant === "loading" && "animate-pulse",
              variant === "download"
                ? "bg-[var(--cs-hud-green)]"
                : "bg-[var(--cs-accent)]"
            )}
            style={{
              width: `${percentage}%`,
              backgroundImage:
                variant === "loading"
                  ? "repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.2) 4px, rgba(0,0,0,0.2) 8px)"
                  : undefined,
            }}
          />
        </div>
      </div>
    );
  }
);
ProgressBar.displayName = "ProgressBar";

export { ProgressBar, type ProgressBarProps };
