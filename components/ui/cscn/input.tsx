"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "cs-font-ui h-9 w-full bg-[var(--cs-bg-control)] px-3 py-1 text-sm",
          "text-[var(--cs-text)] placeholder:text-[var(--cs-text-dim)]",
          "border-2 border-t-[var(--cs-border-dark)] border-l-[var(--cs-border-dark)]",
          "border-b-[var(--cs-border-light)] border-r-[var(--cs-border-light)]",
          "outline-none focus:border-t-[var(--cs-accent)] focus:border-l-[var(--cs-accent)]",
          "focus:border-b-[var(--cs-accent-secondary)] focus:border-r-[var(--cs-accent-secondary)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
