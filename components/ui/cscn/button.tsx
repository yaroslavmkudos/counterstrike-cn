"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

const buttonVariants = cva(
  [
    "cs-font-ui cs-text-shadow inline-flex items-center justify-center",
    "cursor-pointer select-none whitespace-nowrap",
    "transition-none",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--cs-bg)] text-[var(--cs-text-control)]",
          "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
          "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
          "hover:text-[var(--cs-text-menu-hover)]",
          "active:border-t-[var(--cs-border-dark)] active:border-l-[var(--cs-border-dark)]",
          "active:border-b-[var(--cs-border-light)] active:border-r-[var(--cs-border-light)]",
          "active:text-[var(--cs-text-menu-active)]",
        ].join(" "),
        menu: [
          "bg-transparent text-[var(--cs-text-menu)] border-none",
          "hover:text-[var(--cs-text-menu-hover)]",
          "active:text-[var(--cs-text-menu-active)]",
          "justify-start",
        ].join(" "),
        buy: [
          "bg-[var(--cs-bg-secondary)] text-[var(--cs-text-control)]",
          "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
          "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
          "hover:bg-[var(--cs-bg)] hover:text-[var(--cs-text-bright)]",
          "active:border-t-[var(--cs-border-dark)] active:border-l-[var(--cs-border-dark)]",
          "active:border-b-[var(--cs-border-light)] active:border-r-[var(--cs-border-light)]",
        ].join(" "),
        hud: [
          "bg-transparent text-[var(--cs-hud-amber)] border-none",
          "cs-hud-glow",
          "hover:brightness-125",
          "active:brightness-75",
        ].join(" "),
        destructive: [
          "bg-[#3a1a1a] text-[var(--cs-team-t)]",
          "border-2 border-t-[#663333] border-l-[#663333]",
          "border-b-[#1a0a0a] border-r-[#1a0a0a]",
          "hover:text-white",
          "active:border-t-[#1a0a0a] active:border-l-[#1a0a0a]",
          "active:border-b-[#663333] active:border-r-[#663333]",
        ].join(" "),
      },
      size: {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-7 px-3 py-1 text-xs",
        lg: "h-11 px-6 py-3 text-base",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
