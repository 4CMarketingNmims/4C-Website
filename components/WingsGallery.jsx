'use client';
import { useRef } from 'react';
import Nav from '@/components/Nav';
import styles from './WingsGallery.module.css';

const IMAGES = [
  '/WNR/wnr-01.jpg', '/WNR/wnr-02.jpg', '/WNR/wnr-03.jpg', '/WNR/wnr-04.jpg',
  '/WNR/wnr-06.jpg', '/WNR/wnr-07.jpg', '/WNR/wnr-08.jpg', '/WNR/wnr-09.jpg',
  '/WNR/wnr-10.jpg', '/WNR/wnr-11.jpg', '/WNR/wnr-12.jpg', '/WNR/wnr-13.jpg',
  '/WNR/wnr-14.jpg', '/WNR/wnr-15.jpg', '/WNR/wnr-16.jpg', '/WNR/wnr-17.jpg',
  '/WNR/wnr-18.jpg', '/WNR/wnr-19.jpg', '/WNR/wnr-20.jpg', '/WNR/wnr-21.jpg'
];

// Duplicate images to create a massive immersive wall
const MASSIVE_IMAGES = [...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES];

export default function WingsGallery() {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      // Calculate mouse position relative to center (-1 to 1)
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      
      containerRef.current.style.setProperty('--mouse-x', x);
      containerRef.current.style.setProperty('--mouse-y', y);
    });
  };

  // Distribute images evenly across 9 columns for an ultra-dense masonry mosaic
  const cols = Array.from({ length: 9 }, () => []);
  MASSIVE_IMAGES.forEach((src, i) => {
    cols[i % 9].push(src);
  });

  return (
    <>
      <Nav />
      <section className={styles.galleryWrap} ref={containerRef} onMouseMove={handleMouseMove}>
        
        {/* The expansive parallax canvas */}
        <div className={styles.galleryCanvas}>
          {cols.map((colImages, colIndex) => (
            <div key={`col-${colIndex}`} className={`${styles.column} ${styles[`col${colIndex}`]}`}>
              {colImages.map((src, i) => (
                <div key={`img-${colIndex}-${i}`} className={styles.imageWrapper}>
                  <img src={src} alt={`Wings & Roots Gallery ${i}`} className={styles.image} loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Soft dark vignette to blend edges */}
        <div className={styles.vignette}></div>

        {/* Central Logo embedded in a black radial gradient hole */}
        <div className={styles.logoContainer}>
          <img src="/events/Wings and Roots (2).png" alt="Wings and Roots" className={styles.logo} />
        </div>

      </section>
    </>
  );
}
