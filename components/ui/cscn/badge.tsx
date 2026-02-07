"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

const badgeVariants = cva(
  "cs-font-ui inline-flex items-center px-2 py-0.5 text-[10px] uppercase tracking-wider cs-text-shadow",
  {
    variants: {
      variant: {
        ct: "bg-[#1a2a3a] text-[var(--cs-team-ct)] border border-[#2a4a6a]",
        t: "bg-[#3a1a1a] text-[var(--cs-team-t)] border border-[#6a2a2a]",
        default:
          "bg-[var(--cs-bg-secondary)] text-[var(--cs-text)] border border-[var(--cs-border-dark)]",
        accent:
          "bg-[var(--cs-bg-secondary)] text-[var(--cs-accent)] border border-[var(--cs-accent-secondary)]",
        vac: "bg-[#0a2a0a] text-[var(--cs-hud-green)] border border-[#1a4a1a]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
