"use client";

import { Button } from "@/components/ui/cscn/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/cscn/card";
import { Badge } from "@/components/ui/cscn/badge";
import { StatCard } from "@/components/ui/cscn/stat-card";
import { Avatar } from "@/components/ui/cscn/avatar";
import { ProgressBar } from "@/components/ui/cscn/progress-bar";
import { Separator } from "@/components/ui/cscn/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/cscn/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/cscn/tabs";
import { Radar } from "@/components/ui/cscn/radar";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/cscn/table";
import "@/components/ui/cscn/styles/cstrike.css";

const MATCH_HISTORY = [
  { map: "de_dust2", score: "16-12", kd: "28/18", rating: "1.42", date: "Today" },
  { map: "de_inferno", score: "14-16", kd: "19/22", rating: "0.88", date: "Today" },
  { map: "de_nuke", score: "16-4", kd: "31/8", rating: "1.85", date: "Yesterday" },
  { map: "de_mirage", score: "16-14", kd: "22/20", rating: "1.12", date: "Yesterday" },
  { map: "de_dust2", score: "16-8", kd: "26/12", rating: "1.58", date: "2 days ago" },
  { map: "de_train", score: "12-16", kd: "15/21", rating: "0.76", date: "3 days ago" },
  { map: "cs_office", score: "16-6", kd: "24/9", rating: "1.72", date: "3 days ago" },
  { map: "de_inferno", score: "16-13", kd: "21/18", rating: "1.18", date: "4 days ago" },
];

const WEAPONS_STATS = [
  { weapon: "AK-47", kills: 4821, hs: "52.3%", accuracy: "24.8%" },
  { weapon: "M4A1", kills: 3654, hs: "48.1%", accuracy: "26.2%" },
  { weapon: "AWP", kills: 2847, hs: "0.0%", accuracy: "68.4%" },
  { weapon: "Desert Eagle", kills: 1523, hs: "61.2%", accuracy: "32.1%" },
  { weapon: "USP", kills: 1284, hs: "55.8%", accuracy: "29.4%" },
  { weapon: "AK-47 | Fire Serpent", kills: 842, hs: "54.1%", accuracy: "25.6%" },
];

const MAP_STATS = [
  { map: "de_dust2", matches: 284, winRate: "58.1%" },
  { map: "de_inferno", matches: 196, winRate: "52.4%" },
  { map: "de_nuke", matches: 142, winRate: "61.8%" },
  { map: "de_mirage", matches: 168, winRate: "49.2%" },
  { map: "de_train", matches: 98, winRate: "44.6%" },
  { map: "cs_office", matches: 64, winRate: "68.2%" },
];

const SKILL_STATS = [
  { name: "Aim", value: 82 },
  { name: "Spray Control", value: 71 },
  { name: "Utility Usage", value: 65 },
  { name: "Clutch", value: 78 },
  { name: "Economy", value: 88 },
];

