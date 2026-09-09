import Link from "next/link";
import { Label } from "@/components/site/Label";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 px-5 pb-16 sm:px-10 sm:pb-20 md:px-20 md:pb-24">
      <Label className="mb-8 block">03 / Selected work</Label>
      <div className="border-t border-border-strong">
        {projects.map((project) => {
          const isFlagship = project.hasCaseStudy;
          return (
            <div
              key={project.slug}
              className={`grid grid-cols-1 gap-2 border-b border-border py-6 sm:grid-cols-[200px_64px_1fr] sm:gap-6 ${
                isFlagship ? "py-7" : "py-6"
              }`}
            >
              <div
                className={`font-serif italic ${
                  isFlagship ? "text-xl sm:text-[23px]" : "text-lg text-faint sm:text-[21px]"
                }`}
              >
                {project.name}
              </div>
              <div
                className={`font-tracked text-[11px] uppercase tracking-[0.14em] ${
                  isFlagship ? "text-faint" : "text-disabled"
                }`}
              >
                {project.year}
              </div>
              {isFlagship ? (
                <div>
                  <p className="mb-3 max-w-[560px] text-base leading-relaxed text-ink-prose sm:text-[17px]">
                    {project.blurb}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="font-tracked text-[10px] uppercase tracking-[0.14em] text-faint">
                      {project.stack?.join(" · ")}
                    </span>
                    <Link
                      href={`/work/${project.slug}`}
                      className="font-tracked text-[10px] uppercase tracking-[0.14em] text-accent"
                    >
                      Case study →
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-faint sm:pt-[3px] sm:text-base">
                  {project.summary}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
