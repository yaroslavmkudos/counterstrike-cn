"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex border-b-2 border-b-[var(--cs-border-dark)] bg-[var(--cs-bg-secondary)]",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "cs-font-ui text-xs px-4 py-2 cursor-pointer transition-none",
      "border-r border-r-[var(--cs-border-dark)]",
      "text-[var(--cs-text-dim)] hover:text-[var(--cs-text)]",
      "data-[state=active]:bg-[var(--cs-bg)] data-[state=active]:text-[var(--cs-text-bright)]",
      "data-[state=active]:border-b-2 data-[state=active]:border-b-[var(--cs-bg)]",
      "data-[state=active]:mb-[-2px]",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("p-4 bg-[var(--cs-bg)]", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
