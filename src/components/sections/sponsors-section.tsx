'use client';

import Image from 'next/image';
import { SPONSORS } from '@/lib/data';

export function SponsorsSection() {
  const row1 = SPONSORS.slice(0, 4);
  const row2 = SPONSORS.slice(4, 8);
  const row3 = SPONSORS.slice(8, 12);

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
                hover:shadow-blue-500/10
              "
            >
              <div className="relative w-full h-full">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="
                    object-contain
                    transition-all
                    duration-500
                    group-hover:scale-105
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
            Sponsors & Partners
          </h2>

          <p className="text-lg text-foreground/80 mt-3 max-w-4xl mx-auto">
            Proudly supported by sponsors and partners from our past editions
            and flagship initiatives. We’re always open to collaborating with
            organizations that share our vision for innovation, leadership and
            community impact.
          </p>

          <div className="w-24 h-[2px] bg-accent mx-auto mt-8 rounded-full" />
        </div>

        <div className="space-y-6">
          <SponsorRow sponsors={row1} />
          <SponsorRow sponsors={row2} reverse />
          <SponsorRow sponsors={row3} />
        </div>

        <p className="text-center text-foreground/60 mt-10">
          Interested in collaborating with 4C? We'd love to hear from you.
        </p>

      </div>
    </section>
  );
}
