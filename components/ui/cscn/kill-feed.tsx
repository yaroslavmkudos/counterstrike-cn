"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

interface KillFeedEntry {
  killer: string;
  killerTeam: "ct" | "t";
  victim: string;
  victimTeam: "ct" | "t";
  weapon: string;
  headshot?: boolean;
}

interface KillFeedProps extends React.HTMLAttributes<HTMLDivElement> {
  entries: KillFeedEntry[];
  maxVisible?: number;
}

const WEAPON_SYMBOLS: Record<string, string> = {
  ak47: "AK-47",
  m4a1: "M4A1",
  awp: "AWP",
  deagle: "Deagle",
  usp: "USP",
  glock: "Glock",
  knife: "Knife",
  hegrenade: "HE",
  flashbang: "Flash",
  smokegrenade: "Smoke",
  mp5: "MP5",
  p90: "P90",
  scout: "Scout",
  aug: "AUG",
  sg552: "SG552",
  famas: "Famas",
  galil: "Galil",
  mac10: "MAC-10",
  ump45: "UMP",
  m249: "M249",
  xm1014: "XM1014",
  m3: "M3",
  elite: "Dual Elites",
  fiveseven: "Five-SeveN",
  p228: "P228",
  tmp: "TMP",
  g3sg1: "G3SG1",
  sg550: "SG550",
};

const KillFeed = React.forwardRef<HTMLDivElement, KillFeedProps>(
  ({ className, entries, maxVisible = 5, ...props }, ref) => {
    const visible = entries.slice(0, maxVisible);

    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-end gap-0.5", className)}
        {...props}
      >
        {visible.map((entry, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-1.5 px-2 py-0.5",
              "bg-black/50 backdrop-blur-sm",
              i === 0 && "opacity-100",
              i === 1 && "opacity-90",
              i === 2 && "opacity-75",
              i === 3 && "opacity-55",
              i === 4 && "opacity-35"
            )}
          >
            <span
              className={cn(
                "cs-font-ui text-xs cs-text-shadow",
                entry.killerTeam === "ct"
                  ? "text-[var(--cs-team-ct)]"
                  : "text-[var(--cs-team-t)]"
              )}
            >
              {entry.killer}
            </span>

            <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)] px-1">
              [{WEAPON_SYMBOLS[entry.weapon] || entry.weapon}]
            </span>

            {entry.headshot && (
              <span className="text-[10px] text-[var(--cs-hud-amber)]" title="Headshot">
                HS
              </span>
            )}

            <span
              className={cn(
                "cs-font-ui text-xs cs-text-shadow",
                entry.victimTeam === "ct"
                  ? "text-[var(--cs-team-ct)]"
                  : "text-[var(--cs-team-t)]"
              )}
            >
              {entry.victim}
            </span>
          </div>
        ))}
      </div>
    );
  }
);
KillFeed.displayName = "KillFeed";

export { KillFeed, type KillFeedEntry, type KillFeedProps };
