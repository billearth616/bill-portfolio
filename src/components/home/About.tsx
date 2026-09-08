import { Label } from "@/components/site/Label";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 pb-16 sm:px-10 sm:pb-20 md:px-16 md:pb-24">
      <Label className="mb-8 block">01 / About</Label>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <div className="font-display text-xl leading-snug md:text-[25px]">
          A developer who spent a year teaching 100+ others how to do it.
        </div>
        <div className="text-[17px] leading-relaxed text-ink-prose sm:text-[19px]">
          <p className="mb-5">
            I&apos;m a full-stack developer in Accra, Ghana. Over the last
            year I trained more than 100 developers at GI-KACE across four
            classes, and I&apos;m finishing an MSc in Computer Science at the
            University of Ghana.
          </p>
          <p>
            Between the two I build production web applications — most
            recently a logistics platform running a real shipping operation.
            I care about the parts users never see: clean data models,
            access control that actually holds, and interfaces that stay
            fast as the data grows.
          </p>
        </div>
      </div>
    </section>
  );
}
