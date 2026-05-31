'use client';

import Image from 'next/image';
import { SPONSORS } from '@/lib/data';

export function SponsorsSection() {
  const third = Math.ceil(SPONSORS.length / 3);

  const row1 = SPONSORS.slice(0, third);
  const row2 = SPONSORS.slice(third, third * 2);
  const row3 = SPONSORS.slice(third * 2);

  const SponsorRow = ({
    sponsors,
    reverse = false,
  }: {
    sponsors: typeof SPONSORS;
    reverse?: boolean;
  }) => {
    const repeatedSponsors = [
      ...sponsors,
      ...sponsors,
      ...sponsors,
      ...sponsors,
      ...sponsors,
      ...sponsors,
    ];

    return (
      <div className="overflow-hidden w-full">
        <div
          className={`flex gap-6 min-w-max ${
            reverse ? 'marquee-right' : 'marquee-left'
          }`}
        >
          {repeatedSponsors.map((sponsor, idx) => (
            <div
              key={`${sponsor.name}-${idx}`}
              className="
                glass-card
                group
                flex
                items-center
                justify-center
                p-6
                h-32
                w-60
                flex-shrink-0
                transition-all
                duration-500
                hover:scale-105
                hover:border-accent/40
                hover:shadow-xl
                hover:shadow-accent/10
              "
            >
              <div className="relative w-full h-full">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="
                    object-contain
                    opacity-80
                    grayscale
                    transition-all
                    duration-500
                    group-hover:grayscale-0
                    group-hover:opacity-100
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="sponsors" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Trusted Sponsors & Partners
          </h2>

          <p className="text-lg text-foreground/80 mt-3 max-w-4xl mx-auto">
            Proudly supported by sponsors and partners from our past editions
            and flagship initiatives. We look forward to building meaningful
            collaborations with organizations that share our vision.
          </p>

          <div className="w-24 h-[2px] bg-accent mx-auto mt-8 rounded-full" />
        </div>

        <div className="space-y-6">
          <SponsorRow sponsors={row1} />
          <SponsorRow sponsors={row2} reverse />
          <SponsorRow sponsors={row3} />
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="
              inline-flex
              items-center
              px-8
              py-4
              rounded-xl
              bg-accent
              text-white
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
              hover:shadow-accent/20
            "
          >
            Partner With 4C →
          </a>
        </div>

      </div>
    </section>
  );
}
