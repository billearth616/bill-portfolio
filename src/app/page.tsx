import { SiteChrome } from "@/components/site/SiteChrome";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StatusStrip } from "@/components/home/StatusStrip";
import { Hero } from "@/components/home/Hero";
import { StatCards } from "@/components/home/StatCards";
import { About } from "@/components/home/About";
import { WhatIDo } from "@/components/home/WhatIDo";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <SiteChrome>
      <StatusStrip />
      <Hero />
      <StatCards />
      <About />
      <WhatIDo />
      <SelectedWork />
      <Contact />
      <SiteFooter />
    </SiteChrome>
  );
}
