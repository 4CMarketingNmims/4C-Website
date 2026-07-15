import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import WhatIs4C from '@/components/WhatIs4C';
import Mission from '@/components/Mission';
import FlagshipEvent from '@/components/FlagshipEvent';
import Sponsors from '@/components/Sponsors';
import HomeScroller from '@/components/HomeScroller';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#1a1a1a', position: 'relative' }}>
      {/* Nav is fixed/floating (see Nav.module.css), so it isn't part of the
          normal document flow — it can live anywhere in the tree. Placing it
          first keeps it on top of the Hero background without extra z-index
          juggling. */}
      <Nav />

      {/* Hero background: the event-collage photo, darkened so it reads as
          part of the site's dark ink theme instead of a bright standalone
          image. Sized to exactly one viewport since Hero is now a plain
          100vh section (Nav no longer eats height out of it). */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, overflow: 'hidden' }}>
        <img
          src="/hero-bg.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            filter: 'grayscale(20%) contrast(1.05) brightness(0.85)',
          }}
        />
        {/* Dark gradient so the title/copy stay readable and the image
            blends smoothly into the solid --ink background below it */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.5) 35%, rgba(20,20,20,0.75) 75%, #1a1a1a 100%)',
          }}
        />
      </div>

      {/* HomeScroller is scoped only to the Home page's own sections, not
          the whole layout, so its scroll state never leaks onto other
          pages like About. */}
      <HomeScroller>
        <Hero />

        {/* Solid background wrapper to cover up the overflowing background image */}
        <div style={{ position: 'relative', zIndex: 2, backgroundColor: '#1a1a1a' }}>
          <WhatIs4C />
          <Mission />
          <FlagshipEvent />
          <Sponsors />
        </div>
      </HomeScroller>
    </main>
  );
}