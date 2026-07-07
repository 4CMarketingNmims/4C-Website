'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whatIsSection } from '@/data/site';
import RotatingText from '@/components/reactbits/RotatingText/RotatingText';
import styles from './WhatIs4C.module.css';

export default function WhatIs4C() {
  const [currentColor, setCurrentColor] = useState('var(--cyan)');
  const themeColors = ['var(--cyan)', 'var(--blue)', 'var(--violet)', 'var(--purple)'];

  const handleNextText = (index) => {
    setCurrentColor(themeColors[index % themeColors.length]);
  };

  useEffect(() => {
    // If you need any initialization on mount later, it goes here.
  }, []);

  return (
    <section className={styles.wrap} id="what-is-4c">
      
      <div className={styles.layout}>
        
        {/* Top Content Row: Paragraph on left, Rotating Box on right */}
        <div className={styles.topContent}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              <span>{whatIsSection.titlePrefix}</span>
              <img src={whatIsSection.logoSrc} alt="4C Logo" className={styles.titleLogo} />
              <span>?</span>
            </h2>
            <p className={styles.copy}>
              {whatIsSection.paragraph}
            </p>
          </div>

          <div 
            className={styles.verticalMarqueeContainer}
            style={{ backgroundColor: currentColor }}
          >
            <RotatingText
              texts={whatIsSection.rotatingWords}
              mainClassName={styles.verticalText}
              staggerFrom="first"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.05}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
              onNext={handleNextText}
            />
          </div>
        </div>

        {/* Bottom Content Row: Image */}
        <div className={styles.imageBlock}>
          <img src={whatIsSection.imageSrc} alt="What is 4C" className={styles.img} />
        </div>
      </div>
    </section>
  );
}