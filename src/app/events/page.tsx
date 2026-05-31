import { EVENTS_DATA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function EventsPage() {
  const featuredEvent = EVENTS_DATA.find(
    (event) => event.slug === "wings-and-roots-2025"
  );

  const otherEvents = EVENTS_DATA.filter(
    (event) => event.slug !== "wings-and-roots-2025"
  );

  return (
    <AuroraBackground>
      <div className="pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Our Events
          </h1>
          <p className="text-xl text-foreground/80 mt-2">
            Explore our workshops, events, and conferences.
          </p>
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <section className="mb-24">
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
          </section>
        )}

        {/* Other Events */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Other Events
            </h2>

            <p className="text-foreground/70 mt-2">
              More experiences from 4C.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {otherEvents.map((event) => (
              <CardContainer key={event.slug} className="inter-var">
                <CardBody className="glass-card relative group/card hover:shadow-lg hover:shadow-blue-500/[0.03] rounded-xl overflow-hidden border border-white/20 transition-all duration-500">

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

                  <div className="p-6">
                    <CardItem
                      translateZ="60"
                      className="text-xl font-headline font-bold mb-2 text-white"
                    >
                      {event.name}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="40"
                      className="text-foreground/70 mb-4"
                    >
                      {event.description}
                    </CardItem>

                    <CardItem translateZ="50">
                      <span className="text-accent/80 font-semibold">
                        Media Gallery Coming Soon
                      </span>
                    </CardItem>
                  </div>

                </CardBody>
              </CardContainer>
            ))}
          </div>
        </section>

      </div>
    </AuroraBackground>
  );
}
