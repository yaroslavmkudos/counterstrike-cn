"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "cs-font-ui w-full min-h-[80px] bg-[var(--cs-bg-control)] px-3 py-2 text-sm",
          "text-[var(--cs-text)] placeholder:text-[var(--cs-text-dim)]",
          "border-2 border-t-[var(--cs-border-dark)] border-l-[var(--cs-border-dark)]",
          "border-b-[var(--cs-border-light)] border-r-[var(--cs-border-light)]",
          "outline-none resize-y",
          "focus:border-t-[var(--cs-accent)] focus:border-l-[var(--cs-accent)]",
          "focus:border-b-[var(--cs-accent-secondary)] focus:border-r-[var(--cs-accent-secondary)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
