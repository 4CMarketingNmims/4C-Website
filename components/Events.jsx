'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '@/components/PageHeader';

const customEvents = [
  {
    slug: 'roulette',
    name: '4C Roulette',
    tagline: 'A Reimagined FIFA Event',
    body: 'Roulette is a reimagined FIFA event that blends football, marketing strategy, and brand pitching into one dynamic competition. Designed to go beyond just gaming, it challenges participants to think like marketers, negotiate like brand managers, and then play like champions. Teams don\'t just receive fixed budgets they have to earn their auction money by convincing sponsors to back their team.',
  },
  {
    slug: 'debattle',
    name: 'DeBattle',
    tagline: 'Where Arguments Become Strategy',
    body: 'Forget everything you know about debate. DeBattle is a high-intensity head-to-head format where critical thinking meets live strategy. Participants don\'t just argue — they adapt, outmaneuver, and make split-second decisions under pressure.\n\nFast thinking. Cold strategy. Zero room for hesitation.',
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
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          }
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} style={{ backgroundColor: '#000', color: '#fff' }}>
      <PageHeader
        eyebrow="Events"
        title="WHAT WE'RE RUNNING"
        body="Every event below was planned, designed, and promoted by 4C — from a single department lecture to our own flagship competition."
      />

      {customEvents.map((event, sectionIdx) => (
        <section 
          key={event.slug}
          className="eventShowcaseSection"
          onClick={() => router.push(`/events/${event.slug}`)}
          style={{
            position: 'relative',
            minHeight: '55vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '8vh 6vw',
            overflow: 'hidden',
            borderTop: '1px solid var(--line)',
            background: sectionIdx % 2 === 0 ? '#040406' : '#08080c',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#0d0d14'}
          onMouseLeave={(e) => e.currentTarget.style.background = sectionIdx % 2 === 0 ? '#040406' : '#08080c'}
        >
          <div 
            style={{
              position: 'relative',
              zIndex: 3,
              maxWidth: '720px',
              marginLeft: sectionIdx % 2 === 0 ? '0' : 'auto',
              marginRight: sectionIdx % 2 === 0 ? 'auto' : '0',
              textAlign: sectionIdx % 2 === 0 ? 'left' : 'right',
              width: '100%'
            }}
          >
            <span 
              className="animateContent"
              style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
                display: 'block',
                marginBottom: '16px'
              }}
            >
              0{sectionIdx + 1} / Click to open dedicated page ➔
            </span>
            
            <h2 
              className="animateContent"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontSize: 'clamp(38px, 5.5vw, 68px)',
                fontWeight: '800',
                lineHeight: '0.95',
                color: 'var(--paper)',
                marginBottom: '8px',
                letterSpacing: '-0.02em'
              }}
            >
              {event.name}
            </h2>

            <p 
              className="animateContent"
              style={{
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                fontWeight: '600',
                color: 'var(--violet)',
                marginBottom: '24px',
                letterSpacing: '0.02em'
              }}
            >
              {event.tagline}
            </p>

            <div 
              className="animateContent"
              style={{
                borderLeft: sectionIdx % 2 === 0 ? '2px solid var(--line)' : 'none',
                borderRight: sectionIdx % 2 === 0 ? 'none' : '2px solid var(--line)',
                paddingLeft: sectionIdx % 2 === 0 ? '28px' : '0',
                paddingRight: sectionIdx % 2 === 0 ? '0' : '28px',
                marginTop: '24px'
              }}
            >
              <p style={{
                fontSize: 'clamp(15px, 1.35vw, 17px)',
                lineHeight: '1.8',
                color: 'var(--paper-dim)',
                fontWeight: '400',
                whiteSpace: 'pre-line'
              }}>
                {event.body}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}