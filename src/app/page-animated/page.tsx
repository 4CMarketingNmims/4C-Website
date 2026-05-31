import { ContactSection } from "@/components/sections/contact-section";
import { HeroSectionAnimated } from "@/components/sections/hero-section-animated";
import { EventsSection } from '@/components/sections/events-section';
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { WhatWeDoSection } from "@/components/sections/what-we-do-section";
import { WhoAreWeSection } from "@/components/sections/who-are-we-section";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function HomeAnimated() {
  return (
    <div className="flex flex-col">
      <HeroSectionAnimated />
      <TracingBeam>
        <WhoAreWeSection />
        <WhatWeDoSection />
        <EventsSection />
        <SponsorsSection />
      </TracingBeam>
      <ContactSection />
    </div>
  );
}
