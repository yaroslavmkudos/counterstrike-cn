import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    template: "%s | counterstrike-cn",
    default: "counterstrike-cn — CS 1.6 UI Components",
  },
  description:
    "A collection of Counter-Strike 1.6 inspired UI components for modern web apps. Fully open source — copy, paste, customize.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <RootProvider>
          <div className="mx-auto max-w-[1400px] border-x border-[var(--border)]">
            <SiteHeader />
            {children}
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
