'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '@/components/PageHeader';
const customEvents = [
  {
    slug: 'wings-and-roots',
    name: 'Wings & Roots',
    tagline: '3-Day Business & Marketing Strategy',
    body: 'Wings & Roots is a 3-day business and marketing competition where teams solve real-world industry challenges, develop innovative solutions, and present their ideas to industry experts and faculty.',
    logo: '/wnrlogo.png', // Main emblem transparent PNG
    bgGraphic: '/wnrbg.jpg' // Ambient background graphic with texturing
  },
  {
    slug: 'roulette',
    name: 'Roulette',
    tagline: 'A Reimagined FIFA Event',
    body: 'Roulette is a reimagined FIFA event that blends football, marketing strategy, and brand pitching into one dynamic competition.',
    logo: '/roulettelogo.png',
    bgGraphic: '/roulettebg.jpg'
  },
  {
    slug: 'bombaesquare',
    name: 'Bombae Square',
    tagline: 'Cultural Side of 4C',
    body: 'Bombae Square is the cultural wing of 4C, celebrating creativity, talent, and artistic expression through engaging events, performances, and experiences that bring the campus community together.',
    logo: '/bslogo.png',
    bgGraphic: '/bsbg.jpeg'
  },
  {
    slug: 'debattle',
    name: 'DeBattle',
    tagline: 'Where Arguments Become Strategy',
    body: 'DeBattle is our corporate debate competition where sharp minds clash, ideas evolve, and future leaders are made.',
    logo: '/debattlelogo.png',
    bgGraphic: '/debattlebg.jpeg'
  }
];

export default function Events() {
  const root = useRef(null);
  const router = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.eventShowcaseSection').forEach((section) => {
        gsap.from(section.querySelectorAll('.animateContent'), {
          y: 35,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%' }
        });

        gsap.from(section.querySelectorAll('.animateLogoPanel'), {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 70%' }
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} style={{ backgroundColor: '#020212', color: '#F4F5FF', minHeight: '100vh' }}>
      <PageHeader
        eyebrow="Events"
        title="WHAT WE'RE RUNNING"
        body="Every event we run is designed to challenge, inspire, and connect. From business strategy competitions to cultural showcases, each event is a unique opportunity to learn, grow, and make an impact."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px 0px' }}>
        {(customEvents || []).map((event, sectionIdx) => {
          const isLogosOnLeft = sectionIdx % 2 === 0; 
          
          return (
            <section 
              key={event.slug}
              className="eventShowcaseSection"
              onClick={() => router.push(`/events/${event.slug}`)}
              style={{
                position: 'relative',
                width: '100%',
                minHeight: '440px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                overflow: 'hidden',
                // Uses the textured full-width background panel setup from image_810943.jpg
                backgroundImage: event.bgGraphic ? `url(${event.bgGraphic})` : 'none',
                backgroundColor: '#050624',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                border: '1px solid rgba(214, 200, 255, 0.05)',
                borderRadius: '8px'
              }}
            >
              {/* Subtle interactive hover highlight layer */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(138, 43, 255, 0.05), transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1
                }}
                className="hoverOverlay"
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
              />

              {/* Centered bounding flex box */}
              <div
                style={{
                  maxWidth: '1440px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: isLogosOnLeft ? 'row-reverse' : 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  zIndex: 2,
                  padding: '40px 6%'
                }}
              >
                {/* 1. Content Text Block */}
                <div 
                  style={{ 
                    width: '50%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    padding: '20px 40px'
                  }}
                >
                  <span className="animateContent" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#3B6FFF', display: 'block', marginBottom: '14px' }}>
                    0{sectionIdx + 1} / CLICK TO EXPLORE SHOWCASE ➔
                  </span>
                  <h2 className="animateContent" style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(36px, 4.2vw, 56px)', fontWeight: '800', lineHeight: '1.1', color: '#F4F5FF', marginBottom: '12px' }}>
                    {event.name}
                  </h2>
                  <p className="animateContent" style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', fontWeight: '700', color: '#8A2BFF', marginBottom: '22px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {event.tagline}
                  </p>
                  <div className="animateContent" style={{ borderLeft: '2px solid rgba(138, 43, 255, 0.4)', paddingLeft: '20px' }}>
                    <p style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', lineHeight: '1.65', color: '#C5CAEC', fontWeight: '400' }}>
                      {event.body}
                    </p>
                  </div>
                </div>

                {/* 2. Isolated Logo Floating Container (Centered completely) */}
                <div 
                  className="animateLogoPanel"
                  style={{ 
                    width: '50%',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    padding: '20px'
                  }}
                >
                  {event.logo && (
  <img 
    src={event.logo} 
    alt={`${event.name} emblem`} 
    style={{ 
      width: '100%',
      // Adjusts maxWidth specifically for bs; keeps others at 360px or 450px
      maxWidth: event.slug === 'bombaesquare' ? '300px' : (event.slug === 'wings-and-roots' ? '450px' : '360px'),
      height: 'auto',
      objectFit: 'contain',
      // Explicitly centers the logo within its container
      margin: '0 auto', 
      filter: 'drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.6))',
      transition: 'transform 0.4s cubic-bezier(0.2, 1, 0.3, 1)'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  />
)}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}