'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutSection } from '@/data/site';
import styles from './About.module.css';

export default function About() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.titleWord}`, {
        y: 110,
        opacity: 0,
        stagger: 0.06,
        duration: 0.85,
        ease: 'power4.out',
        scrollTrigger: { trigger: `.${styles.title}`, start: 'top 78%' },
      });
      gsap.from(`.${styles.body}`, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        scrollTrigger: { trigger: `.${styles.body}`, start: 'top 82%' },
      });
      gsap.from(`.${styles.imageFrame}`, {
        scale: 0.92,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${styles.imageFrame}`, start: 'top 80%' },
      });

      gsap.from(`.${styles.valuesTitle}`, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: 'power4.out',
        scrollTrigger: { trigger: `.${styles.valuesTitle}`, start: 'top 80%' },
      });
      gsap.from(`.${styles.valueCard}`, {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${styles.valuesGrid}`, start: 'top 82%' },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <section className={styles.section}>
        <div className={styles.layout}>
          <div>
            <p className={styles.eyebrow}>{aboutSection.eyebrow}</p>
            <h2 className={`display ${styles.title}`}>
              {aboutSection.title.split(' ').map((w, i) => (
                <span key={i} className={styles.titleWord}>
                  {w}
                </span>
              ))}
            </h2>
            <p className={styles.body}>{aboutSection.body}</p>
          </div>

          <div className={styles.imageFrame}>
            <div className={styles.imagePlaceholder}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                <rect x="6" y="10" width="44" height="32" rx="3" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="19" cy="22" r="4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M10 38 L22 26 L30 32 L38 22 L48 34" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
              <span style={{ fontSize: 12, letterSpacing: '0.08em' }}>TEAM PHOTO</span>
            </div>
            <div className={styles.imageTag}>
              <span className={styles.imageTagVal}>6</span>
              <span className={styles.imageTagLabel}>Years running</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesWrap}>
        <p className={styles.valuesEyebrow}>How we work</p>
        <h2 className={`display ${styles.valuesTitle}`}>
          Three things we hold every team to
        </h2>

        <div className={styles.valuesGrid}>
          {aboutSection.values.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueCopy}>{v.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
