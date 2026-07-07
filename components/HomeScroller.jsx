'use client';

import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HomeScroller.module.css';

export default function HomeScroller({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Scope ScrollTrigger to this element only for triggers created while
    // it's mounted, so sections outside (FooterHero/Footer) keep using the
    // window/document scroller untouched.
    const onScroll = () => {
      window.dispatchEvent(
        new CustomEvent('homescroll', { detail: { y: el.scrollTop } })
      );
      ScrollTrigger.update();
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={styles.snapContainer} ref={ref} id="home-scroller" data-scroller="home">
      {children}
    </div>
  );
}
