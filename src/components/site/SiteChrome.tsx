import type { ReactNode } from "react";
import { SiteRail } from "@/components/site/SiteRail";
import { SiteHeader } from "@/components/site/SiteHeader";

export function SiteChrome({
  children,
  showBackLink = false,
}: {
  children: ReactNode;
  showBackLink?: boolean;
}) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-[1440px] flex-col lg:flex-row 2xl:max-w-[1600px]">
      <SiteRail showBackLink={showBackLink} />
      <div className="min-w-0 flex-1">
        <SiteHeader showBackLink={showBackLink} />
        {children}
      </div>
      <aside className="hidden w-[280px] shrink-0 border-l border-border 2xl:sticky 2xl:top-0 2xl:block 2xl:h-dvh" />
    </div>
  );
}
