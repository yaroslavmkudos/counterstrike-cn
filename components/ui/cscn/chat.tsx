"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

interface ChatMessage {
  sender: string;
  team: "ct" | "t" | "spectator";
  message: string;
  isDead?: boolean;
  isTeamChat?: boolean;
}

interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: ChatMessage[];
  maxVisible?: number;
}

const Chat = React.forwardRef<HTMLDivElement, ChatProps>(
  ({ className, messages, maxVisible = 8, ...props }, ref) => {
    const visible = messages.slice(-maxVisible);

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-0.5 p-2", className)}
        {...props}
      >
        {visible.map((msg, i) => {
          const nameColor =
            msg.team === "ct"
              ? "text-[var(--cs-team-ct)]"
              : msg.team === "t"
              ? "text-[var(--cs-team-t)]"
              : "text-[var(--cs-team-neutral)]";

          return (
            <div key={i} className="flex items-start gap-1 leading-tight">
              {msg.isDead && (
                <span className="cs-font-console text-[11px] text-[var(--cs-text-dim)]">
                  *DEAD*
                </span>
              )}
              {msg.isTeamChat && (
                <span className="cs-font-console text-[11px] text-[var(--cs-text-secondary)]">
                  (TEAM)
                </span>
              )}
              <span className={cn("cs-font-console text-[11px] font-bold", nameColor)}>
                {msg.sender}
              </span>
              <span className="cs-font-console text-[11px] text-[var(--cs-text-dim)]">
                :
              </span>
              <span className="cs-font-console text-[11px] text-[var(--cs-text)]">
                {msg.message}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
);
Chat.displayName = "Chat";

export { Chat, type ChatMessage, type ChatProps };
