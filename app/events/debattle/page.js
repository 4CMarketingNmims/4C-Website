'use client';

import Link from 'next/link';

export default function DeBattlePage() {
  const images = [
    '/events/debattle/1.jpg',
    '/events/debattle/2.jpg',
    '/events/debattle/3.jpg',
    '/events/debattle/4.jpg',
    '/events/debattle/5.jpg',
    '/events/debattle/6.jpg',
  ];

  const gridPositions = [
    { gridColumn: '1 / 2', gridRow: '1 / 2' },
    { gridColumn: '2 / 3', gridRow: '1 / 2' },
    { gridColumn: '3 / 5', gridRow: '1 / 2' },
    { gridColumn: '1 / 3', gridRow: '2 / 3' },
    { gridColumn: '3 / 4', gridRow: '2 / 3' },
    { gridColumn: '4 / 5', gridRow: '2 / 3' },
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
              alt="DeBattle production tile" 
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
            DeBattle
          </h1>
          <p style={{ fontSize: 'clamp(14px, 2vw, 20px)', fontWeight: '600', color: '#7000ff', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '32px' }}>
            Where Arguments Become Strategy
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.85)', fontWeight: '400', textShadow: '0 2px 12px rgba(0,0,0,0.7)', whiteSpace: 'pre-line' }}>
            Forget everything you know about debate. DeBattle is a high-intensity head-to-head format where critical thinking meets live strategy. Participants don\'t just argue — they adapt, outmaneuver, and make split-second decisions under pressure.{"\n\n"}Fast thinking. Cold strategy. Zero room for hesitation.
          </p>
        </div>

        {/* Layout counter-balance anchor */}
        <div style={{ height: '20px' }} />
      </div>

    </div>
  );
}