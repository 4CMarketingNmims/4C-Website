'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './PageHeader.module.css';

export default function PageHeader({ eyebrow, title, body }) {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.eyebrow}`, {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
      gsap.from(`.${styles.titleWord}`, {
        y: 100,
        opacity: 0,
        stagger: 0.06,
        duration: 0.85,
        ease: 'power4.out',
        delay: 0.1,
      });
      gsap.from(`.${styles.body}`, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        delay: 0.5,
        ease: 'power3.out',
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.wrap} ref={root}>
      <div className={styles.glow} aria-hidden="true" />
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={`display ${styles.title}`}>
        {title.split(' ').map((w, i) => (
          <span key={i} className={styles.titleWord}>
            {w}
          </span>
        ))}
      </h1>
      {body ? <p className={styles.body}>{body}</p> : null}
    </section>
  );
}
