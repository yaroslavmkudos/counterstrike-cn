"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

const alertVariants = cva(
  [
    "cs-font-ui text-xs p-3 cs-text-shadow",
    "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
    "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-[var(--cs-bg-secondary)] text-[var(--cs-text)]",
        info: "bg-[#1a2a3a] text-[var(--cs-team-ct)] border-t-[#2a4a6a] border-l-[#2a4a6a]",
        success: "bg-[#0a2a0a] text-[var(--cs-hud-green)] border-t-[#1a4a1a] border-l-[#1a4a1a]",
        warning: "bg-[#2a2a0a] text-[var(--cs-hud-amber)] border-t-[#4a4a1a] border-l-[#4a4a1a]",
        error: "bg-[#3a1a1a] text-[var(--cs-hud-red)] border-t-[#6a2a2a] border-l-[#6a2a2a]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant, className }))}
      {...props}
    >
      {title && (
        <div className="font-bold mb-1 text-sm">{title}</div>
      )}
      <div>{children}</div>
    </div>
  )
);
Alert.displayName = "Alert";

export { Alert, alertVariants };
