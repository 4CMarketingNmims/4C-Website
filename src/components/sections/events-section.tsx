'use client';

import Image from 'next/image';
import Link from 'next/link';

export function FeaturedEventSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card max-w-5xl mx-auto overflow-hidden rounded-3xl border border-white/10">
          <div className="grid lg:grid-cols-2 items-center">
            
            <div className="relative h-[300px] lg:h-full min-h-[400px]">
              <Image
                src="/events/wings-and-roots.webp"
                alt="Wings and Roots"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 lg:p-12">
              <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
                Flagship Event
              </p>

              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                Wings & Roots 2025
              </h2>

              <p className="text-lg text-foreground/80 mb-8">
                Our flagship leadership and marketing conclave that brings
                together students, industry experts and innovators to solve
                real-world business challenges.
              </p>

              <Link
                href="/events/wings-and-roots-2025"
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
