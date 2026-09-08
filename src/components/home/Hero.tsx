import Image from "next/image";
import { CV_HREF, SOCIALS } from "@/data/site";

export function Hero() {
  return (
    <section className="dot-grid px-5 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_300px] md:gap-14">
        <div>
          <p className="font-tracked mb-5 text-[11px] uppercase tracking-[0.14em] text-accent">
            Full-stack developer — Accra, Ghana
          </p>
          <h1 className="font-display mb-6 text-[34px] font-medium leading-[1.15] tracking-tight sm:text-[40px] md:text-[48px]">
            I build web apps that hold up when real users show up.
          </h1>
          <p className="mb-9 max-w-[520px] text-[17px] leading-relaxed text-ink-prose sm:text-[19px]">
            Next.js and Supabase — authentication, role-based access,
            row-level security, and the admin tools that sit on top.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={SOCIALS.email}
              className="font-tracked rounded bg-ink px-6 py-3.5 text-center text-[11px] uppercase tracking-[0.14em] text-bg"
            >
              Get in touch
            </a>
            <a
              href={CV_HREF}
              className="font-tracked rounded border border-border-strong px-6 py-3.5 text-center text-[11px] uppercase tracking-[0.14em]"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="relative mx-auto h-[240px] w-[200px] overflow-hidden rounded border border-border-card bg-surface-muted sm:h-[300px] sm:w-[260px] md:mx-0 md:h-[360px] md:w-[300px]">
          <Image
            src="/bill-photo.jpg"
            alt="Bill Deyegbe"
            fill
            sizes="(min-width: 768px) 300px, (min-width: 640px) 260px, 200px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
