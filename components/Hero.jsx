'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import styles from './Hero.module.css';

export default function Hero() {
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const scrollRef = useRef(null); 

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
          opacity: 0,
          y: 60,
          stagger: 0.08,
          duration: 0.7,
        },
        '-=0.4'
      )
      .from(
        descRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        '-=0.3'
      )
      .from(
        statsRef.current.children,
        {
          opacity: 0,
          y: 30,
          stagger: 0.08,
          duration: 0.5,
        },
        '-=0.2'
      )
      .from(
        scrollRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        '-=0.2'
      );

    gsap.to(scrollRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 1,
    });
  }, []);

  return (
    <section className={styles.hero}>

      <div className={styles.grid}></div>

      <div className={styles.glow}></div>

      <div ref={logoRef} className={styles.logoWrapper}>
        <Image
          src="/4c-logo.png"
          alt="4C"
          width={180}
          height={180}
          priority
          className={styles.logo}
        />
      </div>

      <div ref={headingRef} className={styles.heading}>
        <span>THE MARKETING CELL</span>
        <span>OF NMIMS MPSTME</span>
      </div>

      <p ref={descRef} className={styles.description}>
        The creative force behind NMIMS MPSTME's biggest marketing experiences.
      </p>

      <div ref={statsRef} className={styles.stats}>

        <div>
          <h2>2008</h2>
          <p>Established</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Members</p>
        </div>

        <div>
          <h2>2400+</h2>
          <p>Participants</p>
        </div>

        <div>
          <h2>930+</h2>
          <p>Teams</p>
        </div>

        <div>
          <h2>370+</h2>
          <p>Universities</p>
        </div>

      </div>

      <div ref={scrollRef} className={styles.scroll}>
        ↓ Scroll
      </div>

    </section>
  );
}
