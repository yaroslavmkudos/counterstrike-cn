"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
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
        <span className="relative inline-flex h-5 w-9 shrink-0">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className="peer absolute inset-0 cursor-pointer opacity-0"
            {...props}
          />
          <span
            className={cn(
              "absolute inset-0 bg-[var(--cs-bg-control)]",
              "border-2 border-t-[var(--cs-border-dark)] border-l-[var(--cs-border-dark)]",
              "border-b-[var(--cs-border-light)] border-r-[var(--cs-border-light)]",
              "peer-checked:bg-[var(--cs-bg-selection)]",
            )}
          />
          <span
            className={cn(
              "absolute top-[3px] left-[3px] h-3 w-3 bg-[var(--cs-slider)]",
              "transition-transform duration-100",
              "peer-checked:translate-x-[14px] peer-checked:bg-[var(--cs-accent)]",
            )}
          />
        </span>
        {label && <span className="cs-text-shadow">{label}</span>}
      </label>
    );
  }
);
Toggle.displayName = "Toggle";

export { Toggle };
