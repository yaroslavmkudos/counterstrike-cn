"use client";

import Link from "next/link";
import "@/components/ui/cscn/styles/cstrike.css";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-b-[var(--cs-border-dark)] border-t-2 border-t-[var(--cs-border-light)] bg-[#4a5942]">
      <div className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="cs-font-logo text-xl tracking-wider text-[#ffde00]">
              CS 1.6
            </span>
            <span className="cs-font-ui text-sm text-[#dedfd6]">
              counterstrike-cn
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/docs"
              className="cs-font-ui text-sm text-[#ffcc00] hover:text-white no-underline transition-colors cs-text-shadow"
            >
              Docs
            </Link>
            <Link
              href="/docs/components"
              className="cs-font-ui text-sm text-[#ffcc00] hover:text-white no-underline transition-colors cs-text-shadow"
            >
              Components
            </Link>
            <Link
              href="/showcase"
              className="cs-font-ui text-sm text-[#ffcc00] hover:text-white no-underline transition-colors cs-text-shadow"
            >
              Showcase
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/yaroslavmkudos/counterstrike-cn"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-font-ui text-xs text-[#a0aa95] hover:text-[#ffcc00] no-underline transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
