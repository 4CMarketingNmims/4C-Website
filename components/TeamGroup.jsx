'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './TeamGroup.module.css';

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamGroup({ label, members, alt }) {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.card}`, {
        y: 36,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${styles.grid}`, start: 'top 85%' },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className={`${styles.group} ${alt ? styles.groupAlt : ''}`} ref={root}>
      <div className={styles.groupLabel}>
        {label}
        <span className={styles.groupLine} />
      </div>

      <div className={`${styles.grid} ${members.length === 7 ? styles.sevenGrid : ''}`}>
        {members.map((m) => (
          <div key={m.name} className={styles.card}>
            <div className={styles.avatar}>{initials(m.name)}</div>
            <h3 className={styles.name}>{m.name}</h3>
            <p className={styles.role}>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}