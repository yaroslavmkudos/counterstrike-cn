"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

interface RadarDot {
  x: number; // -1 to 1 (relative to center)
  y: number; // -1 to 1
  team: "ct" | "t" | "self";
  label?: string;
}

interface RadarProps extends React.HTMLAttributes<HTMLDivElement> {
  dots?: RadarDot[];
  size?: number;
  mapName?: string;
}

const Radar = React.forwardRef<HTMLDivElement, RadarProps>(
  ({ className, dots = [], size = 160, mapName, ...props }, ref) => {
    const center = size / 2;
    const radius = size / 2 - 4;

    return (
      <div
        ref={ref}
        className={cn("relative inline-block", className)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="drop-shadow-lg"
        >
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="rgba(0, 0, 0, 0.75)"
            stroke="var(--cs-border-light)"
            strokeWidth="2"
          />

          {/* Grid lines */}
          <line
            x1={center}
            y1={4}
            x2={center}
            y2={size - 4}
            stroke="var(--cs-border-dark)"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <line
            x1={4}
            y1={center}
            x2={size - 4}
            y2={center}
            stroke="var(--cs-border-dark)"
            strokeWidth="0.5"
            opacity="0.5"
          />

          {/* Inner ring */}
          <circle
            cx={center}
            cy={center}
            r={radius * 0.5}
            fill="none"
            stroke="var(--cs-border-dark)"
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* Player dots */}
          {dots.map((dot, i) => {
            const dotX = center + dot.x * radius * 0.85;
            const dotY = center + dot.y * radius * 0.85;

            let fill: string;
            let dotSize: number;
            switch (dot.team) {
              case "self":
                fill = "#ffffff";
                dotSize = 4;
                break;
              case "ct":
                fill = "var(--cs-team-ct)";
                dotSize = 3;
                break;
              case "t":
                fill = "var(--cs-team-t)";
                dotSize = 3;
                break;
            }

            return (
              <g key={i}>
                {dot.team === "self" ? (
                  <>
                    {/* Self indicator - cross shape */}
                    <line
                      x1={dotX - 5}
                      y1={dotY}
                      x2={dotX + 5}
                      y2={dotY}
                      stroke={fill}
                      strokeWidth="2"
                    />
                    <line
                      x1={dotX}
                      y1={dotY - 5}
                      x2={dotX}
                      y2={dotY + 3}
                      stroke={fill}
                      strokeWidth="2"
                    />
                  </>
                ) : (
                  <circle cx={dotX} cy={dotY} r={dotSize} fill={fill} />
                )}
              </g>
            );
          })}
        </svg>

        {/* Map name label */}
        {mapName && (
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
            <span className="cs-font-ui text-[8px] text-[var(--cs-text-dim)]">
              {mapName}
            </span>
          </div>
        )}
      </div>
    );
  }
);
Radar.displayName = "Radar";

export { Radar, type RadarDot, type RadarProps };
