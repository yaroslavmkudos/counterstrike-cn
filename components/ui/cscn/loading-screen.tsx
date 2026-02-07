"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ProgressBar } from "./progress-bar";
import "./styles/cstrike.css";

interface LoadingScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  mapName?: string;
  serverName?: string;
  progress?: number;
  statusText?: string;
}

const LoadingScreen = React.forwardRef<HTMLDivElement, LoadingScreenProps>(
  (
    {
      className,
      mapName = "de_dust2",
      serverName = "Counter-Strike Server",
      progress = 0,
      statusText = "Connecting...",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col items-center justify-center",
          "w-full aspect-video max-w-2xl",
          "bg-black",
          className
        )}
        {...props}
      >
        {/* CS 1.6 Logo */}
        <div className="mb-8">
          <h1 className="cs-font-logo text-4xl text-[var(--cs-hud-amber)] cs-text-shadow tracking-widest">
            COUNTER-STRIKE
          </h1>
        </div>

        {/* Server name */}
        <div className="mb-2">
          <span className="cs-font-ui text-sm text-[var(--cs-text)] cs-text-shadow">
            {serverName}
          </span>
        </div>

        {/* Map name */}
        <div className="mb-6">
          <span className="cs-font-ui text-xs text-[var(--cs-text-secondary)]">
            Map: {mapName}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-72">
          <ProgressBar
            value={progress}
            variant="loading"
            showPercentage={false}
          />
        </div>

        {/* Status text */}
        <div className="mt-3">
          <span className="cs-font-ui text-xs text-[var(--cs-text-dim)] cs-text-shadow">
            {statusText}
          </span>
        </div>

        {/* Bottom corners */}
        <div className="absolute bottom-3 left-3">
          <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
            Build 4554
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="cs-font-ui text-[10px] text-[var(--cs-text-dim)]">
            Protocol 48
          </span>
        </div>
      </div>
    );
  }
);
LoadingScreen.displayName = "LoadingScreen";

export { LoadingScreen, type LoadingScreenProps };
