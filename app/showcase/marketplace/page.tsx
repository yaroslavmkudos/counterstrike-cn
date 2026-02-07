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
import { StatCard } from "@/components/ui/cscn/stat-card";
import { Alert } from "@/components/ui/cscn/alert";
import { Avatar } from "@/components/ui/cscn/avatar";
import { Separator } from "@/components/ui/cscn/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/cscn/select";
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

const FEATURED_SKINS = [
  { name: "AK-47 | Fire Serpent", rarity: "Covert", wear: "Field-Tested", price: "$842.50", stattrak: false },
  { name: "AWP | Dragon Lore", rarity: "Covert", wear: "Minimal Wear", price: "$4,125.00", stattrak: false },
  { name: "M4A4 | Howl", rarity: "Contraband", wear: "Factory New", price: "$6,800.00", stattrak: false },
  { name: "Desert Eagle | Blaze", rarity: "Restricted", wear: "Factory New", price: "$385.00", stattrak: true },
  { name: "Glock-18 | Fade", rarity: "Restricted", wear: "Factory New", price: "$1,250.00", stattrak: false },
  { name: "USP-S | Kill Confirmed", rarity: "Covert", wear: "Minimal Wear", price: "$62.40", stattrak: true },
];

const KNIVES = [
  { name: "Karambit | Crimson Web", rarity: "Covert", wear: "Minimal Wear", price: "$3,200.00", stattrak: false },
  { name: "Butterfly Knife | Fade", rarity: "Covert", wear: "Factory New", price: "$2,850.00", stattrak: false },
  { name: "M9 Bayonet | Doppler", rarity: "Covert", wear: "Factory New", price: "$1,680.00", stattrak: true },
  { name: "Bayonet | Tiger Tooth", rarity: "Covert", wear: "Factory New", price: "$520.00", stattrak: false },
];

const RIFLES = [
  { name: "AK-47 | Vulcan", rarity: "Covert", wear: "Factory New", price: "$128.50", stattrak: false },
  { name: "M4A1-S | Hyper Beast", rarity: "Covert", wear: "Field-Tested", price: "$42.80", stattrak: true },
  { name: "AK-47 | Redline", rarity: "Classified", wear: "Field-Tested", price: "$18.20", stattrak: false },
  { name: "SG 553 | Integrale", rarity: "Classified", wear: "Minimal Wear", price: "$8.40", stattrak: false },
];

const PISTOLS = [
  { name: "Desert Eagle | Kumicho Dragon", rarity: "Classified", wear: "Factory New", price: "$28.50", stattrak: false },
  { name: "Five-SeveN | Monkey Business", rarity: "Classified", wear: "Minimal Wear", price: "$15.80", stattrak: false },
  { name: "P250 | See Ya Later", rarity: "Covert", wear: "Factory New", price: "$52.00", stattrak: true },
  { name: "Tec-9 | Fuel Injector", rarity: "Classified", wear: "Factory New", price: "$32.50", stattrak: false },
];

const RECENT_TRADES = [
  { buyer: "n0thing", seller: "shroud", item: "AK-47 | Fire Serpent (FT)", price: "$842.50", time: "2 min ago" },
  { buyer: "f0rest", seller: "Hiko", item: "AWP | Asiimov (BS)", price: "$28.40", time: "5 min ago" },
  { buyer: "GeT_RiGhT", seller: "friberg", item: "Butterfly Knife | Fade (FN)", price: "$2,850.00", time: "12 min ago" },
  { buyer: "coldzera", seller: "s1mple", item: "M4A4 | Howl (FN)", price: "$6,800.00", time: "18 min ago" },
  { buyer: "device", seller: "dupreeh", item: "Desert Eagle | Blaze (FN)", price: "$385.00", time: "24 min ago" },
];

function rarityColor(rarity: string) {
  switch (rarity) {
    case "Contraband": return "text-[#e4ae39]";
    case "Covert": return "text-[#eb4b4b]";
    case "Classified": return "text-[#d32ce6]";
    case "Restricted": return "text-[#8847ff]";
    default: return "text-[var(--cs-text)]";
  }
}

function rarityBadgeVariant(rarity: string): "t" | "accent" | "ct" | "default" {
  switch (rarity) {
    case "Contraband": return "accent";
    case "Covert": return "t";
    case "Classified": return "ct";
    default: return "default";
  }
}

