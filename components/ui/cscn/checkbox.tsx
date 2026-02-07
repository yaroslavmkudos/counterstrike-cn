"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const inputId = id || React.useId();

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer cs-font-ui text-xs text-[var(--cs-text)]",
          props.disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <span
          className={cn(
            "relative flex h-4 w-4 shrink-0 items-center justify-center",
            "bg-[var(--cs-bg-control)]",
            "border-2 border-t-[var(--cs-border-dark)] border-l-[var(--cs-border-dark)]",
            "border-b-[var(--cs-border-light)] border-r-[var(--cs-border-light)]",
          )}
        >
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className="peer absolute inset-0 cursor-pointer opacity-0"
            {...props}
          />
          <svg
            className="h-3 w-3 text-[var(--cs-accent)] opacity-0 peer-checked:opacity-100"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 6l3 3 5-5" />
          </svg>
        </span>
        {label && <span className="cs-text-shadow">{label}</span>}
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
