"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

interface Player {
  name: string;
  kills: number;
  deaths: number;
  ping: number;
  alive?: boolean;
  hasBomb?: boolean;
}

interface ScoreboardProps extends React.HTMLAttributes<HTMLDivElement> {
  serverName?: string;
  mapName?: string;
  ctScore: number;
  tScore: number;
  ctPlayers: Player[];
  tPlayers: Player[];
  timeLeft?: string;
}

function PlayerRow({
  player,
  team,
}: {
  player: Player;
  team: "ct" | "t";
}) {
  const nameColor = team === "ct" ? "text-[var(--cs-team-ct)]" : "text-[var(--cs-team-t)]";
  return (
    <tr
      className={cn(
        "border-b border-b-[#1a1a1a] hover:bg-[var(--cs-bg-selection)]",
        !player.alive && "opacity-60"
      )}
    >
      <td className={cn("px-3 py-1 cs-font-ui text-xs", nameColor)}>
        {player.name}
        {player.hasBomb && (
          <span className="ml-2 text-[var(--cs-hud-amber)] text-[10px]">
            ★ BOMB
          </span>
        )}
      </td>
      <td className="px-3 py-1 text-center cs-font-ui text-xs text-[var(--cs-text)]">
        {player.alive ? "" : "💀"}
      </td>
      <td className="px-3 py-1 text-center cs-font-ui text-xs text-[var(--cs-text)]">
        {player.kills}
      </td>
      <td className="px-3 py-1 text-center cs-font-ui text-xs text-[var(--cs-text)]">
        {player.deaths}
      </td>
      <td className="px-3 py-1 text-center cs-font-ui text-xs text-[var(--cs-text-dim)]">
        {player.ping}
      </td>
    </tr>
  );
}

function TeamSection({
  team,
  players,
  score,
  label,
}: {
  team: "ct" | "t";
  players: Player[];
  score: number;
  label: string;
}) {
  const headerBg = team === "ct" ? "bg-[#1a2a3a]" : "bg-[#3a1a1a]";
  const headerColor = team === "ct" ? "text-[var(--cs-team-ct)]" : "text-[var(--cs-team-t)]";
  return (
    <div className="mb-1">
      <div
        className={cn(
          "flex items-center justify-between px-3 py-1.5",
          headerBg
        )}
      >
        <span className={cn("cs-font-ui text-sm cs-text-shadow", headerColor)}>
          {label}
        </span>
        <span className={cn("cs-font-ui text-lg cs-text-shadow", headerColor)}>
          {score}
        </span>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-[var(--cs-bg-darker)] border-b border-b-[var(--cs-border-dark)]">
            <th className="px-3 py-1 text-left cs-font-ui text-[10px] text-[var(--cs-text-dim)] uppercase">
              Player
            </th>
            <th className="px-3 py-1 text-center cs-font-ui text-[10px] text-[var(--cs-text-dim)] uppercase w-12">
              Status
            </th>
            <th className="px-3 py-1 text-center cs-font-ui text-[10px] text-[var(--cs-text-dim)] uppercase w-16">
              Score
            </th>
            <th className="px-3 py-1 text-center cs-font-ui text-[10px] text-[var(--cs-text-dim)] uppercase w-16">
              Deaths
            </th>
            <th className="px-3 py-1 text-center cs-font-ui text-[10px] text-[var(--cs-text-dim)] uppercase w-14">
              Ping
            </th>
          </tr>
        </thead>
        <tbody className="bg-[var(--cs-bg-darkest)]">
          {players.map((player, i) => (
            <PlayerRow key={i} player={player} team={team} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Scoreboard = React.forwardRef<HTMLDivElement, ScoreboardProps>(
  (
    {
      className,
      serverName = "Counter-Strike Server",
      mapName = "de_dust2",
      ctScore,
      tScore,
      ctPlayers,
      tPlayers,
      timeLeft = "1:45",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-2xl bg-[var(--cs-bg-dark)]/90 backdrop-blur-sm",
          "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
          "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
          className
        )}
        {...props}
      >
        {/* Server info header */}
        <div className="flex items-center justify-between px-3 py-2 bg-[var(--cs-bg-secondary)] border-b-2 border-b-[var(--cs-border-dark)]">
          <span className="cs-font-ui text-xs text-[var(--cs-text-title)] cs-text-shadow">
            {serverName}
          </span>
          <div className="flex items-center gap-4">
            <span className="cs-font-ui text-xs text-[var(--cs-text-secondary)]">
              {mapName}
            </span>
            <span className="cs-font-ui text-xs text-[var(--cs-hud-amber)]">
              {timeLeft}
            </span>
          </div>
        </div>

        {/* Teams */}
        <div className="p-1">
          <TeamSection
            team="ct"
            players={ctPlayers}
            score={ctScore}
            label="Counter-Terrorists"
          />
          <TeamSection
            team="t"
            players={tPlayers}
            score={tScore}
            label="Terrorists"
          />
        </div>
      </div>
    );
  }
);
Scoreboard.displayName = "Scoreboard";

export { Scoreboard, type Player, type ScoreboardProps };
