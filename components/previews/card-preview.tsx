"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/cscn/card";
import { Button } from "@/components/ui/cscn/button";

export function CardPreview() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Server Info</CardTitle>
        <CardDescription>de_dust2 — Competitive</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="cs-font-ui text-xs text-[var(--cs-text)]">
          Players: 8/10 — Round 12 of 30
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="default" size="sm">Spectate</Button>
        <Button variant="buy" size="sm">Connect</Button>
      </CardFooter>
    </Card>
  );
}
