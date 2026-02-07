"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

/* ===== Health Display ===== */
interface HealthProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

const Health = React.forwardRef<HTMLDivElement, HealthProps>(
  ({ className, value, max = 100, ...props }, ref) => {
    const isLow = value <= 25;
    const glowClass = isLow ? "cs-hud-glow-red" : "cs-hud-glow";

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        <span className={cn("text-2xl", glowClass)}>+</span>
        <span className={cn("cs-font-hud text-3xl tabular-nums", glowClass)}>
          {value}
        </span>
      </div>
    );
  }
);
Health.displayName = "Health";

/* ===== Armor Display ===== */
interface ArmorProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  hasHelmet?: boolean;
}

const Armor = React.forwardRef<HTMLDivElement, ArmorProps>(
  ({ className, value, hasHelmet = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        <span className="cs-hud-glow text-2xl">
          {hasHelmet ? "⛑" : "🛡"}
        </span>
        <span className="cs-font-hud text-3xl tabular-nums cs-hud-glow">
          {value}
        </span>
      </div>
    );
  }
);
Armor.displayName = "Armor";

/* ===== Ammo Display ===== */
interface AmmoProps extends React.HTMLAttributes<HTMLDivElement> {
  current: number;
  reserve: number;
  weapon?: string;
}

const Ammo = React.forwardRef<HTMLDivElement, AmmoProps>(
  ({ className, current, reserve, weapon, ...props }, ref) => {
    const isLow = current <= 5;
    const glowClass = isLow ? "cs-hud-glow-red" : "cs-hud-glow";

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        {weapon && (
          <span className="cs-font-ui text-xs text-[var(--cs-hud-amber)] mr-2 opacity-70">
            {weapon}
          </span>
        )}
        <span className={cn("cs-font-hud text-3xl tabular-nums", glowClass)}>
          {current}
        </span>
        <span className="cs-hud-glow text-lg mx-0.5">/</span>
        <span className="cs-font-hud text-xl tabular-nums cs-hud-glow opacity-80">
          {reserve}
        </span>
      </div>
    );
  }
);
Ammo.displayName = "Ammo";

/* ===== Money Display ===== */
interface MoneyProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
}

const Money = React.forwardRef<HTMLDivElement, MoneyProps>(
  ({ className, amount, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
      >
        <span className="cs-font-hud text-xl tabular-nums cs-hud-glow-green">
          ${amount.toLocaleString()}
        </span>
      </div>
    );
  }
);
Money.displayName = "Money";

/* ===== Timer Display ===== */
interface TimerProps extends React.HTMLAttributes<HTMLDivElement> {
  time: string;
  isLow?: boolean;
}

const Timer = React.forwardRef<HTMLDivElement, TimerProps>(
  ({ className, time, isLow = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center", className)}
        {...props}
      >
        <span
          className={cn(
            "cs-font-hud text-2xl tabular-nums",
            isLow ? "cs-hud-glow-red" : "cs-hud-glow"
          )}
        >
          {time}
        </span>
      </div>
    );
  }
);
Timer.displayName = "Timer";

/* ===== Full HUD Layout ===== */
interface HudProps extends React.HTMLAttributes<HTMLDivElement> {
  health: number;
  armor: number;
  hasHelmet?: boolean;
  ammoCurrent: number;
  ammoReserve: number;
  weapon?: string;
  money: number;
  time?: string;
  timerLow?: boolean;
}

const Hud = React.forwardRef<HTMLDivElement, HudProps>(
  (
    {
      className,
      health,
      armor,
      hasHelmet = false,
      ammoCurrent,
      ammoReserve,
      weapon,
      money,
      time = "1:45",
      timerLow = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full bg-black/70 p-4 backdrop-blur-sm",
          className
        )}
        {...props}
      >
        {/* Top row: Money + Timer */}
        <div className="flex items-center justify-between mb-4">
          <Money amount={money} />
          <Timer time={time} isLow={timerLow} />
        </div>

        {/* Bottom row: Health/Armor + Ammo */}
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-6">
            <Health value={health} />
            <Armor value={armor} hasHelmet={hasHelmet} />
          </div>
          <Ammo current={ammoCurrent} reserve={ammoReserve} weapon={weapon} />
        </div>
      </div>
    );
  }
);
Hud.displayName = "Hud";

export {
  Health,
  Armor,
  Ammo,
  Money,
  Timer,
  Hud,
  type HealthProps,
  type ArmorProps,
  type AmmoProps,
  type MoneyProps,
  type TimerProps,
  type HudProps,
};
