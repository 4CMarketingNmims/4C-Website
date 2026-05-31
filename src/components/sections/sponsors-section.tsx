'use client';

import Image from 'next/image';
import { SPONSORS } from '@/lib/data';

export function SponsorsSection() {
  const row1 = SPONSORS.filter((_, i) => i % 3 === 0);
  const row2 = SPONSORS.filter((_, i) => i % 3 === 1);
  const row3 = SPONSORS.filter((_, i) => i % 3 === 2);

  const SponsorRow = ({
    sponsors,
    reverse = false,
  }: {
    sponsors: typeof SPONSORS;
    reverse?: boolean;
  }) => (
    <div className="overflow-hidden">
      <div
        className={`flex gap-6 w-max ${
          reverse ? 'marquee-right' : 'marquee-left'
        }`}
      >
        {[...sponsors, ...sponsors].map((sponsor, idx) => (
          <div
            key={`${sponsor.name}-${idx}`}
            className="glass-card flex items-center justify-center p-6 h-28 w-52 flex-shrink-0 hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-full">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="sponsors" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Sponsors & Partners
          </h2>

          <p className="text-lg text-foreground/80 mt-3 max-w-3xl mx-auto">
            Proudly supported by our sponsors and partners from previous editions
            of our events. We look forward to collaborating with new
            organizations for our upcoming initiatives.
          </p>
        </div>

        <div className="space-y-6">
          <SponsorRow sponsors={row1} />
          <SponsorRow sponsors={row2} reverse />
          <SponsorRow sponsors={row3} />
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:opacity-90 transition"
          >
            Become a Partner →
          </a>
        </div>

      </div>
    </section>
  );
}
