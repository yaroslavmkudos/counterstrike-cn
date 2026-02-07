"use client";

import { useState } from "react";
import { Button } from "@/components/ui/cscn/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/cscn/card";
import { Input } from "@/components/ui/cscn/input";
import { Badge } from "@/components/ui/cscn/badge";
import { Avatar } from "@/components/ui/cscn/avatar";
import { Chat, type ChatMessage } from "@/components/ui/cscn/chat";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/cscn/select";
import { Separator } from "@/components/ui/cscn/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/cscn/tabs";
import { Radar } from "@/components/ui/cscn/radar";
import { Toggle } from "@/components/ui/cscn/toggle";
import { Alert } from "@/components/ui/cscn/alert";
import { ProgressBar } from "@/components/ui/cscn/progress-bar";
import { Textarea } from "@/components/ui/cscn/textarea";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/cscn/table";
import "@/components/ui/cscn/styles/cstrike.css";

const LOBBY_PLAYERS = [
  { name: "n0thing", team: "ct" as const, ready: true, rank: "Global Elite", ping: 28 },
  { name: "shroud", team: "ct" as const, ready: true, rank: "Supreme", ping: 35 },
  { name: "Hiko", team: "ct" as const, ready: false, rank: "Global Elite", ping: 42 },
  { name: "f0rest", team: "t" as const, ready: true, rank: "Global Elite", ping: 55 },
  { name: "GeT_RiGhT", team: "t" as const, ready: true, rank: "Global Elite", ping: 48 },
  { name: "friberg", team: "t" as const, ready: true, rank: "LEM", ping: 62 },
];

const CHAT_MESSAGES: ChatMessage[] = [
  { sender: "n0thing", team: "ct", message: "gg let's run dust2" },
  { sender: "f0rest", team: "t", message: "sure, we need one more" },
  { sender: "shroud", team: "ct", message: "Hiko you ready?" },
  { sender: "GeT_RiGhT", team: "t", message: "let's go boys" },
  { sender: "Hiko", team: "ct", message: "1 min, updating config", isDead: false },
  { sender: "friberg", team: "t", message: "no rush", isTeamChat: true },
];

const MAP_POOL = [
  { name: "de_dust2", players: 847, active: true },
  { name: "de_inferno", players: 623 },
  { name: "de_nuke", players: 412 },
  { name: "de_mirage", players: 556 },
  { name: "de_train", players: 289 },
  { name: "cs_office", players: 198 },
];

const MATCH_HISTORY = [
  { map: "de_dust2", score: "16-12", result: "Win", kd: "24/18", date: "Yesterday" },
  { map: "de_inferno", score: "14-16", result: "Loss", kd: "19/22", date: "Yesterday" },
  { map: "de_nuke", score: "16-4", result: "Win", kd: "28/8", date: "2 days ago" },
  { map: "de_mirage", score: "16-14", result: "Win", kd: "22/20", date: "3 days ago" },
];

