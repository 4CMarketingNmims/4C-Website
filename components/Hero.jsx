'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.css';

export default function Hero() {
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    });

    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.8,
    })
      .from(
        headingRef.current.children,
        {
          y: 60,
          opacity: 0,
          stagger: 0.08,
          duration: 0.7,
        },
        '-=0.4'
      )
      .from(
        descRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.3'
      )
      .from(
        statsRef.current.children,
        {
          y: 30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5,
        },
        '-=0.2'
      );
  }, []);

  return (
    <section className={styles.hero}>

      <div className={styles.grid} />

      <img
        ref={logoRef}
        src="/logo-transparent.png"
        alt="4C"
        className={styles.logo}
      />

      <div ref={headingRef} className={styles.heading}>
        <span>THE MARKETING CELL</span>
        <span>OF NMIMS MPSTME</span>
      </div>

      <p ref={descRef} className={styles.description}>
        Creating the campaigns, events and experiences that shape campus life.
      </p>

      <div ref={statsRef} className={styles.stats}>

        <div>
          <h2>100+</h2>
          <p>Members</p>
        </div>

        <div>
          <h2>17</h2>
          <p>Years</p>
        </div>

        <div>
          <h2>2400+</h2>
          <p>Participants</p>
        </div>

        <div>
          <h2>370+</h2>
          <p>Universities</p>
        </div>

      </div>

      <div className={styles.scroll}>
        Scroll
      </div>

    </section>
  );
}
