"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import "./styles/cstrike.css";

interface MotdProps extends React.HTMLAttributes<HTMLDivElement> {
  serverName?: string;
  content: string;
  onClose?: () => void;
}

const Motd = React.forwardRef<HTMLDivElement, MotdProps>(
  (
    {
      className,
      serverName = "Counter-Strike Server",
      content,
      onClose,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-lg bg-[var(--cs-bg)]",
          "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
          "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
          className
        )}
        {...props}
      >
        {/* Title bar */}
        <div className="px-4 py-2 bg-[var(--cs-bg-secondary)] border-b-2 border-b-[var(--cs-border-dark)]">
          <span className="cs-font-ui text-sm text-[var(--cs-text-title)] cs-text-shadow">
            {serverName} — Message of the Day
          </span>
        </div>

        {/* Content */}
        <div className="p-4 min-h-[200px] max-h-[400px] overflow-y-auto bg-[var(--cs-bg-darkest)]">
          <div className="cs-font-ui text-xs text-[var(--cs-text)] leading-relaxed whitespace-pre-wrap">
            {content}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-4 py-2 bg-[var(--cs-bg-secondary)] border-t-2 border-t-[var(--cs-border-dark)]">
          <Button variant="default" size="sm" onClick={onClose}>
            OK
          </Button>
        </div>
      </div>
    );
  }
);
Motd.displayName = "Motd";

export { Motd, type MotdProps };
