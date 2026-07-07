'use client';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { flagshipSection } from '@/data/site';
import styles from './FlagshipEvent.module.css';

export default function FlagshipEvent() {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initialize GSAP positioning
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    }
  }, []);

  const handleMouseMove = (e) => {
    if (cursorRef.current && isHovered) {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section className={styles.section} id="flagship" onMouseMove={handleMouseMove}>
      <div className={styles.layout}>
        
        {/* Left Side: Logo Punch */}
        <Link href="/wingsandroots" className={styles.logoBlock}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}>
           <img src="/events/Wings and Roots (2).png" alt="Contest Logo" className={styles.punchLogo} />
        </Link>

        {/* Right Side: Content */}
        <div className={styles.textBlock}>
           <h2 className={styles.massiveTitle}>FLAGSHIP</h2>
           <p className={styles.body}>
             A competition that challenges students to solve real world business and marketing problems.
           </p>
           {/* Mobile Only Button */}
           <Link href="/wingsandroots" className={styles.mobileGalleryBtn}>
             VIEW GALLERY!
           </Link>
        </div>

      </div>

      {/* Floating Custom Cursor */}
      <div 
        ref={cursorRef} 
        className={`${styles.floatingBtn} ${isHovered ? styles.floatingBtnVisible : ''}`}
      >
        VIEW GALLERY!
      </div>
    </section>
  );
}
