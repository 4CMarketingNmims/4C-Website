'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const contacts = [
  {
    name: 'Aryan Thakkar',
    role: 'President',
    phone: '9820448705',
  },
  {
    name: 'Krish Sarkar',
    role: 'Secretary',
    phone: '9892721055',
  },
  {
    name: 'Madhav Sahi',
    role: 'Vice President Outreach',
    phone: '9870215599',
  },
];

export function ContactSection() {
  return (
    <section id="contact-us" className="pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/80 mt-2">
            We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">

          {/* Contact Directory */}
          <div className="glass-card p-8 rounded-3xl">

            <div className="space-y-6">

              {contacts.map((contact, index) => (
                <div key={contact.name}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>
                      <h3 className="text-xl font-bold">
                        {contact.name}
                      </h3>

                      <p className="text-foreground/70 text-sm mt-1">
                        {contact.role}
                      </p>
                    </div>

                    <div className="flex gap-3">

                      <a
                        href={`https://wa.me/91${contact.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-xl
                          bg-accent
                          hover:bg-accent/90
                          transition-all
                          text-sm
                          font-medium
                        "
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        WhatsApp
                      </a>

                      <a
                        href={`tel:+91${contact.phone}`}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-xl
                          border
                          border-white/20
                          hover:bg-white/10
                          transition-all
                          text-sm
                          font-medium
                        "
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>

                    </div>
                  </div>

                  {index !== contacts.length - 1 && (
                    <div className="mt-6 border-t border-white/10" />
                  )}
                </div>
              ))}

            </div>
          </div>

          {/* Email & Address */}
          <div className="glass-card p-8 rounded-3xl">

            <div className="grid md:grid-cols-2 gap-10">

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1" />

                <div>
                  <h3 className="font-headline text-xl font-semibold">
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

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1" />

                <div>
                  <h3 className="font-headline text-xl font-semibold">
                    Address
                  </h3>

                  <p className="text-foreground/80 leading-relaxed">
                    4C – MPSTME
                    <br />
                    Bhakti Vedant Marg
                    <br />
                    Opp. Cooper Hospital
                    <br />
                    Vile Parle West
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
