'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Bars.module.css';

export default function Bars({ data }) {
  const root = useRef(null);
  const max = Math.max(...data.map((d) => d.count));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray(`.${styles.fill}`).forEach((el, i) => {
        gsap.to(el, {
          width: el.dataset.pct + '%',
          duration: 1.1,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.wrap} ref={root}>
      {data.map((d) => (
        <div key={d.label} className={styles.row}>
          <span className={styles.label}>{d.label}</span>
          <div className={styles.track}>
            <div
              className={styles.fill}
              data-pct={(d.count / max) * 100}
            />
          </div>
          <span className={styles.count}>{d.count}</span>
        </div>
      ))}
    </div>
  );
}
