"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  team?: "ct" | "t" | "neutral";
  size?: "sm" | "md" | "lg";
  status?: "online" | "offline" | "away";
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, name, team = "neutral", size = "md", status, ...props }, ref) => {
    const initials = name
      .split(/[\s_-]/)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join("");

    const sizeClasses = {
      sm: "h-7 w-7 text-[10px]",
      md: "h-9 w-9 text-xs",
      lg: "h-12 w-12 text-sm",
    };

    const teamBg = {
      ct: "bg-[#1a2a3a] text-[var(--cs-team-ct)]",
      t: "bg-[#3a1a1a] text-[var(--cs-team-t)]",
      neutral: "bg-[var(--cs-bg-secondary)] text-[var(--cs-text)]",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center shrink-0",
          "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
          "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
          sizeClasses[size],
          teamBg[team],
          "cs-font-ui cs-text-shadow",
          className
        )}
        title={name}
        {...props}
      >
        {initials}
        {status && (
          <span
            className={cn(
              "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 border border-[var(--cs-bg)]",
              status === "online" && "bg-[var(--cs-hud-green)]",
              status === "offline" && "bg-[var(--cs-text-dim)]",
              status === "away" && "bg-[var(--cs-hud-amber)]"
            )}
          />
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

export { Avatar };
