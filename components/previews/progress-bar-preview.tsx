"use client";

import { ProgressBar } from "@/components/ui/cscn/progress-bar";

export function ProgressBarPreview() {
  return (
    <div className="flex flex-col gap-4 max-w-md">
      <ProgressBar label="Default" value={72} />
      <ProgressBar label="Loading" value={45} variant="loading" />
      <ProgressBar label="Download" value={88} variant="download" />
    </div>
  );
}
