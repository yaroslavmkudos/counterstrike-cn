"use client";

import { previewRegistry } from "@/components/previews";
import "@/components/ui/cscn/styles/cstrike.css";

export function ComponentPreview({ name }: { name: string }) {
  const Preview = previewRegistry[name];
  if (!Preview) return null;

  return (
    <div className="not-prose my-6">
      <div className="mb-2">
        <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)] uppercase tracking-wider">
          Interactive Preview
        </span>
      </div>
      <div className="bg-[var(--cs-bg-darkest)] border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)] border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)] p-6">
        <Preview />
      </div>
    </div>
  );
}
