'use client';

import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Sponsors from '@/components/Sponsors';

export default function SponsorsPage() {
  useEffect(() => {
    // Two-stage wait: rAF fires after React's commit, the nested
    // setTimeout(0) defers until after the browser's first paint so
    // the grid is fully laid out before we measure.
    let timer;
    const raf = requestAnimationFrame(() => {
      timer = setTimeout(() => {
        const titleEl = document.querySelector('[class*="centerTitleContainer"]');
        if (!titleEl) return;

        const rect = titleEl.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        const elementCentre = absoluteTop + rect.height / 2;
        const viewportCentre = window.innerHeight / 2;
        const targetScroll = elementCentre - viewportCentre;

        window.scrollTo({ top: Math.max(0, targetScroll), behavior: 'instant' });
      }, 0);
    });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Nav />
      <div style={{ backgroundColor: '#060912', minHeight: '100vh' }}>
        <Sponsors />
      </div>
    </>
  );
}
