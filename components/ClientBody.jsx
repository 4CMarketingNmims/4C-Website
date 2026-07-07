'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactModal from './ContactModal';

export default function ClientBody({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Re-measure ScrollTrigger after fonts/layout settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 300);

    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {children}
      <ContactModal />
    </>
  );
}
