"use client";

import { LoadingScreen } from "@/components/ui/cscn/loading-screen";

export function LoadingScreenPreview() {
  return (
    <LoadingScreen
      serverName="dust2 24/7 | Competitive"
      mapName="de_dust2"
      progress={65}
      statusText="Parsing game data..."
    />
  );
}
