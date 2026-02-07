"use client";

import { Motd } from "@/components/ui/cscn/motd";

export function MotdPreview() {
  return (
    <Motd
      serverName="dust2 24/7 | Competitive"
      content={`Welcome to our server!

Rules:
- No cheating or exploiting
- English only in voice chat
- Respect all players
- No team-killing on purpose
- Have fun!

Server admins: n0thing, shroud, f0rest
Discord: discord.gg/example
Visit our website: example.com`}
    />
  );
}
