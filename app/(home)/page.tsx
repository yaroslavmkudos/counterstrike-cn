"use client";

import Link from "next/link";
import { Button } from "@/components/ui/cscn/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/cscn/card";
import { Badge } from "@/components/ui/cscn/badge";
import { KillFeed } from "@/components/ui/cscn/kill-feed";
import { Health, Armor, Ammo, Money } from "@/components/ui/cscn/hud";
import { Radar } from "@/components/ui/cscn/radar";
import "@/components/ui/cscn/styles/cstrike.css";

const DEMO_KILLS = [
  {
    killer: "n0thing",
    killerTeam: "ct" as const,
    victim: "f0rest",
    victimTeam: "t" as const,
    weapon: "m4a1",
    headshot: true,
  },
  {
    killer: "GeT_RiGhT",
    killerTeam: "t" as const,
    victim: "Hiko",
    victimTeam: "ct" as const,
    weapon: "ak47",
  },
  {
    killer: "s1mple",
    killerTeam: "ct" as const,
    victim: "dev1ce",
    victimTeam: "t" as const,
    weapon: "awp",
    headshot: true,
  },
];

const DEMO_RADAR_DOTS = [
  { x: 0, y: 0, team: "self" as const },
  { x: 0.3, y: -0.4, team: "ct" as const },
  { x: -0.5, y: 0.2, team: "ct" as const },
  { x: 0.6, y: 0.5, team: "t" as const },
  { x: -0.3, y: -0.6, team: "t" as const },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Scanline overlay effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)",
        }}
      />

      {/* Hero Section */}
      <section className="relative z-20 flex flex-col items-center justify-center px-6 py-20">
        {/* Logo */}
        <div className="mb-2">
          <Badge variant="accent">Open Source</Badge>
        </div>

        <h1 className="cs-font-logo text-5xl md:text-7xl text-[var(--cs-hud-amber)] mb-4 text-center tracking-[6px]">
          COUNTER-STRIKE
        </h1>

        <p className="cs-font-ui text-lg text-[var(--cs-text-secondary)] mb-2 text-center">
          counterstrike-cn
        </p>

        <p className="cs-font-ui text-sm text-[var(--cs-text-dim)] mb-8 text-center max-w-lg">
          A collection of Counter-Strike 1.6 inspired UI components for modern
          web apps. Open source — copy, paste, customize.
        </p>

        <div className="flex items-center gap-3 mb-16">
          <Link href="/docs">
            <Button variant="default" size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="/docs/components">
            <Button variant="buy" size="lg">
              Components
            </Button>
          </Link>
        </div>

        {/* Showcase Cards */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* HUD Preview Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>HUD Elements</CardTitle>
            </CardHeader>
            <CardContent className="bg-black/50 space-y-4">
              <Health value={87} />
              <Armor value={100} hasHelmet />
              <div className="flex items-center justify-between">
                <Money amount={4750} />
                <Ammo current={21} reserve={90} />
              </div>
            </CardContent>
          </Card>

          {/* Kill Feed Preview Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Kill Feed</CardTitle>
            </CardHeader>
            <CardContent className="bg-black/50">
              <KillFeed entries={DEMO_KILLS} />
            </CardContent>
          </Card>

          {/* Radar Preview Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Radar</CardTitle>
            </CardHeader>
            <CardContent className="bg-black/50 flex items-center justify-center">
              <Radar dots={DEMO_RADAR_DOTS} size={140} mapName="de_dust2" />
            </CardContent>
          </Card>
        </div>

        {/* Component Categories */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {[
            { name: "Button", count: "5 variants" },
            { name: "Input", count: "VGUI style" },
            { name: "Card", count: "Compound" },
            { name: "Dialog", count: "Radix based" },
            { name: "Scoreboard", count: "TAB overlay" },
            { name: "Buy Menu", count: "Full menu" },
            { name: "Server Browser", count: "Sortable" },
            { name: "Console", count: "Interactive" },
            { name: "Kill Feed", count: "Animated" },
            { name: "HUD", count: "6 elements" },
            { name: "Radar", count: "SVG" },
            { name: "Chat", count: "Team chat" },
            { name: "Text Menu", count: "Classic" },
            { name: "Loading Screen", count: "Retro" },
            { name: "Team Select", count: "CT/T" },
            { name: "MOTD", count: "Server msg" },
          ].map((comp) => (
            <Link
              key={comp.name}
              href="/docs/components"
              className="no-underline"
            >
              <div className="bg-[var(--cs-bg-secondary)] border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)] border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)] p-3 hover:bg-[var(--cs-bg)] transition-none group">
                <span className="cs-font-ui text-xs text-[var(--cs-text-menu)] group-hover:text-white cs-text-shadow block">
                  {comp.name}
                </span>
                <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)] block mt-0.5">
                  {comp.count}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="cs-font-ui text-xs text-[var(--cs-text-dim)]">
            Not affiliated with Valve Corporation. Built for fun and nostalgia.
          </p>
          <p className="cs-font-ui text-[10px] text-[var(--cs-text-disabled)] mt-1">
            Counter-Strike is a registered trademark of Valve Corporation.
          </p>
        </div>
      </section>
    </div>
  );
}
