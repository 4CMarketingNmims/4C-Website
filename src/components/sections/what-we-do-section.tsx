import { Lightbulb, Rocket, Users } from "lucide-react";

const activities = [
  {
    icon: <Rocket className="w-10 h-10 text-accent" />,
    title: "Mission",
    description:
      "To empower the next generation of marketing professionals through hands-on experience, mentorship, and real-world application. We create opportunities for growth through projects, industry-led workshops, and expert guidance, preparing students to confidently tackle the evolving challenges in marketing.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-accent" />,
    title: "Vision",
    description:
      "Creating a future where creativity and technology unite to solve marketing’s toughest problems. We inspire collaboration across disciplines, encourage data-driven approaches, and foster innovation, driving positive change in how marketing solutions are developed and delivered.",
  },
  {
    icon: <Users className="w-10 h-10 text-accent" />,
    title: "Values",
    description:
      "Integrity and curiosity guide our journey. We promote inclusivity, collaboration, and ethical leadership, enabling every participant to learn, grow, and excel. Our commitment is to support each other and build a dynamic, resilient marketing community.",
  },
];

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="pt-16 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Our Mission
          </h2>

          <p className="text-lg text-foreground/80 mt-2">
            Collect, Connect, Contest, Commence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">

          {activities.map((activity) => (
            <div
              key={activity.title}
              className="
                glass-card
                rounded-2xl
                p-6 md:p-8
                border border-white/10
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-blue-500/[0.05]
              "
            >
              <div className="mb-5 flex justify-center md:justify-start">
                {activity.icon}
              </div>

              <h3 className="text-2xl font-headline font-semibold mb-3 text-white text-center md:text-left">
                {activity.title}
              </h3>

              <p className="text-foreground/70 leading-relaxed text-center md:text-left">
                {activity.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
