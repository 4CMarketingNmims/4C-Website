import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import WhatIs4C from '@/components/WhatIs4C';
import Mission from '@/components/Mission';
import FlagshipEvent from '@/components/FlagshipEvent';
import Sponsors from '@/components/Sponsors';
import LiquidEther from '@/components/ui/LiquidEther';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#1a1a1a', position: 'relative' }}>
      {/* LiquidEther background for the top section (made taller to ensure it covers Nav, hidden by bottom content) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '140vh', zIndex: 0 }}>
        <LiquidEther
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Hero sizes its own box to (100vh - Nav's known height) via a plain
          CSS calc() in Hero.module.css, so Hero + Nav always add up to
          exactly one screen with Nav flush on the bottom edge. Nav is a
          plain sibling here (not nested inside Hero) so its sticky range
          spans the whole page instead of just the first screen. */}
      <Hero />
      <Nav />

      {/* Solid background wrapper to cover up the overflowing LiquidEther background */}
      <div style={{ position: 'relative', zIndex: 2, backgroundColor: '#1a1a1a' }}>
        <WhatIs4C />
        <Mission />
        <FlagshipEvent />
        <Sponsors />
      </div>
    </main>
  );
}