'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const LINKS = [
  { label: 'ABOUT', href: '/about' },
  { label: 'TEAM', href: '/team' },
  { label: 'EVENTS', href: '/events' },
  { label: 'SPONSORS', href: '/#sponsors' },
  { label: 'BOMBAESQUARE', href: '/bombaysquare' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Nav() {
  const [isStuck, setIsStuck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapRef.current) {
        setIsStuck(wrapRef.current.getBoundingClientRect().top <= 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <div className={styles.stickyWrap} ref={wrapRef}>
      <nav className={`${styles.navBar} ${isStuck ? styles.stuck : ''}`}>
        <Link href="/" className={styles.navLogo}>
          <img src="/4clogo.png" alt="4C Logo" />
        </Link>
        
        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <div className={`${styles.bar} ${isOpen ? styles.open1 : ''}`} />
          <div className={`${styles.bar} ${isOpen ? styles.open2 : ''}`} />
        </div>

        <div className={`${styles.linkRow} ${isOpen ? styles.menuOpen : ''}`}>
          {LINKS.map((l) => (
            <Link 
              key={l.label} 
              href={l.href} 
              className={`${styles.link} ${l.label === 'BOMBAESQUARE' ? styles.goldenHover : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
