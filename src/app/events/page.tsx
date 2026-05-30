import { EVENTS_DATA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function EventsPage() {
  const wingsAndRoots = EVENTS_DATA.find(
    (event) => event.slug === "wings-and-roots-2025"
  );

  const upcomingEvents = EVENTS_DATA.filter(
    (event) => event.slug !== "wings-and-roots-2025"
  );

  return (
    <AuroraBackground>
      <div className="pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Our Events
          </h1>
          <p className="text-xl text-foreground/80 mt-2">
            Explore our workshops, events, and conferences.
          </p>
        </div>

        {/* Wings & Roots Centered */}
        {wingsAndRoots && (
          <div className="flex justify-center mb-16">
            <CardContainer className="inter-var max-w-md w-full">
              <CardBody className="glass-card relative group/card hover:shadow-lg hover:shadow-blue-500/[0.03] w-full h-auto rounded-xl overflow-hidden border border-white/20 transition-all duration-500 ease-in-out">
                <CardItem translateZ="50" className="w-full">
                  <div className="relative aspect-video">
                    <Image
                      src={wingsAndRoots.images[0]}
                      alt={wingsAndRoots.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </CardItem>

                <div className="p-6">
                  <CardItem
                    translateZ="60"
                    className="text-xl font-headline font-bold mb-2 text-white"
                  >
                    {wingsAndRoots.name}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-foreground/70 mb-4"
                  >
                    {wingsAndRoots.description}
                  </CardItem>

                  <CardItem translateZ="50">
                    <Link
                      href={`/events/${wingsAndRoots.slug}`}
                      className="text-accent font-semibold hover:underline"
                    >
                      View Details →
                    </Link>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        )}

        {/* Upcoming Events */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingEvents.map((event) => (
            <CardContainer key={event.slug} className="inter-var">
              <CardBody className="glass-card relative group/card hover:shadow-lg hover:shadow-blue-500/[0.03] w-full h-auto rounded-xl overflow-hidden border border-white/20 transition-all duration-500 ease-in-out">
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
                    <span className="text-accent/70 font-semibold">
                      Details To Be Announced
                    </span>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </AuroraBackground>
  );
}
