'use client';

import Image from 'next/image';
import Link from 'next/link';
import { EVENTS_DATA } from '@/lib/data';

export function EventsSection() {
  const featuredEvent = EVENTS_DATA.find(
    (event) => event.slug === 'wings-and-roots-2025'
  );

  if (!featuredEvent) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Featured Event
          </h2>

          <p className="text-lg text-foreground/80 mt-2">
            The flagship experience of 4C.
          </p>
        </div>

        {/* Event Card */}
        <div className="glass-card max-w-5xl mx-auto overflow-hidden rounded-3xl border border-white/10">
          <div className="grid lg:grid-cols-2 items-center">

            <div className="relative h-[300px] lg:h-full min-h-[400px]">
              <Image
                src={featuredEvent.images[0]}
                alt={featuredEvent.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 lg:p-12">
              <h3 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                {featuredEvent.name}
              </h3>

              <p className="text-lg text-foreground/80 mb-8">
                {featuredEvent.description}
              </p>

              <Link
                href={`/events/${featuredEvent.slug}`}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:opacity-90 transition"
              >
                View Gallery →
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
