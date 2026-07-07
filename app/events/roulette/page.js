'use client';

import Link from 'next/link';

export default function RoulettePage() {
  const images = [
    '/events/roulette/1.jpg',
    '/events/roulette/2.jpg',
    '/events/roulette/3.jpg',
    '/events/roulette/4.jpg',
    '/events/roulette/5.jpg',
    '/events/roulette/6.jpg',
  ];

  // Self-contained grid positions for the structural wall layout
  const gridPositions = [
    { gridColumn: '1 / 2', gridRow: '1 / 2' }, // Card 1
    { gridColumn: '2 / 3', gridRow: '1 / 2' }, // Card 2
    { gridColumn: '3 / 5', gridRow: '1 / 2' }, // Card 3 (wide)
    { gridColumn: '1 / 3', gridRow: '2 / 3' }, // Card 4 (wide)
    { gridColumn: '3 / 4', gridRow: '2 / 3' }, // Card 5
    { gridColumn: '4 / 5', gridRow: '2 / 3' }, // Card 6
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* 1. Immersive Combined Photo Layout Wall forced natively via inline CSS Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '16px',
        padding: '16px',
        opacity: 0.35,
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {images.map((imgSrc, i) => (
          <div 
            key={i} 
            style={{
              ...gridPositions[i],
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: '#08080c'
            }}
          >
            <img 
              src={imgSrc} 
              alt="Roulette production tile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop'; }}
            />
          </div>
        ))}
      </div>

      {/* 2. Dark Vignette Filter Layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.95) 90%)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />

      {/* 3. Foreground Centered Content Layer */}
      <div style={{ position: 'relative', zIndex: 3, padding: '6vh 4vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Back navigation */}
        <div style={{ width: '100%', maxWidth: '1100px', textAlign: 'left' }}>
          <Link href="/events" style={{ color: '#00f3ff', fontSize: '14px', textDecoration: 'none', fontWeight: '500', letterSpacing: '0.05em' }}>
            ➔ Back to All Events
          </Link>
        </div>

        {/* Centered text descriptions block */}
        <div style={{ width: '100%', maxWidth: '780px', textAlign: 'center', margin: 'auto 0' }}>
          <h1 style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(54px, 10vw, 110px)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.03em', lineHeight: '0.9', textTransform: 'capitalize', marginBottom: '16px' }}>
            Roulette
          </h1>
          <p style={{ fontSize: 'clamp(14px, 2vw, 20px)', fontWeight: '600', color: '#7000ff', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '32px' }}>
            A Reimagined FIFA Event
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.85)', fontWeight: '400', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
            Roulette is a reimagined FIFA event that blends football, marketing strategy, and brand pitching into one dynamic competition. Designed to go beyond just gaming, it challenges participants to think like marketers, negotiate like brand managers, and then play like champions. Teams don't just receive fixed budgets they have to earn their auction money by convincing sponsors to back their team.
          </p>
        </div>

        {/* Layout counter-balance anchor */}
        <div style={{ height: '20px' }} />
      </div>

    </div>
  );
}