import { Label } from "@/components/site/Label";

const CAPABILITIES = [
  {
    title: "Full-stack web apps",
    body: "Next.js App Router, TypeScript, server components, end to end.",
  },
  {
    title: "Auth, roles & row-level security",
    body: "Multi-role systems where each user sees exactly what they should.",
  },
  {
    title: "Dashboards & admin tools",
    body: "The internal screens a business actually runs on.",
  },
  {
    title: "Responsive UI",
    body: "Built mobile-first, tested at every width.",
  },
];

export function WhatIDo() {
  return (
    <section className="px-5 pb-16 sm:px-10 sm:pb-20 md:px-16 md:pb-24">
      <Label className="mb-8 block">02 / What I do</Label>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-8">
        {CAPABILITIES.map((cap) => (
          <div key={cap.title} className="border-t border-border-strong pt-4">
            <div className="font-display mb-2 text-lg font-medium">
              {cap.title}
            </div>
            <div className="text-[15px] text-muted sm:text-base">{cap.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
