"use client";

import { Scoreboard } from "@/components/ui/cscn/scoreboard";

export function ScoreboardPreview() {
  return (
    <Scoreboard
      serverName="dust2 24/7 | Competitive"
      mapName="de_dust2"
      ctScore={8}
      tScore={6}
      timeLeft="1:23"
      ctPlayers={[
        { name: "n0thing", kills: 24, deaths: 18, ping: 28, alive: true },
        { name: "shroud", kills: 20, deaths: 15, ping: 35, alive: true },
        { name: "Hiko", kills: 18, deaths: 20, ping: 42, alive: false },
      ]}
      tPlayers={[
        { name: "f0rest", kills: 22, deaths: 16, ping: 55, alive: true },
        { name: "GeT_RiGhT", kills: 19, deaths: 17, ping: 48, alive: true, hasBomb: true },
        { name: "friberg", kills: 15, deaths: 21, ping: 62, alive: false },
      ]}
    />
  );
}
