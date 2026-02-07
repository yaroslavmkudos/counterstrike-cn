"use client";

import { Hud } from "@/components/ui/cscn/hud";

export function HudPreview() {
  return (
    <Hud
      health={85}
      armor={100}
      hasHelmet
      ammoCurrent={20}
      ammoReserve={90}
      weapon="AK-47"
      money={4750}
      time="1:23"
    />
  );
}
