"use client";

import { KillFeed } from "@/components/ui/cscn/kill-feed";

export function KillFeedPreview() {
  return (
    <KillFeed
      entries={[
        { killer: "n0thing", killerTeam: "ct", victim: "f0rest", victimTeam: "t", weapon: "ak47", headshot: true },
        { killer: "GeT_RiGhT", killerTeam: "t", victim: "shroud", victimTeam: "ct", weapon: "awp" },
        { killer: "Hiko", killerTeam: "ct", victim: "friberg", victimTeam: "t", weapon: "deagle", headshot: true },
        { killer: "f0rest", killerTeam: "t", victim: "n0thing", victimTeam: "ct", weapon: "knife" },
      ]}
    />
  );
}
