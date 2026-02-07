"use client";

import { Chat } from "@/components/ui/cscn/chat";

export function ChatPreview() {
  return (
    <div className="bg-black/50 max-w-md">
      <Chat
        messages={[
          { sender: "n0thing", team: "ct", message: "nice shot" },
          { sender: "f0rest", team: "t", message: "gg wp", isTeamChat: true },
          { sender: "shroud", team: "ct", message: "rotate B" },
          { sender: "GeT_RiGhT", team: "t", message: "they're rushing", isDead: true },
          { sender: "Hiko", team: "ct", message: "clutch or kick" },
        ]}
      />
    </div>
  );
}
