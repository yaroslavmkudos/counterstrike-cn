"use client";

import { Input } from "@/components/ui/cscn/input";

export function InputPreview() {
  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <Input placeholder="Enter server IP..." />
      <Input placeholder="Search players..." />
      <Input disabled placeholder="Disabled input" />
    </div>
  );
}
