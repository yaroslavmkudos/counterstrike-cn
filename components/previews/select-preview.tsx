"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/cscn/select";

export function SelectPreview() {
  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <Select defaultValue="dust2">
        <SelectTrigger>
          <SelectValue placeholder="Select map..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dust2">de_dust2</SelectItem>
          <SelectItem value="inferno">de_inferno</SelectItem>
          <SelectItem value="nuke">de_nuke</SelectItem>
          <SelectItem value="mirage">de_mirage</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose weapon..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Rifles</SelectLabel>
            <SelectItem value="ak47">AK-47 — $2500</SelectItem>
            <SelectItem value="m4a1">M4A1 — $3100</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Pistols</SelectLabel>
            <SelectItem value="deagle">Desert Eagle — $650</SelectItem>
            <SelectItem value="usp">USP — $500</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
