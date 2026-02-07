"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import "./styles/cstrike.css";

interface TeamSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  onTeamSelect?: (team: "ct" | "t" | "spectator") => void;
}

const TeamSelect = React.forwardRef<HTMLDivElement, TeamSelectProps>(
  ({ className, onTeamSelect, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-sm bg-[var(--cs-bg)]/95 backdrop-blur-sm",
          "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
          "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="px-4 py-2 bg-[var(--cs-bg-secondary)] border-b-2 border-b-[var(--cs-border-dark)]">
          <span className="cs-font-ui text-sm text-[var(--cs-text-title)] cs-text-shadow">
            Select a Team
          </span>
        </div>

        <div className="p-4 flex flex-col gap-2">
          {/* CT */}
          <Button
            variant="default"
            className="w-full justify-start gap-3 h-12 bg-[#1a2a3a] hover:bg-[#243a4f] border-[#2a4a6a]"
            onClick={() => onTeamSelect?.("ct")}
          >
            <span className="text-lg">🛡</span>
            <div className="flex flex-col items-start">
              <span className="text-[var(--cs-team-ct)] text-sm">
                Counter-Terrorist Force
              </span>
              <span className="text-[var(--cs-text-dim)] text-[10px]">
                1. Counter-Terrorists
              </span>
            </div>
          </Button>

          {/* T */}
          <Button
            variant="default"
            className="w-full justify-start gap-3 h-12 bg-[#3a1a1a] hover:bg-[#4f2424] border-[#6a2a2a]"
            onClick={() => onTeamSelect?.("t")}
          >
            <span className="text-lg">💣</span>
            <div className="flex flex-col items-start">
              <span className="text-[var(--cs-team-t)] text-sm">
                Terrorist Force
              </span>
              <span className="text-[var(--cs-text-dim)] text-[10px]">
                2. Terrorists
              </span>
            </div>
          </Button>

          {/* Spectator */}
          <Button
            variant="default"
            className="w-full justify-start gap-3 h-10"
            onClick={() => onTeamSelect?.("spectator")}
          >
            <span className="text-lg">👁</span>
            <div className="flex flex-col items-start">
              <span className="text-[var(--cs-team-neutral)] text-xs">
                Spectator
              </span>
              <span className="text-[var(--cs-text-dim)] text-[10px]">
                3. Spectate
              </span>
            </div>
          </Button>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-[var(--cs-bg-secondary)] border-t-2 border-t-[var(--cs-border-dark)]">
          <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
            Press number key to select
          </span>
        </div>
      </div>
    );
  }
);
TeamSelect.displayName = "TeamSelect";

export { TeamSelect, type TeamSelectProps };
