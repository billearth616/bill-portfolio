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
    <div className="mx-auto flex min-h-dvh max-w-[1440px] flex-col md:flex-row">
      <SiteRail showBackLink={showBackLink} />
      <div className="min-w-0 flex-1">
        <SiteHeader showBackLink={showBackLink} />
        {children}
      </div>
    </div>
  );
}