function SkinCard({ skin }: { skin: typeof FEATURED_SKINS[number] }) {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pt-3 pb-2">
        <div className="flex items-start justify-between mb-2">
          <span className={`cs-font-ui text-xs font-bold ${rarityColor(skin.rarity)}`}>
            {skin.name}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mb-3">
          <Badge variant={rarityBadgeVariant(skin.rarity)}>{skin.rarity}</Badge>
          <Badge variant="default">{skin.wear}</Badge>
          {skin.stattrak && <Badge variant="accent">ST</Badge>}
        </div>
        <div className="cs-font-hud text-lg text-[var(--cs-text-bright)] cs-text-shadow">
          {skin.price}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="buy" size="sm" className="flex-1">
          Add to Cart
        </Button>
        <Button variant="default" size="sm">
          Inspect
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function MarketplacePage() {
  const [stattrakOnly, setStattrakOnly] = useState(false);

  const filterSkins = (skins: typeof FEATURED_SKINS) =>
    stattrakOnly ? skins.filter((s) => s.stattrak) : skins;

  return (
    <div className="min-h-screen bg-[#111411]">
      {/* Header */}
      <header className="px-6 py-4 bg-[var(--cs-bg-secondary)] border-b-2 border-b-[var(--cs-border-dark)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <span className="cs-font-logo text-xl text-[var(--cs-hud-amber)] tracking-wider">
              SKIN MARKET
            </span>
            <Badge variant="vac">VAC Secured</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm">
              My Inventory
            </Button>
            <Button variant="buy" size="sm">
              Cart (0)
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search skins..." className="flex-1 max-w-md" />
          <Select defaultValue="all">
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Rarities</SelectItem>
              <SelectItem value="contraband">Contraband</SelectItem>
              <SelectItem value="covert">Covert</SelectItem>
              <SelectItem value="classified">Classified</SelectItem>
              <SelectItem value="restricted">Restricted</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-wear">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-wear">All Wear</SelectItem>
              <SelectItem value="fn">Factory New</SelectItem>
              <SelectItem value="mw">Minimal Wear</SelectItem>
              <SelectItem value="ft">Field-Tested</SelectItem>
              <SelectItem value="ww">Well-Worn</SelectItem>
              <SelectItem value="bs">Battle-Scarred</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="price-desc">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="newest">Newest Listed</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>
          <Toggle
            label="StatTrak"
            checked={stattrakOnly}
            onChange={(e) => setStattrakOnly(e.target.checked)}
          />
        </div>
      </header>

      <main className="p-6">
        {/* Flash sale alert */}
        <Alert variant="warning" title="Flash Sale" className="mb-6">
          50% off all Classified skins for the next 2 hours. Prices shown already reflect the discount.
        </Alert>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            label="Total Listings"
            value="24,847"
            change="+1,284 today"
            changeType="positive"
          />
          <StatCard
            label="Live Trades"
            value="3,421"
            change="+8.2% vs avg"
            changeType="positive"
          />
          <StatCard
            label="Avg Price"
            value="$142.80"
            change="-2.1% this week"
            changeType="negative"
          />
          <StatCard
            label="24h Volume"
            value="$1.2M"
            change="+15.4% vs yesterday"
            changeType="positive"
          />
        </div>

        {/* Skin tabs */}
        <Tabs defaultValue="featured" className="mb-6">
          <TabsList>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="knives">Knives</TabsTrigger>
            <TabsTrigger value="rifles">Rifles</TabsTrigger>
            <TabsTrigger value="pistols">Pistols</TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filterSkins(FEATURED_SKINS).map((skin) => (
                <SkinCard key={skin.name} skin={skin} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="knives">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filterSkins(KNIVES).map((skin) => (
                <SkinCard key={skin.name} skin={skin} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rifles">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filterSkins(RIFLES).map((skin) => (
                <SkinCard key={skin.name} skin={skin} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pistols">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filterSkins(PISTOLS).map((skin) => (
                <SkinCard key={skin.name} skin={skin} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Separator className="my-6" />

        {/* Recent trades */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Trades</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Buyer</TableHead>
                  <TableHead>Seller</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {RECENT_TRADES.map((trade, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar name={trade.buyer} team="ct" size="sm" />
                        <span>{trade.buyer}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar name={trade.seller} team="t" size="sm" />
                        <span>{trade.seller}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-[var(--cs-text-bright)]">
                      {trade.item}
                    </TableCell>
                    <TableCell className="cs-font-hud text-[var(--cs-hud-amber)]">
                      {trade.price}
                    </TableCell>
                    <TableCell className="text-[var(--cs-text-dim)]">
                      {trade.time}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
