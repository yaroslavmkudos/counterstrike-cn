"use client";

import { Badge } from "@/components/ui/cscn/badge";

export function BadgePreview() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="ct">CT Side</Badge>
      <Badge variant="t">T Side</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="vac">VAC Secured</Badge>
    </div>
  );
}
