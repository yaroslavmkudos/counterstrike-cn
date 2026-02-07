"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "cs-font-ui inline-flex h-9 w-full items-center justify-between px-3 py-1 text-sm",
      "bg-[var(--cs-bg-control)] text-[var(--cs-text)] cursor-pointer",
      "border-2 border-t-[var(--cs-border-dark)] border-l-[var(--cs-border-dark)]",
      "border-b-[var(--cs-border-light)] border-r-[var(--cs-border-light)]",
      "outline-none focus:border-t-[var(--cs-accent)] focus:border-l-[var(--cs-accent)]",
      "focus:border-b-[var(--cs-accent-secondary)] focus:border-r-[var(--cs-accent-secondary)]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[placeholder]:text-[var(--cs-text-dim)]",
      className
    )}
    {...props}
  >
    <span className="truncate">{children}</span>
    <SelectPrimitive.Icon asChild>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="shrink-0 ml-2"
      >
        <path fill="var(--cs-text-secondary)" d="M6 8L1 3h10z" />
      </svg>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden",
        "bg-[var(--cs-bg)] text-[var(--cs-text)]",
        "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
        "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
        "shadow-2xl",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "cs-font-ui px-2 py-1.5 text-[10px] text-[var(--cs-text-dim)] uppercase tracking-wider",
      className
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "cs-font-ui relative flex w-full cursor-pointer select-none items-center py-1.5 pl-6 pr-2 text-sm",
      "text-[var(--cs-text)] outline-none transition-none",
      "hover:bg-[var(--cs-bg-selection)] hover:text-[var(--cs-text-bright)]",
      "focus:bg-[var(--cs-bg-selection)] focus:text-[var(--cs-text-bright)]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-1.5 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <svg width="10" height="10" viewBox="0 0 10 10">
          <path
            d="M1.5 5.5L4 8l5-6"
            stroke="var(--cs-text-bright)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(
      "-mx-1 my-1 h-px bg-[var(--cs-border-dark)]",
      className
    )}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
