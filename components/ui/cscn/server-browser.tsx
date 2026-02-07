"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import "./styles/cstrike.css";

interface Server {
  name: string;
  map: string;
  players: number;
  maxPlayers: number;
  ping: number;
  locked?: boolean;
  vac?: boolean;
  game?: string;
}

interface ServerBrowserProps extends React.HTMLAttributes<HTMLDivElement> {
  servers: Server[];
  onConnect?: (server: Server) => void;
  onRefresh?: () => void;
}

type TabKey = "internet" | "favorites" | "history" | "spectate" | "lan";

const TABS: { key: TabKey; label: string }[] = [
  { key: "internet", label: "Internet" },
  { key: "favorites", label: "Favorites" },
  { key: "history", label: "History" },
  { key: "spectate", label: "Spectate" },
  { key: "lan", label: "LAN" },
];

const ServerBrowser = React.forwardRef<HTMLDivElement, ServerBrowserProps>(
  ({ className, servers, onConnect, onRefresh, ...props }, ref) => {
    const [activeTab, setActiveTab] = React.useState<TabKey>("internet");
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
    const [sortBy, setSortBy] = React.useState<keyof Server>("ping");
    const [sortAsc, setSortAsc] = React.useState(true);

    const sorted = React.useMemo(() => {
      return [...servers].sort((a, b) => {
        const aVal = a[sortBy];
        const bVal = b[sortBy];
        if (typeof aVal === "number" && typeof bVal === "number") {
          return sortAsc ? aVal - bVal : bVal - aVal;
        }
        return sortAsc
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      });
    }, [servers, sortBy, sortAsc]);

    const handleSort = (key: keyof Server) => {
      if (sortBy === key) {
        setSortAsc(!sortAsc);
      } else {
        setSortBy(key);
        setSortAsc(true);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-3xl bg-[var(--cs-bg)]",
          "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
          "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
          className
        )}
        {...props}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-[var(--cs-bg-secondary)] border-b-2 border-b-[var(--cs-border-dark)]">
          <span className="cs-font-ui text-sm text-[var(--cs-text-title)] cs-text-shadow">
            Server Browser
          </span>
          <button className="cs-font-ui text-xs text-[var(--cs-text-dim)] hover:text-white">
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b-2 border-b-[var(--cs-border-dark)] bg-[var(--cs-bg-secondary)]">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={cn(
                "cs-font-ui text-xs px-4 py-1.5 border-r border-r-[var(--cs-border-dark)]",
                "transition-none",
                activeTab === tab.key
                  ? "bg-[var(--cs-bg)] text-[var(--cs-text-bright)] border-b-0"
                  : "bg-[var(--cs-bg-secondary)] text-[var(--cs-text-dim)] hover:text-[var(--cs-text)]"
              )}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Server list */}
        <div className="overflow-auto max-h-80">
          <table className="w-full border-collapse">
            <thead className="sticky top-0">
              <tr className="bg-[var(--cs-bg-secondary)]">
                <th className="w-6 px-1 py-1" />
                <th className="w-6 px-1 py-1" />
                <th
                  className="px-2 py-1 text-left cs-font-ui text-[10px] text-[var(--cs-text-secondary)] uppercase cursor-pointer hover:text-[var(--cs-text-bright)]"
                  onClick={() => handleSort("name")}
                >
                  Server Name {sortBy === "name" && (sortAsc ? "▲" : "▼")}
                </th>
                <th
                  className="px-2 py-1 text-left cs-font-ui text-[10px] text-[var(--cs-text-secondary)] uppercase cursor-pointer hover:text-[var(--cs-text-bright)] w-24"
                  onClick={() => handleSort("map")}
                >
                  Map {sortBy === "map" && (sortAsc ? "▲" : "▼")}
                </th>
                <th
                  className="px-2 py-1 text-center cs-font-ui text-[10px] text-[var(--cs-text-secondary)] uppercase cursor-pointer hover:text-[var(--cs-text-bright)] w-20"
                  onClick={() => handleSort("players")}
                >
                  Players {sortBy === "players" && (sortAsc ? "▲" : "▼")}
                </th>
                <th
                  className="px-2 py-1 text-center cs-font-ui text-[10px] text-[var(--cs-text-secondary)] uppercase cursor-pointer hover:text-[var(--cs-text-bright)] w-16"
                  onClick={() => handleSort("ping")}
                >
                  Ping {sortBy === "ping" && (sortAsc ? "▲" : "▼")}
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((server, i) => (
                <tr
                  key={i}
                  className={cn(
                    "border-b border-b-[#1a1a1a] cursor-pointer",
                    selectedIndex === i
                      ? "bg-[var(--cs-bg-selection)]"
                      : i % 2 === 0
                      ? "bg-[var(--cs-bg-darkest)]"
                      : "bg-[var(--cs-bg-darker)]",
                    "hover:bg-[var(--cs-bg-selection)]"
                  )}
                  onClick={() => setSelectedIndex(i)}
                  onDoubleClick={() => onConnect?.(server)}
                >
                  <td className="px-1 py-0.5 text-center text-xs">
                    {server.locked && (
                      <span className="text-[var(--cs-accent)]" title="Password Protected">
                        🔒
                      </span>
                    )}
                  </td>
                  <td className="px-1 py-0.5 text-center text-xs">
                    {server.vac && (
                      <span className="text-[var(--cs-hud-green)]" title="VAC Secured">
                        ✓
                      </span>
                    )}
                  </td>
                  <td className="px-2 py-0.5 cs-font-ui text-xs text-[var(--cs-text)] truncate max-w-[200px]">
                    {server.name}
                  </td>
                  <td className="px-2 py-0.5 cs-font-ui text-xs text-[var(--cs-text-secondary)]">
                    {server.map}
                  </td>
                  <td className="px-2 py-0.5 text-center cs-font-ui text-xs text-[var(--cs-text)]">
                    {server.players}/{server.maxPlayers}
                  </td>
                  <td
                    className={cn(
                      "px-2 py-0.5 text-center cs-font-ui text-xs",
                      server.ping < 50
                        ? "text-[var(--cs-hud-green)]"
                        : server.ping < 100
                        ? "text-[var(--cs-hud-amber)]"
                        : "text-[var(--cs-hud-red)]"
                    )}
                  >
                    {server.ping}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-[var(--cs-bg-secondary)] border-t-2 border-t-[var(--cs-border-dark)]">
          <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
            {servers.length} servers
          </span>
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" onClick={onRefresh}>
              Refresh
            </Button>
            <Button
              variant="default"
              size="sm"
              disabled={selectedIndex === null}
              onClick={() =>
                selectedIndex !== null && onConnect?.(sorted[selectedIndex])
              }
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
ServerBrowser.displayName = "ServerBrowser";

export { ServerBrowser, type Server, type ServerBrowserProps };
