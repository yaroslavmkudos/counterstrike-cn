"use client";

import { Button } from "@/components/ui/cscn/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/cscn/card";
import { Badge } from "@/components/ui/cscn/badge";
import { Input } from "@/components/ui/cscn/input";
import { Separator } from "@/components/ui/cscn/separator";
import { StatCard } from "@/components/ui/cscn/stat-card";
import { Checkbox } from "@/components/ui/cscn/checkbox";
import "@/components/ui/cscn/styles/cstrike.css";

const FEATURES = [
  {
    title: "128-Tick Servers",
    desc: "High-performance dedicated servers running at 128 ticks per second for competitive play.",
  },
  {
    title: "Anti-Cheat",
    desc: "Multi-layer anti-cheat system with hardware fingerprinting and behavioral analysis.",
  },
  {
    title: "Match Replay",
    desc: "Full GOTV demos with player perspectives, X-ray view, and downloadable POVs.",
  },
  {
    title: "Ranking System",
    desc: "Elo-based competitive ranking with seasonal resets and leaderboards.",
  },
  {
    title: "Custom Maps",
    desc: "Workshop integration with community maps, voting, and curated playlists.",
  },
  {
    title: "Statistics",
    desc: "Per-round, per-weapon analytics with heatmaps, spray patterns, and economy graphs.",
  },
];

const PRICING = [
  {
    name: "Free Agent",
    price: "$0",
    period: "forever",
    features: [
      "64-tick casual servers",
      "Basic stats",
      "5 matches/day",
      "Community maps",
    ],
    cta: "Start Playing",
    popular: false,
  },
  {
    name: "Competitive",
    price: "$9.99",
    period: "/month",
    features: [
      "128-tick competitive",
      "Full stats + demos",
      "Unlimited matches",
      "Priority matchmaking",
      "Custom crosshairs",
      "Team creation",
    ],
    cta: "Get Competitive",
    popular: true,
  },
  {
    name: "Team Captain",
    price: "$29.99",
    period: "/month",
    features: [
      "Everything in Competitive",
      "Private 10-man servers",
      "Scrim scheduling",
      "Team analytics",
      "Coaching tools",
      "API access",
    ],
    cta: "Lead Your Team",
    popular: false,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#111411]">
      {/* Nav */}
      <nav className="border-b-2 border-b-[var(--cs-border-dark)] bg-[var(--cs-bg-secondary)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-12">
          <span className="cs-font-logo text-lg text-[var(--cs-hud-amber)] tracking-wider">
            FRAGZONE
          </span>
          <div className="flex items-center gap-4">
            <Button variant="menu" size="sm">Features</Button>
            <Button variant="menu" size="sm">Pricing</Button>
            <Button variant="menu" size="sm">About</Button>
            <Button variant="default" size="sm">Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Badge variant="accent" className="mb-4">
            Season 12 Now Live
          </Badge>
          <h1 className="cs-font-logo text-5xl md:text-6xl text-[var(--cs-hud-amber)] mb-4 tracking-widest">
            COMPETITIVE
            <br />
            MATCHMAKING
          </h1>
          <p className="cs-font-ui text-base text-[var(--cs-text-secondary)] mb-8 max-w-lg mx-auto">
            The premier Counter-Strike platform. 128-tick servers, anti-cheat, rankings,
            and a community of 50,000+ players.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button variant="default" size="lg">
              Play Now — Free
            </Button>
            <Button variant="buy" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y-2 border-y-[var(--cs-border-dark)] bg-[var(--cs-bg-secondary)]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[var(--cs-border-dark)]">
          {[
            { label: "Active Players", value: "52,847" },
            { label: "Matches Today", value: "18,432" },
            { label: "Servers Online", value: "1,284" },
            { label: "Avg Queue Time", value: "< 30s" },
          ].map((s) => (
            <div key={s.label} className="px-6 py-4 text-center">
              <div className="cs-font-hud text-xl text-[var(--cs-text-title)] tabular-nums">
                {s.value}
              </div>
              <div className="cs-font-ui text-[10px] text-[var(--cs-text-dim)] uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="cs-font-logo text-2xl text-[var(--cs-text-title)] tracking-wider mb-2">
              FEATURES
            </h2>
            <p className="cs-font-ui text-sm text-[var(--cs-text-dim)]">
              Everything you need for serious Counter-Strike
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <Card key={f.title}>
                <CardHeader>
                  <CardTitle>{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cs-font-ui text-xs text-[var(--cs-text-secondary)]">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-[var(--cs-bg-secondary)]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="cs-font-logo text-2xl text-[var(--cs-text-title)] tracking-wider mb-2">
              PRICING
            </h2>
            <p className="cs-font-ui text-sm text-[var(--cs-text-dim)]">
              Choose your loadout
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRICING.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.popular
                    ? "border-t-[var(--cs-accent)] border-l-[var(--cs-accent)] relative"
                    : ""
                }
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-4">
                    <Badge variant="accent">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pt-4">
                  <CardTitle>{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="cs-font-hud text-3xl text-[var(--cs-text-title)]">
                      {plan.price}
                    </span>
                    <span className="cs-font-ui text-xs text-[var(--cs-text-dim)] ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className="text-[var(--cs-hud-green)] text-xs">
                          ✓
                        </span>
                        <span className="cs-font-ui text-xs text-[var(--cs-text)]">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.popular ? "buy" : "default"}
                    className="w-full"
                    size="sm"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="cs-font-logo text-xl text-[var(--cs-text-title)] tracking-wider mb-2">
            STAY IN THE GAME
          </h2>
          <p className="cs-font-ui text-xs text-[var(--cs-text-dim)] mb-4">
            Get patch notes, tournament announcements, and community highlights.
          </p>
          <div className="flex gap-2">
            <Input placeholder="your@email.com" className="flex-1" />
            <Button variant="default">Subscribe</Button>
          </div>
          <div className="mt-3">
            <Checkbox label="I agree to receive emails" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-t-[var(--cs-border-dark)] bg-[var(--cs-bg-secondary)] py-6 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="cs-font-logo text-sm text-[var(--cs-text-dim)]">
            FRAGZONE
          </span>
          <span className="cs-font-ui text-[10px] text-[var(--cs-text-disabled)]">
            A counterstrike-cn showcase demo. Not a real product.
          </span>
        </div>
      </footer>
    </div>
  );
}
