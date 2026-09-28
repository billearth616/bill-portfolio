"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/data/site";
import { SocialIcons } from "@/components/site/SocialIcons";
import { ThemeToggle } from "@/components/site/ThemeToggle";

export function SiteHeader({ showBackLink = false }: { showBackLink?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border md:hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-base font-semibold tracking-tight" onClick={() => setOpen(false)}>
          Bill Selikem<span className="text-accent">.</span>
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded border border-border-default"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-8 border-t border-border px-5 py-8">
          <nav className="flex flex-col gap-5">
            {showBackLink && (
              <Link
                href="/#work"
                onClick={() => setOpen(false)}
                className="font-tracked text-[11px] uppercase tracking-[0.14em] text-muted"
              >
                ← All work
              </Link>
            )}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-tracked text-[11px] uppercase tracking-[0.14em] text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <SocialIcons />
          <div className="flex flex-col gap-3.5">
            <span className="font-tracked text-[9px] uppercase tracking-[0.14em] text-faint">
              Theme
            </span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
}
