"use client";

import { Console } from "@/components/ui/cscn/console";

export function ConsolePreview() {
  return (
    <Console
      lines={[
        { text: "Console initialized.", type: "system" },
        { text: "map de_dust2", type: "input" },
        { text: "Loading map de_dust2...", type: "info" },
        { text: "Server ready.", type: "system" },
        { text: "sv_cheats 0", type: "input" },
        { text: 'Unknown command "fly"', type: "warning" },
        { text: "Connection timed out", type: "error" },
      ]}
    />
  );
}
