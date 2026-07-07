'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { heroSection } from '@/data/site';
import styles from './Hero.module.css';

export default function Hero() {
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Massive text slams up
      tl.fromTo(
        textRef.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.4 }
      )
      // Reveal subtitle
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8'
      );
    });

    return () => ctx.revert();
  }, []);

  const subtitleText = heroSection?.subtitle || "Where creativity meets technology to redefine marketing for the digital age.";

  return (
    <section className={styles.section} id="hero">
      
      {/* Top Section: Massive Text Flush to Top */}
      <div className={styles.massiveTextWrapper}>
        <h1 className={styles.massiveText} ref={textRef}>
          {heroSection.titlePrefix}<img src={heroSection.logoSrc} alt="4C" className={styles.heroLogo} />{heroSection.titleSuffix}
        </h1>
      </div>

      {/* Bottom Section: Subtitle */}
      <div className={styles.bottomZone}>
        <div className={styles.subtitleClip}>
          <p className={styles.subtitle} ref={subtitleRef}>
            {subtitleText}
          </p>
        </div>
      </div>

    </section>
  );
}