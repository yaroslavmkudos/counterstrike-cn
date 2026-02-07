"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./styles/cstrike.css";

interface ConsoleLine {
  text: string;
  type?: "info" | "warning" | "error" | "system" | "input";
}

interface ConsoleProps extends React.HTMLAttributes<HTMLDivElement> {
  lines: ConsoleLine[];
  onCommand?: (command: string) => void;
  title?: string;
}

const Console = React.forwardRef<HTMLDivElement, ConsoleProps>(
  ({ className, lines, onCommand, title = "Console", ...props }, ref) => {
    const [input, setInput] = React.useState("");
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, [lines]);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (input.trim()) {
        onCommand?.(input.trim());
        setInput("");
      }
    };

    const getLineColor = (type?: string) => {
      switch (type) {
        case "error":
          return "text-[var(--cs-hud-red)]";
        case "warning":
          return "text-[var(--cs-hud-amber)]";
        case "system":
          return "text-[var(--cs-accent)]";
        case "input":
          return "text-[var(--cs-text-bright)]";
        default:
          return "text-[var(--cs-text)]";
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-2xl bg-black/90 backdrop-blur-sm",
          "border-2 border-t-[var(--cs-border-light)] border-l-[var(--cs-border-light)]",
          "border-b-[var(--cs-border-dark)] border-r-[var(--cs-border-dark)]",
          className
        )}
        {...props}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-3 py-1 bg-[var(--cs-bg-secondary)] border-b border-b-[var(--cs-border-dark)]">
          <span className="cs-font-ui text-xs text-[var(--cs-text-title)]">
            {title}
          </span>
          <span className="cs-font-ui text-xs text-[var(--cs-text-dim)]">~</span>
        </div>

        {/* Output area */}
        <div
          ref={scrollRef}
          className="h-64 overflow-y-auto p-2 font-mono text-xs"
        >
          {lines.map((line, i) => (
            <div key={i} className={cn("leading-relaxed", getLineColor(line.type))}>
              {line.type === "input" && (
                <span className="text-[var(--cs-text-dim)] mr-1">]</span>
              )}
              <span className="cs-font-console">{line.text}</span>
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border-t border-t-[var(--cs-border-dark)] bg-black/50 px-2 py-1">
            <span className="cs-font-console text-xs text-[var(--cs-text-dim)] mr-1">
              ]
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent cs-font-console text-xs text-[var(--cs-text-bright)] outline-none"
              placeholder=""
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    );
  }
);
Console.displayName = "Console";

export { Console, type ConsoleLine, type ConsoleProps };
