import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/site/SiteChrome";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Label } from "@/components/site/Label";
import { caseStudies } from "@/data/case-studies";
import { SOCIALS } from "@/data/site";
import Link from "next/link";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  return (
    <SiteChrome showBackLink>
      <header className="dot-grid px-5 py-12 sm:px-10 sm:py-14 md:px-20 md:py-16">
        <Label className="mb-7 block">Work / {study.name}</Label>
        <p className="font-tracked mb-5 text-[11px] uppercase tracking-[0.14em] text-accent">
          {study.kicker}
        </p>
        <h1 className="font-display mb-6 max-w-3xl text-[28px] font-medium leading-[1.2] sm:text-[34px] md:text-[42px]">
          {study.title}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink-prose sm:text-xl">
          {study.intro}
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 px-5 pb-12 sm:px-10 xl:grid-cols-4 md:px-20 md:pb-14">
        {study.meta.map((m) => (
          <div key={m.label} className="rounded border border-border bg-surface p-4">
            <div className="font-tracked mb-1.5 text-[9px] uppercase tracking-[0.14em] text-faint">
              {m.label}
            </div>
            <div className={`text-sm ${m.accent ? "text-accent" : ""}`}>{m.value}</div>
          </div>
        ))}
      </div>

      <div className="px-5 pb-12 sm:px-10 md:px-20 md:pb-16">
        <div className="flex h-[220px] items-center justify-center rounded border border-border-card bg-surface-muted sm:h-[320px] md:h-[460px]">
          <span className="font-tracked text-center text-[11px] uppercase tracking-[0.14em] text-faint">
            [ {study.heroCaption} ]
          </span>
        </div>
      </div>

      <section className="px-5 pb-12 sm:px-10 md:px-20 md:pb-16">
        <Label className="mb-6 block">01 / The problem</Label>
        <div className="max-w-[660px] text-lg leading-relaxed text-ink-body sm:text-[19px]">
          {study.problem.map((p, i) => (
            <p key={i} className={i < study.problem.length - 1 ? "mb-5" : ""}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-10 md:px-20 md:pb-16">
        <Label className="mb-8 block">02 / What I built</Label>
        <div className="flex flex-col gap-9">
          {study.built.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,300px)_1fr] sm:gap-8"
            >
              <div className="flex h-36 items-center justify-center rounded border border-border-card bg-surface-muted sm:h-[180px]">
                <span className="font-tracked text-[10px] uppercase tracking-[0.14em] text-faint">
                  [ {item.caption} ]
                </span>
              </div>
              <div>
                <div className="font-display mb-2 text-lg font-medium sm:text-xl">
                  {item.title}
                </div>
                <p className="max-w-[520px] text-base leading-relaxed text-ink-prose sm:text-[17px]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-10 md:px-20 md:pb-16">
        <Label className="mb-6 block">03 / How it&apos;s built</Label>
        <div className="max-w-[660px] text-lg leading-relaxed text-ink-body sm:text-[19px]">
          {study.howBuilt.map((p, i) => (
            <p key={i} className={i < study.howBuilt.length - 1 ? "mb-5" : ""}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-10 md:px-20 md:pb-16">
        <Label className="mb-6 block">04 / Outcome</Label>
        <div className="max-w-[660px] text-lg leading-relaxed text-ink-body sm:text-[19px]">
          {study.outcome.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-4 border-t border-border px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-20">
        <Link href="/#work" className="font-tracked text-[11px] uppercase tracking-[0.14em] text-muted">
          ← All work
        </Link>
        <a href={SOCIALS.email} className="font-tracked text-[11px] uppercase tracking-[0.14em]">
          Get in touch →
        </a>
      </div>

      <SiteFooter />
    </SiteChrome>
  );
}
