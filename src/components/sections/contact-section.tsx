'use client';

import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact-us" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/80 mt-2">
            We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">

          {/* Aryan */}
          <div className="glass-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-headline font-semibold">
                Aryan Thakkar
              </h3>
              <p className="text-foreground/70">
                President
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://wa.me/919820448705"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent/90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href="tel:+919820448705"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>
          </div>

          {/* Krish */}
          <div className="glass-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-headline font-semibold">
                Krish Sarkar
              </h3>
              <p className="text-foreground/70">
                Secretary
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://wa.me/919892721055"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent/90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href="tel:+919892721055"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>
          </div>

          {/* Madhav */}
          <div className="glass-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-headline font-semibold">
                Madhav Sahi
              </h3>
              <p className="text-foreground/70">
                Vice President Outreach
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://wa.me/919870215599"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent/90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href="tel:+919870215599"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>
          </div>

          {/* Email & Address */}
          <div className="glass-card p-6">
            <div className="space-y-6">

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h3 className="font-headline text-base font-semibold">
                    Email
                  </h3>
                  <a
                    href="mailto:4c.nmims@gmail.com"
                    className="text-foreground/80 hover:text-accent transition-colors"
                  >
                    4c.nmims@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h3 className="font-headline text-base font-semibold">
                    Address
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    4C - MPSTME,
                    <br />
                    Bhakti Vedant Marg,
                    <br />
                    Opp. Cooper Hospital,
                    <br />
                    Vile Parle West,
                    <br />
                    Mumbai, Maharashtra 400056
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
