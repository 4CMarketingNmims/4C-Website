'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Nav.module.css';

const LINKS = [
  { label: 'ABOUT', href: '/about' },
  { label: 'TEAM', href: '/team' },
  { label: 'EVENTS', href: '/events' },
  { label: 'SPONSORS', href: '/#sponsors' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Prevent scroll when the fullscreen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Explicit, guaranteed navigation on top of the <Link>'s own handling.
  // If some other layer on the page (an overlay, a canvas effect, etc.) is
  // swallowing the click before Next.js's Link can intercept it, this
  // still fires because it's bound directly to this element's onClick.
  const goTo = (href) => (e) => {
    if (href.startsWith('/#')) return; // let in-page anchor links behave normally
    e.preventDefault();
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* Fixed floating pill nav — always pinned to the top of the page.
          pointer-events explicitly set so nothing above it in z-index
          (background effects, canvases, etc.) can accidentally disable
          clicks on it via an inherited style. */}
      <nav className={styles.navBar} style={{ pointerEvents: 'auto' }}>
        <Link href="/" className={styles.navLogo} onClick={goTo('/')}>
          <img src="/4clogo.png" alt="4C Logo" />
        </Link>

        <div className={styles.linkRow}>
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} className={styles.link} onClick={goTo(l.href)}>
              {l.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${isOpen ? styles.open1 : ''}`} />
          <span className={`${styles.bar} ${isOpen ? styles.open2 : ''}`} />
        </button>
      </nav>

      {/* Fullscreen mobile menu overlay */}
      <div className={`${styles.mobileOverlay} ${isOpen ? styles.menuOpen : ''}`}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <div className={styles.mobileBrand}>4C</div>
        <div className={styles.mobileLinks}>
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={styles.mobileLink}
              onClick={goTo(l.href)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}