
'use client';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CORE_MEMBERS, MENTORS, SUPER_CORE_MEMBERS, CREW } from '@/lib/data';
import Autoplay from "embla-carousel-autoplay";
const DEPARTMENTS = [
  {
    initials: "CRM",
    name: "Corporate Relations & Marketing",
    revealed: false,
    heads: ["", ""],
    subHeads: ["", ""],
  },
   {
    initials: "DC",
    name: "Digital Creatives",
    revealed: false,
    heads: [" Rithika Hodage ", " Seetansh "],
    subHeads: [" Parv ", " Shreya Bhuia "],
  },
    {
    initials: "IHC",
    name: "In-House Creatives",
    revealed: false,
    heads: [" Grisha Joshi ", " Sonakshi Prasad "],
    subHeads: [" Shaurrya Khandar ", " Tanushka Shah "],
  },
   {
    initials: "L&A",
    name: "Logistics & Administration",
    revealed: false,
    heads: [" Arnav Dhakad ", " Swayam Shah "],
    subHeads: [" Bhavya Dadhich ", " Palak Dave ", " Rahan Kakadiya "],
  },
    {
    initials: "P",
    name: "Photography",
    revealed: false,
    heads: [" Maanas Vinze ", " Yash Jain "],
    subHeads: [" Sachin Kumar ", " Vedang Mane "],
  },
    {
    initials: "PR",
    name: "Public Relations",
    revealed: false,
    heads: ["", ""],
    subHeads: ["", ""],
  },
  {
    initials: "SMCW",
    name: "Social Media & Content Writing",
    revealed: false,
    heads: ["", ""],
    subHeads: ["", ""],
  },
  {
    initials: "T&R",
    name: "Technicals & Research",
    revealed: false,
    heads: ["Aryan Kanungo", "Vir Dharia"],
    subHeads: ["Ridhi Singh", " Ashwin Upadhyay "],
  },
];
function TeamCard({ name, title, image }: { name: string; title: string; image: string }) {
  return (
    <div className="p-1 h-full">
      <div className="glass-card overflow-hidden text-center p-6 h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/[0.05] max-w-[250px] w-full mx-auto">

        {image ? (
          <div className="relative w-36 h-56 rounded-xl overflow-hidden mb-4 border-2 border-accent p-2 bg-black/10">
            <Image
              src={image}
              alt={name}
              data-ai-hint="person portrait"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 rounded-xl" />
          </div>
        ) : (
          <div className="w-24 h-24 rounded-full border-2 border-accent bg-accent/10 flex items-center justify-center mb-4 text-3xl font-bold text-accent">
            {name.charAt(0)}
          </div>
        )}

        <h3 className="text-xl font-headline font-bold text-white drop-shadow-lg">
          {name}
        </h3>

        <p className="text-accent drop-shadow-lg">
          {title}
        </p>

      </div>
    </div>
  );
}
export default function TeamPage() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-8">
      <section id="super-core" className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Super Core</h2>
          <p className="text-lg text-foreground/80 mt-2">The driving force behind 4C.</p>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            })
          ]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {SUPER_CORE_MEMBERS.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <TeamCard {...member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </section>

<section id="mentors" className="mb-24">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-headline font-bold">
      Advisory
    </h2>
    <p className="text-lg text-foreground/80 mt-2">
      Our guiding force.
    </p>
  </div>

  <Carousel
    plugins={[
      Autoplay({
        delay: 3000,
        stopOnInteraction: true,
      }),
    ]}
    opts={{
      align: 'start',
      loop: true,
    }}
    className="w-full"
  >
    <CarouselContent>
      {MENTORS.map((member, index) => (
        <CarouselItem
          key={index}
          className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
        >
          <TeamCard {...member} />
        </CarouselItem>
      ))}
    </CarouselContent>

    <CarouselPrevious className="hidden sm:flex" />
    <CarouselNext className="hidden sm:flex" />
  </Carousel>
</section>


<section id="crew" className="mb-24">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-headline font-bold">
      Crew
    </h2>
    <p className="text-lg text-foreground/80 mt-2">
      The backbone of our operations.
    </p>
  </div>

  <Carousel
    plugins={[
      Autoplay({
        delay: 3000,
        stopOnInteraction: true,
      }),
    ]}
    opts={{
      align: "start",
      loop: true,
    }}
    className="w-full"
  >
    <CarouselContent>
      {CREW.map((member, index) => (
        <CarouselItem
          key={index}
          className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
        >
          <TeamCard {...member} />
        </CarouselItem>
      ))}
    </CarouselContent>

    <CarouselPrevious className="hidden sm:flex" />
    <CarouselNext className="hidden sm:flex" />
  </Carousel>
</section>
      
<section id="results">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-headline font-bold">
      Core Recruitment Results
    </h2>

    <p className="text-lg text-foreground/80 mt-2">
      Department-wise results for the 2026–27 tenure.
    </p>
  </div>

  <Carousel
    plugins={[
      Autoplay({
        delay: 3500,
        stopOnInteraction: true,
      }),
    ]}
    opts={{
      align: "start",
      loop: true,
    }}
    className="w-full"
  >
    <CarouselContent>
      {DEPARTMENTS.map((department, index) => (
        <CarouselItem
          key={index}
          className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
        >
          <div className="p-1 h-full">
            <div className="glass-card p-6 min-h-[340px] flex flex-col items-center text-center">

              <div className="w-24 h-24 rounded-full border-2 border-accent bg-accent/10 flex items-center justify-center mb-5 text-2xl font-bold text-accent">
                {department.initials}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {department.name}
              </h3>

              {department.revealed ? (
                <div className="space-y-3 text-sm text-foreground/80">
                  <div>
                    <p className="font-semibold text-white">Heads</p>
                    {department.heads?.map((head, i) => (
                      <p key={i}>{head}</p>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-white">Sub Heads</p>
                    {department.subHeads?.map((subHead, i) => (
                      <p key={i}>{subHead}</p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <p className="text-accent font-semibold tracking-wide">
                    CLASSIFIED
                  </p>

                  <p className="text-foreground/50 mt-2">
                    COMING SOON
                  </p>
                </div>
              )}
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>

    <CarouselPrevious className="hidden sm:flex" />
    <CarouselNext className="hidden sm:flex" />
  </Carousel>
</section>
    </div>
  );
}
