'use client';

import { EVENTS_DATA } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

export function EventsSection() {
  const featuredEvent = EVENTS_DATA.find(
    (event) => event.slug === 'wings-and-roots-2025'
  );

  if (!featuredEvent) return null;

  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Featured Event
          </h2>
          <p className="text-lg text-foreground/80 mt-2">
            Our flagship leadership and marketing conclave.
          </p>
        </div>

        <div className="flex justify-center">
          <CardContainer className="inter-var w-full max-w-5xl">
            <CardBody className="glass-card relative group/card hover:shadow-lg hover:shadow-blue-500/[0.05] rounded-xl overflow-hidden border border-white/20 transition-all duration-500">

              <CardItem translateZ="50" className="w-full">
                <div className="relative aspect-[16/7]">
                  <Image
                    src={featuredEvent.images[0]}
                    alt={featuredEvent.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
              </CardItem>

              <div className="p-8">
                <CardItem
                  translateZ="60"
                  className="text-3xl font-headline font-bold mb-3 text-white"
                >
                  {featuredEvent.name}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-foreground/70 text-lg mb-6"
                >
                  {featuredEvent.description}
                </CardItem>

                <CardItem translateZ="50">
                  <Link
                    href={`/events/${featuredEvent.slug}`}
                    className="text-accent font-semibold text-lg hover:underline"
                  >
                    View Event Gallery →
                  </Link>
                </CardItem>
              </div>

            </CardBody>
          </CardContainer>
        </div>

      </div>
    </section>
  );
}
