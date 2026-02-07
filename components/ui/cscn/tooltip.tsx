"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 px-3 py-1.5 cs-font-ui text-xs",
        "bg-[var(--cs-bg-dark)] text-[var(--cs-text)]",
        "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
        "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
        "shadow-lg cs-text-shadow",
        "animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
