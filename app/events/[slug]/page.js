'use client';

import { use } from 'react';
import Link from 'next/link';

const eventsData = {
  'wings-and-roots': {
    name: 'Wings & Roots',
    tagline: '3-Day Business & Marketing Strategy',
    body: 'Wings & Roots is a 3-day business and marketing competition where teams solve real-world industry challenges, develop innovative solutions, and present their ideas to industry experts and faculty.',
    images: ['/events/wings-and-roots/1.jpg', '/events/wings-and-roots/2.jpg', '/events/wings-and-roots/3.jpg', '/events/wings-and-roots/4.jpg', '/events/wings-and-roots/5.jpg', '/events/wings-and-roots/6.jpg']
  },
  'roulette': {
    name: '4C Roulette',
    tagline: 'A Reimagined FIFA Event',
    body: 'Roulette is a reimagined FIFA event that blends football, marketing strategy, and brand pitching into one dynamic competition. Designed to go beyond just gaming, it challenges participants to think like marketers, negotiate like brand managers, and then play like champions.',
    images: ['/events/roulette/1.jpg', '/events/roulette/2.jpg', '/events/roulette/3.jpg', '/events/roulette/4.jpg']
  },
  'bombaesquare': {
    name: 'Bombae Square',
    tagline: 'Cultural Side of 4C',
    body: 'Bombae Square is the cultural wing of 4C, celebrating creativity, talent, and artistic expression through engaging events, performances, and experiences that bring the campus community together.',
    images: ['/events/bombaesquare/1.jpeg', '/events/bombaesquare/2.jpeg', '/events/bombaesquare/3.jpeg', '/events/bombaesquare/4.jpeg', '/events/bombaesquare/5.jpeg', '/events/bombaesquare/6.jpeg']
  },
  'debattle': {
    name: 'DeBattle',
    tagline: 'Where Arguments Become Strategy',
    body: 'Forget everything you know about debate. DeBattle is a high-intensity head to head format where critical thinking meets live strategy. Participants don\'t just argue,they adapt, outmaneuver, and make split-second decisions under pressure.\n\nFast thinking. Cold strategy. Zero room for hesitation.',
    images: ['/events/debattle/1.jpg', '/events/debattle/2.jpg', '/events/debattle/3.jpg', '/events/debattle/4.jpg']
  }
};

export default function DynamicEventPage({ params }) {
  const unwrappedParams = use(params);
  const event = eventsData[unwrappedParams.slug];

  if (!event) {
    return <div style={{ background: '#040523', color: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Event not found.</div>;
  }

  const gridPositions = [
    { gridColumn: '1 / 2', gridRow: '1 / 2' },
    { gridColumn: '2 / 3', gridRow: '1 / 2' },
    { gridColumn: '3 / 5', gridRow: '1 / 2' },
    { gridColumn: '1 / 3', gridRow: '2 / 3' }
  ];

  return (
    <div style={{ backgroundColor: '#040523', color: '#F4F5FF', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Grid Wall Image Layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '20px',
        padding: '24px',
        opacity: 0.22,
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {event.images.map((imgSrc, i) => (
          <div key={i} style={{ ...gridPositions[i % gridPositions.length], position: 'relative', borderRadius: '16px', overflow: 'hidden', background: '#0A0B45', border: '1px solid rgba(255,255,255,0.05)' }}>
            <img 
              src={imgSrc} 
              alt="Dynamic backdrop segment" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop'; }}
            />
          </div>
        ))}
      </div>

      {/* Dark Ambient Vignette Overlap Filter */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(4, 5, 35, 0.3) 10%, rgba(4, 5, 35, 0.95) 85%)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Centered Descriptive Text Copy Layer */}
      <div style={{ position: 'relative', zIndex: 3, padding: '6vh 4vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1100px', textAlign: 'left' }}>
          <Link href="/events" style={{ color: '#3B6FFF', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>
            ➔ Back to Events
          </Link>
        </div>

        <div style={{ width: '100%', maxWidth: '780px', textAlign: 'center', margin: 'auto 0' }}>
          <h1 style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(48px, 9vw, 96px)', fontWeight: '800', color: '#F4F5FF', letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: '1.0' }}>
            {event.name}
          </h1>
          <p style={{ fontSize: 'clamp(14px, 1.8vw, 20px)', fontWeight: '600', color: '#8A2BFF', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '28px' }}>
            {event.tagline}
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: '1.75', color: '#D6C8FF', fontWeight: '400' }}>
            {event.body}
          </p>
        </div>

        <div style={{ height: '20px' }} />
      </div>
    </div>
  );
}