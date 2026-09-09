import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/data/site";
import { SocialIcons } from "@/components/site/SocialIcons";
import { ThemeToggle } from "@/components/site/ThemeToggle";

export function SiteRail({ showBackLink = false }: { showBackLink?: boolean }) {
  return (
    <aside className="hidden w-[340px] shrink-0 flex-col gap-9 border-r border-border px-7 py-10 md:sticky md:top-0 md:flex md:h-dvh">
      <div className="flex flex-col gap-3.5">
        <div className="relative h-11 w-11 overflow-hidden rounded border border-border-default bg-surface-muted">
          <Image src="/bill-photo.jpg" alt="Bill Deyegbe" fill sizes="44px" className="object-cover" />
        </div>
        <div className="font-display text-base font-semibold tracking-tight">
          Bill Deyegbe<span className="text-accent">.</span>
        </div>
      </div>

      <nav className="flex flex-col gap-3">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-tracked text-[11px] uppercase tracking-[0.14em] text-muted hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {showBackLink && (
        <Link
          href="/#work"
          className="font-tracked text-[10px] uppercase tracking-[0.14em] text-muted hover:text-ink"
        >
          ← All work
        </Link>
      )}

      <SocialIcons />

      <div className="mt-auto flex flex-col gap-3.5">
        <span className="font-tracked text-[9px] uppercase tracking-[0.14em] text-faint">
          Theme
        </span>
        <ThemeToggle />
        <span className="font-tracked text-[9px] uppercase tracking-[0.14em] text-disabled">
          Accra, Ghana
        </span>
      </div>
    </aside>
  );
}
