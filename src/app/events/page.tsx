import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Explore flagship events conducted by 4C NMIMS including Wings & Roots, Roulette and DeBattle.',
};
import { EVENTS_DATA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function EventsPage() {
  const featuredEvent = EVENTS_DATA.find(
    (event) => event.slug === "wings-and-roots-2025"
  );

  const otherEvents = EVENTS_DATA.filter(
    (event) => event.slug !== "wings-and-roots-2025"
  );

  return (
    <div className="pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Our Events
        </h1>

        <p className="text-xl text-foreground/80 mt-3">
          Explore our workshops, events, and conferences.
        </p>
      </div>

      {/* Wings & Roots */}
      {featuredEvent && (
        <section className="mb-20">
          <div className="glass-card max-w-7xl mx-auto overflow-hidden rounded-3xl border border-white/10">

            <div className="grid lg:grid-cols-2 items-center">

              <div className="relative h-[320px] lg:h-[500px]">
                <Image
                  src={featuredEvent.images[0]}
                  alt={featuredEvent.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="p-8 lg:p-12">
                <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
                  4C's Flagship Event
                </p>

                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                  {featuredEvent.name}
                </h2>

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
        </section>
      )}

      {/* Other Event Cards */}
      <section className="pb-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {otherEvents.map((event) => (
            <CardContainer key={event.slug} className="inter-var h-full">
              <CardBody className="glass-card flex flex-col h-full rounded-xl overflow-hidden border border-white/20 hover:shadow-lg hover:shadow-blue-500/[0.03] transition-all duration-500">

                <CardItem translateZ="50" className="w-full">
                  <div className="relative aspect-video">
                    <Image
                      src={event.images[0]}
                      alt={event.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </CardItem>

                <div className="p-6 flex flex-col flex-grow">

                  <CardItem
                    translateZ="60"
                    className="text-xl font-headline font-bold mb-3 text-white"
                  >
                    {event.name}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-foreground/70 mb-6"
                  >
                    {event.description}
                  </CardItem>

                  <CardItem
                    translateZ="50"
                    className="mt-auto"
                  >
                    <span className="text-accent/80 font-semibold">
                      Event Archive Coming Soon
                    </span>
                  </CardItem>

                </div>

              </CardBody>
            </CardContainer>
          ))}

        </div>
      </section>

    </div>
  );
}