const FAVORITE_MAPS = [
  { name: "de_dust2", dots: [{ x: 0, y: 0, team: "self" as const }, { x: 0.3, y: -0.4, team: "ct" as const }, { x: -0.5, y: 0.2, team: "t" as const }] },
  { name: "de_nuke", dots: [{ x: 0, y: 0, team: "self" as const }, { x: -0.2, y: -0.5, team: "ct" as const }] },
  { name: "cs_office", dots: [{ x: 0, y: 0, team: "self" as const }, { x: 0.4, y: 0.3, team: "t" as const }] },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#111411] p-6">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="py-6">
            <div className="flex items-center gap-6">
              <Avatar name="n0thing" team="ct" size="lg" className="h-20 w-20 text-2xl" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="cs-font-logo text-2xl text-[var(--cs-hud-amber)] tracking-wider">
                    n0thing
                  </h1>
                  <Badge variant="accent">Global Elite</Badge>
                  <Badge variant="ct">Team Liquid</Badge>
                  <Badge variant="vac">VAC Clean</Badge>
                </div>
                <p className="cs-font-ui text-xs text-[var(--cs-text-dim)]">
                  Member since January 2003 — 15,847 hours played
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Button variant="default" size="sm">Add Friend</Button>
                  <Button variant="buy" size="sm">Invite to Lobby</Button>
                  <Button variant="default" size="sm">View Inventory</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            label="K/D Ratio"
            value="1.34"
            change="+0.08 this month"
            changeType="positive"
          />
          <StatCard
            label="Win Rate"
            value="54.2%"
            change="+2.1% this month"
            changeType="positive"
          />
          <StatCard
            label="Headshot %"
            value="48.7%"
            change="Stable"
            changeType="neutral"
          />
          <StatCard
            label="Total Matches"
            value="952"
            change="+24 this week"
            changeType="positive"
          />
        </div>

        {/* Main tabs */}
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="matches">Match History</TabsTrigger>
            <TabsTrigger value="weapons">Weapons</TabsTrigger>
            <TabsTrigger value="maps">Maps</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Skill Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Skill Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {SKILL_STATS.map((skill) => (
                    <ProgressBar
                      key={skill.name}
                      label={skill.name}
                      value={skill.value}
                      showPercentage
                    />
                  ))}
                </CardContent>
              </Card>

              {/* Favorite Maps */}
              <Card>
                <CardHeader>
                  <CardTitle>Favorite Maps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {FAVORITE_MAPS.map((map) => (
                      <div key={map.name} className="flex flex-col items-center gap-2">
                        <Radar size={100} mapName={map.name} dots={map.dots} />
                        <span className="cs-font-ui text-[10px] text-[var(--cs-text-secondary)]">
                          {MAP_STATS.find((m) => m.map === map.name)?.winRate} WR
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="matches">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between w-full">
                  <CardTitle>Match History</CardTitle>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Maps</SelectItem>
                      <SelectItem value="dust2">de_dust2</SelectItem>
                      <SelectItem value="inferno">de_inferno</SelectItem>
                      <SelectItem value="nuke">de_nuke</SelectItem>
                      <SelectItem value="mirage">de_mirage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Map</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>K/D</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MATCH_HISTORY.map((m, i) => {
                      const [w, l] = m.score.split("-").map(Number);
                      const isWin = w > l;
                      return (
                        <TableRow key={i}>
                          <TableCell>{m.map}</TableCell>
                          <TableCell className={isWin ? "text-[var(--cs-hud-green)]" : "text-[var(--cs-hud-red)]"}>
                            {m.score}
                          </TableCell>
                          <TableCell className="text-[var(--cs-text-bright)]">
                            {m.kd}
                          </TableCell>
                          <TableCell>
                            <Badge variant={parseFloat(m.rating) >= 1.0 ? "vac" : "t"}>
                              {m.rating}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-[var(--cs-text-dim)]">
                            {m.date}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weapons">
            <Card>
              <CardHeader>
                <CardTitle>Weapon Statistics</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Weapon</TableHead>
                      <TableHead>Kills</TableHead>
                      <TableHead>Headshot %</TableHead>
                      <TableHead>Accuracy</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {WEAPONS_STATS.map((w) => (
                      <TableRow key={w.weapon}>
                        <TableCell className="text-[var(--cs-text-bright)]">
                          {w.weapon}
                        </TableCell>
                        <TableCell className="cs-font-hud tabular-nums">
                          {w.kills.toLocaleString()}
                        </TableCell>
                        <TableCell>{w.hs}</TableCell>
                        <TableCell>{w.accuracy}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maps">
            <Card>
              <CardHeader>
                <CardTitle>Map Statistics</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Map</TableHead>
                      <TableHead>Matches Played</TableHead>
                      <TableHead>Win Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MAP_STATS.map((m) => (
                      <TableRow key={m.map}>
                        <TableCell className="text-[var(--cs-text-bright)]">
                          {m.map}
                        </TableCell>
                        <TableCell className="cs-font-hud tabular-nums">
                          {m.matches}
                        </TableCell>
                        <TableCell>
                          <Badge variant={parseFloat(m.winRate) >= 50 ? "vac" : "t"}>
                            {m.winRate}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
