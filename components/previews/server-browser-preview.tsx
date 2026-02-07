"use client";

import { ServerBrowser } from "@/components/ui/cscn/server-browser";

export function ServerBrowserPreview() {
  return (
    <ServerBrowser
      servers={[
        { name: "dust2 24/7 | Competitive", map: "de_dust2", players: 28, maxPlayers: 32, ping: 25, vac: true },
        { name: "EU Pro Mix #1", map: "de_inferno", players: 10, maxPlayers: 10, ping: 42, vac: true },
        { name: "AWP Only | Fun Server", map: "awp_map", players: 18, maxPlayers: 24, ping: 68, vac: true },
        { name: "Classic Office 24/7", map: "cs_office", players: 14, maxPlayers: 20, ping: 35, vac: true, locked: true },
        { name: "Deathmatch Arena", map: "de_dust2", players: 30, maxPlayers: 32, ping: 88 },
      ]}
    />
  );
}