export default function LobbyPage() {
  const [chatInput, setChatInput] = useState("");
  const readyCount = LOBBY_PLAYERS.filter((p) => p.ready).length;
  const allReady = readyCount === LOBBY_PLAYERS.length;

  return (
    <div className="min-h-screen bg-[#111411]">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-12 bg-[var(--cs-bg-secondary)] border-b-2 border-b-[var(--cs-border-dark)]">
        <div className="flex items-center gap-4">
          <span className="cs-font-logo text-lg text-[var(--cs-hud-amber)] tracking-wider">
            LOBBY
          </span>
          <Badge variant="accent">10-Man</Badge>
          <Badge variant="vac">VAC Secured</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="cs-font-ui text-xs text-[var(--cs-text-dim)]">
            {readyCount}/{LOBBY_PLAYERS.length} ready
          </span>
          <Button
            variant={allReady ? "buy" : "default"}
            size="sm"
            disabled={!allReady}
          >
            {allReady ? "Start Match" : "Waiting..."}
          </Button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-48px)]">
        {/* Main content */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            {/* CT Team */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-[var(--cs-team-ct)]">
                    Counter-Terrorists
                  </CardTitle>
                  <Badge variant="ct">{LOBBY_PLAYERS.filter((p) => p.team === "ct").length}/5</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {LOBBY_PLAYERS.filter((p) => p.team === "ct").map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between p-2 bg-[var(--cs-bg-darkest)] border border-[var(--cs-border-dark)]"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar
                        name={p.name}
                        team="ct"
                        size="md"
                        status={p.ready ? "online" : "away"}
                      />
                      <div>
                        <span className="cs-font-ui text-sm text-[var(--cs-team-ct)] block">
                          {p.name}
                        </span>
                        <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
                          {p.rank}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
                        {p.ping}ms
                      </span>
                      <Badge variant={p.ready ? "vac" : "default"}>
                        {p.ready ? "READY" : "NOT READY"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* T Team */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-[var(--cs-team-t)]">
                    Terrorists
                  </CardTitle>
                  <Badge variant="t">{LOBBY_PLAYERS.filter((p) => p.team === "t").length}/5</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {LOBBY_PLAYERS.filter((p) => p.team === "t").map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between p-2 bg-[var(--cs-bg-darkest)] border border-[var(--cs-border-dark)]"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar
                        name={p.name}
                        team="t"
                        size="md"
                        status={p.ready ? "online" : "away"}
                      />
                      <div>
                        <span className="cs-font-ui text-sm text-[var(--cs-team-t)] block">
                          {p.name}
                        </span>
                        <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
                          {p.rank}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
                        {p.ping}ms
                      </span>
                      <Badge variant={p.ready ? "vac" : "default"}>
                        {p.ready ? "READY" : "NOT READY"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Match Settings + Map Pool tabs */}
          <Tabs defaultValue="maps">
            <TabsList>
              <TabsTrigger value="maps">Map Pool</TabsTrigger>
              <TabsTrigger value="settings">Match Settings</TabsTrigger>
              <TabsTrigger value="history">Match History</TabsTrigger>
            </TabsList>

            <TabsContent value="maps">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {MAP_POOL.map((map) => (
                  <div
                    key={map.name}
                    className={`p-3 border-2 cursor-pointer transition-none ${
                      map.active
                        ? "bg-[var(--cs-bg-selection)] border-[var(--cs-accent)]"
                        : "bg-[var(--cs-bg-darkest)] border-[var(--cs-border-dark)] hover:border-[var(--cs-border-light)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="cs-font-ui text-sm text-[var(--cs-text)]">
                        {map.name}
                      </span>
                      {map.active && (
                        <Badge variant="accent">Selected</Badge>
                      )}
                    </div>
                    <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
                      {map.players} playing now
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)] block mb-1">
                      Max Rounds
                    </span>
                    <Select defaultValue="30">
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 (Short)</SelectItem>
                        <SelectItem value="30">30 (Standard)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)] block mb-1">
                      Round Time
                    </span>
                    <Select defaultValue="115">
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="105">1:45</SelectItem>
                        <SelectItem value="115">1:55</SelectItem>
                        <SelectItem value="120">2:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)] block mb-1">
                      Start Money
                    </span>
                    <Select defaultValue="800">
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="800">$800</SelectItem>
                        <SelectItem value="6000">$6000</SelectItem>
                        <SelectItem value="16000">$16000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-3">
                  <Toggle label="Friendly Fire" defaultChecked />
                  <Toggle label="Freeze Time" defaultChecked />
                  <Toggle label="Auto Team Balance" />
                  <Toggle label="All Talk" />
                  <Toggle label="Allow Spectators" defaultChecked />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Map</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Result</TableHead>
                    <TableHead>K/D</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MATCH_HISTORY.map((m, i) => (
                    <TableRow key={i}>
                      <TableCell>{m.map}</TableCell>
                      <TableCell className="text-[var(--cs-text-bright)]">
                        {m.score}
                      </TableCell>
                      <TableCell>
                        <Badge variant={m.result === "Win" ? "vac" : "t"}>
                          {m.result}
                        </Badge>
                      </TableCell>
                      <TableCell>{m.kd}</TableCell>
                      <TableCell className="text-[var(--cs-text-dim)]">
                        {m.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right sidebar — Chat */}
        <aside className="w-72 shrink-0 border-l-2 border-l-[var(--cs-border-dark)] bg-[var(--cs-bg-secondary)] flex flex-col">
          <div className="px-3 py-2 border-b-2 border-b-[var(--cs-border-dark)]">
            <span className="cs-font-ui text-xs text-[var(--cs-text-title)] cs-text-shadow">
              Lobby Chat
            </span>
          </div>

          <div className="flex-1 overflow-y-auto">
            <Chat messages={CHAT_MESSAGES} />
          </div>

          <div className="p-2 border-t-2 border-t-[var(--cs-border-dark)]">
            <div className="flex gap-1">
              <Input
                placeholder="Type a message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-1"
              />
              <Button variant="default" size="sm">
                Send
              </Button>
            </div>
          </div>

          <Separator />

          {/* Mini radar */}
          <div className="p-3 flex flex-col items-center">
            <Radar
              size={120}
              mapName="de_dust2"
              dots={[
                { x: 0, y: 0, team: "self" },
                { x: 0.4, y: -0.3, team: "ct" },
                { x: -0.3, y: 0.5, team: "t" },
              ]}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
