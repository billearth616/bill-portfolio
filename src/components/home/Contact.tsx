import { Label } from "@/components/site/Label";
import { CV_HREF, SOCIALS } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="dot-grid scroll-mt-20 border-t border-border px-5 py-14 sm:px-10 md:px-16 md:py-16"
    >
      <Label className="mb-7 block">04 / Contact</Label>
      <h2 className="font-display mb-4 text-3xl font-medium sm:text-[38px]">
        Let&apos;s talk.
      </h2>
      <p className="mb-9 max-w-[520px] text-[17px] text-ink-prose sm:text-[19px]">
        The fastest way to reach me is email. I usually reply within a day.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
        <a
          href={SOCIALS.email}
          className="font-tracked w-fit border-b border-accent pb-1 text-[11px] uppercase tracking-[0.14em]"
        >
          bill.selikem@gmail.com
        </a>
        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noreferrer"
          className="font-tracked text-[11px] uppercase tracking-[0.14em] text-muted"
        >
          GitHub
        </a>
        <a
          href={SOCIALS.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-tracked text-[11px] uppercase tracking-[0.14em] text-muted"
        >
          LinkedIn
        </a>
        <a
          href={CV_HREF}
          className="font-tracked text-[11px] uppercase tracking-[0.14em] text-muted"
        >
          CV (PDF)
        </a>
      </div>
    </section>
  );
}
