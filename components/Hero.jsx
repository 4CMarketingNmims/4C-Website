'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { heroSection } from '@/data/site';
import styles from './Hero.module.css';

export default function Hero() {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        logoRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          statsRef.current ? statsRef.current.children : [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          '-=0.4'
        );
    });

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const heroEl = document.getElementById('hero');
    const nextEl = heroEl?.nextElementSibling;
    if (!nextEl) return;

    const scroller = document.getElementById('home-scroller');
    if (scroller && scroller.contains(nextEl)) {
      scroller.scrollTo({ top: nextEl.offsetTop, behavior: 'smooth' });
    } else {
      nextEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.section} id="hero">
      <div className={styles.centerStack}>
        <div className={styles.logoMark} ref={logoRef}>
          <img src={heroSection.logoSrc} alt="4C" className={styles.logoImg} />
        </div>

        <h1 className={styles.title} ref={titleRef}>
          {heroSection.titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h1>

        <a
          href="https://4cnmims.in/apply"
          rel="noopener noreferrer"
          className={styles.applyButton}
          ref={subtitleRef}
        >
          Apply for Executive Recruitment
        </a>

        <div className={styles.statsRow} ref={statsRef}>
          {heroSection.stats.map((stat) => (
            <div key={stat.label} className={styles.statBlock}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={styles.scrollCue}
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <span className={styles.scrollArrow}>↓</span>
        <span className={styles.scrollLabel}>Scroll</span>
      </button>
    </section>
  );
}
