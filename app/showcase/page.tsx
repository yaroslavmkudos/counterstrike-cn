"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/cscn/card";
import { Button } from "@/components/ui/cscn/button";
import "@/components/ui/cscn/styles/cstrike.css";

const SHOWCASES = [
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with stats, tables, charts area, and sidebar navigation",
    href: "/showcase/dashboard",
  },
  {
    title: "Landing Page",
    description:
      "Product landing page with hero section, features grid, pricing table, and CTA",
    href: "/showcase/landing",
  },
  {
    title: "Game Lobby App",
    description:
      "Multiplayer game lobby with server list, chat, player cards, and match settings",
    href: "/showcase/lobby",
  },
  {
    title: "Skin Marketplace",
    description:
      "Trading platform with skin listings, filters, trade history, and inventory management",
    href: "/showcase/marketplace",
  },
  {
    title: "Player Profile",
    description:
      "Stats page with skill breakdowns, match history, weapon stats, and map performance",
    href: "/showcase/profile",
  },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[#111411] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="cs-font-logo text-3xl text-[var(--cs-hud-amber)] mb-2 tracking-wider">
          SHOWCASE
        </h1>
        <p className="cs-font-ui text-sm text-[var(--cs-text-secondary)] mb-8">
          Components in context — real-world UI examples built entirely with
          counterstrike-cn components.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SHOWCASES.map((s) => (
            <Link key={s.href} href={s.href} className="no-underline group">
              <Card className="h-full hover:border-t-[var(--cs-accent)] hover:border-l-[var(--cs-accent)] transition-none">
                <CardHeader>
                  <CardTitle className="group-hover:text-white">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{s.description}</CardDescription>
                  <div className="mt-4">
                    <Button variant="buy" size="sm">
                      View Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
