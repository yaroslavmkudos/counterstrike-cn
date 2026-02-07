"use client";

import { Radar } from "@/components/ui/cscn/radar";

export function RadarPreview() {
  return (
    <Radar
      size={180}
      mapName="de_dust2"
      dots={[
        { x: 0, y: 0, team: "self" },
        { x: 0.4, y: -0.3, team: "ct" },
        { x: 0.2, y: 0.5, team: "ct" },
        { x: -0.5, y: -0.2, team: "t" },
        { x: -0.3, y: 0.6, team: "t" },
      ]}
    />
  );
}
