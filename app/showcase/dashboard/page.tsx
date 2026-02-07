"use client";

import { useState } from "react";
import { Button } from "@/components/ui/cscn/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/cscn/card";
import { Input } from "@/components/ui/cscn/input";
import { Badge } from "@/components/ui/cscn/badge";
import { ProgressBar } from "@/components/ui/cscn/progress-bar";
import { StatCard } from "@/components/ui/cscn/stat-card";
import { Alert } from "@/components/ui/cscn/alert";
import { Avatar } from "@/components/ui/cscn/avatar";
import { Separator } from "@/components/ui/cscn/separator";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/cscn/select";
import { Toggle } from "@/components/ui/cscn/toggle";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/cscn/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/cscn/table";
import "@/components/ui/cscn/styles/cstrike.css";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", active: true },
  { label: "Servers" },
  { label: "Players" },
  { label: "Matches" },
  { label: "Settings" },
  { label: "Logs" },
];

const RECENT_MATCHES = [
  { id: "#4821", map: "de_dust2", result: "CT Win", players: 10, duration: "32:15", date: "2 min ago" },
  { id: "#4820", map: "de_inferno", result: "T Win", players: 10, duration: "28:44", date: "18 min ago" },
  { id: "#4819", map: "de_nuke", result: "CT Win", players: 8, duration: "41:02", date: "45 min ago" },
  { id: "#4818", map: "de_mirage", result: "Draw", players: 10, duration: "35:30", date: "1h ago" },
  { id: "#4817", map: "de_dust2", result: "T Win", players: 6, duration: "22:18", date: "2h ago" },
  { id: "#4816", map: "cs_office", result: "CT Win", players: 10, duration: "30:01", date: "3h ago" },
];

const ONLINE_PLAYERS = [
  { name: "n0thing", team: "ct" as const, status: "online" as const },
  { name: "f0rest", team: "t" as const, status: "online" as const },
  { name: "GeT_RiGhT", team: "t" as const, status: "away" as const },
  { name: "shroud", team: "ct" as const, status: "online" as const },
  { name: "Hiko", team: "ct" as const, status: "offline" as const },
];

export default function DashboardPage() {
  const [sidebarItem, setSidebarItem] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-[#111411]">
      {/* Sidebar */}
      <aside className="w-52 shrink-0 bg-[var(--cs-bg-secondary)] border-r-2 border-r-[var(--cs-border-dark)]">
        <div className="px-4 py-4 border-b-2 border-b-[var(--cs-border-dark)]">
          <span className="cs-font-logo text-lg text-[var(--cs-hud-amber)] tracking-wider">
            CS PANEL
          </span>
          <p className="cs-font-ui text-[10px] text-[var(--cs-text-dim)] mt-1">
            Server Management
          </p>
        </div>

        <nav className="p-2">
          {SIDEBAR_ITEMS.map((item) => (
            <Button
              key={item.label}
              variant="menu"
              size="sm"
              className={`w-full mb-0.5 ${
                sidebarItem === item.label
                  ? "text-white bg-[var(--cs-bg-selection)]"
                  : ""
              }`}
              onClick={() => setSidebarItem(item.label)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <Separator className="mx-2" />

        {/* Online players */}
        <div className="p-3">
          <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)] uppercase tracking-wider">
            Online Players
          </span>
          <div className="mt-2 space-y-2">
            {ONLINE_PLAYERS.map((p) => (
              <div key={p.name} className="flex items-center gap-2">
                <Avatar name={p.name} team={p.team} size="sm" status={p.status} />
                <span className="cs-font-ui text-xs text-[var(--cs-text)]">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="cs-font-ui text-lg text-[var(--cs-text-title)] cs-text-shadow">
              Dashboard
            </h1>
            <p className="cs-font-ui text-xs text-[var(--cs-text-dim)]">
              Server cluster overview — last 24h
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Input placeholder="Search..." className="w-48" />
            <Select defaultValue="24h">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24h</SelectItem>
                <SelectItem value="7d">Last 7d</SelectItem>
                <SelectItem value="30d">Last 30d</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="default" size="sm">
              Refresh
            </Button>
          </div>
        </div>

        {/* Alert */}
        <Alert variant="warning" title="Server Maintenance" className="mb-6">
          Scheduled maintenance for de_nuke server in 2 hours. Players will be migrated automatically.
        </Alert>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            label="Active Servers"
            value="12"
            change="+2 from yesterday"
            changeType="positive"
          />
          <StatCard
            label="Online Players"
            value="847"
            change="+12.5% vs avg"
            changeType="positive"
          />
          <StatCard
            label="Matches Today"
            value="1,284"
            change="-3.2% vs avg"
            changeType="negative"
          />
          <StatCard
            label="Avg Ping"
            value="42ms"
            change="Stable"
            changeType="neutral"
          />
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Server Performance */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Server Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="cs-font-ui text-xs text-[var(--cs-text)]">
                      dust2-competitive-01
                    </span>
                    <span className="cs-font-ui text-xs text-[var(--cs-hud-green)]">
                      28/32 players
                    </span>
                  </div>
                  <ProgressBar value={87.5} showPercentage={false} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="cs-font-ui text-xs text-[var(--cs-text)]">
                      inferno-casual-01
                    </span>
                    <span className="cs-font-ui text-xs text-[var(--cs-hud-amber)]">
                      16/32 players
                    </span>
                  </div>
                  <ProgressBar value={50} showPercentage={false} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="cs-font-ui text-xs text-[var(--cs-text)]">
                      nuke-competitive-02
                    </span>
                    <span className="cs-font-ui text-xs text-[var(--cs-hud-green)]">
                      8/16 players
                    </span>
                  </div>
                  <ProgressBar value={50} variant="download" showPercentage={false} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="cs-font-ui text-xs text-[var(--cs-text)]">
                      awp-only-01
                    </span>
                    <span className="cs-font-ui text-xs text-[var(--cs-hud-red)]">
                      MAINTENANCE
                    </span>
                  </div>
                  <ProgressBar value={0} showPercentage={false} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Toggle label="VAC Enabled" defaultChecked />
              <Toggle label="Auto-restart" defaultChecked />
              <Toggle label="Friendly Fire" />
              <Toggle label="Auto-balance" defaultChecked />
              <Toggle label="AllTalk" />
              <Separator className="my-2" />
              <div>
                <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)] block mb-1">
                  Max Players
                </span>
                <Select defaultValue="32">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="16">16</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="32">32</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent matches table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Matches</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Match ID</TableHead>
                  <TableHead>Map</TableHead>
                  <TableHead>Result</TableHead>
                  <TableHead>Players</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {RECENT_MATCHES.map((match) => (
                  <TableRow key={match.id}>
                    <TableCell className="text-[var(--cs-text-bright)]">
                      {match.id}
                    </TableCell>
                    <TableCell>{match.map}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          match.result === "CT Win"
                            ? "ct"
                            : match.result === "T Win"
                            ? "t"
                            : "default"
                        }
                      >
                        {match.result}
                      </Badge>
                    </TableCell>
                    <TableCell>{match.players}</TableCell>
                    <TableCell>{match.duration}</TableCell>
                    <TableCell className="text-[var(--cs-text-dim)]">
                      {match.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="justify-between">
            <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
              Showing 6 of 1,284 matches
            </span>
            <div className="flex gap-1">
              <Button variant="default" size="sm">
                Previous
              </Button>
              <Button variant="default" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
