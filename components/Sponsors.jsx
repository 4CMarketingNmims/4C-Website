'use client';

import { useRef } from 'react';
import { sponsorsSection } from '@/data/site';
import styles from './Sponsors.module.css';

export default function Sponsors() {
  const root = useRef(null);
  const gridRef = useRef(null);

  const baseLogos = Array.from({ length: sponsorsSection.baseLogoCount }, (_, i) => `${sponsorsSection.logoPathPrefix}${i + 1}.png`);
  
  // Create a massive, messy array of blocks
  let elements = [];
  const totalSlots = sponsorsSection.totalSlots;
  let lastLogoSrc = null;

  for(let i=0; i<totalSlots; i++) {
    // Only a tiny couple of holes to keep it semi-messy, mostly filled in
    if (sponsorsSection.emptySlots.includes(i)) {
      elements.push({ type: 'empty', id: i });
      lastLogoSrc = null; // an empty gap breaks any repeat streak
      continue;
    }

    // Pick a logo, skipping ahead if it would repeat the immediately
    // preceding tile (avoids the same logo landing next to itself).
    let offset = 0;
    let logoSrc = baseLogos[i % baseLogos.length];
    while (logoSrc === lastLogoSrc && offset < baseLogos.length - 1) {
      offset += 1;
      logoSrc = baseLogos[(i + offset) % baseLogos.length];
    }

    elements.push({ type: 'logo', src: logoSrc, id: i });
    lastLogoSrc = logoSrc;
  }

  const handleMouseMove = (e) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    gridRef.current.style.setProperty('--mouse-x', `${x}px`);
    gridRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className={styles.section} ref={root} id="sponsors">
      
      {/* Title strictly in the center of the layout */}
      <div className={styles.centerTitleContainer}>
        <h2 className={styles.title}>{sponsorsSection.titleLines[0]}<br/>{sponsorsSection.titleLines[1]}</h2>
      </div>

      <div 
        className={styles.wallGrid} 
        ref={gridRef}
        onMouseMove={handleMouseMove}
      >
        {elements.map((item, index) => {
          const hideClass = index >= 20 ? styles.hideOnMobile : '';
          
          if (item.type === 'empty') {
             const isWide = index % 4 === 0;
             let spanClass = styles.spanSmall;
             if (isWide) spanClass = styles.spanWide;
             return <div key={`empty-${index}`} className={`${styles.emptyBlock} ${spanClass} ${hideClass}`}></div>;
          }

          // pseudo-random spans
          const isWide = index % 5 === 0;
          const isTall = index % 8 === 0;
          const isLarge = index % 11 === 0;
          
          let spanClass = styles.spanSmall;
          if(isLarge) spanClass = styles.spanLarge;
          else if(isWide) spanClass = styles.spanWide;
          else if(isTall) spanClass = styles.spanTall;

          return (
            <div 
              key={`logo-${index}`} 
              className={`${styles.wallBlock} ${spanClass} ${hideClass}`}
            >
               <img src={item.src} alt="Sponsor Logo" className={styles.sponsorLogo} />
            </div>
          );
        })}
      </div>
    </section>
  );
}