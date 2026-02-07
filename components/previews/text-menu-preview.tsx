"use client";

import { TextMenu } from "@/components/ui/cscn/text-menu";

export function TextMenuPreview() {
  return (
    <TextMenu
      title="Vote Menu"
      items={[
        { key: "1", label: "Change Map" },
        { key: "2", label: "Restart Round" },
        { key: "3", label: "Kick Player" },
        { key: "4", label: "Scramble Teams" },
        { key: "5", label: "Pause Match", disabled: true },
      ]}
    />
  );
}
