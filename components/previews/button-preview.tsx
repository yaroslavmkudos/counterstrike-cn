"use client";

import { Button } from "@/components/ui/cscn/button";

export function ButtonPreview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="default">Default</Button>
        <Button variant="menu">Menu</Button>
        <Button variant="buy">Buy</Button>
        <Button variant="hud">HUD</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button disabled>Disabled</Button>
        <Button variant="buy" disabled>Disabled Buy</Button>
      </div>
    </div>
  );
}
