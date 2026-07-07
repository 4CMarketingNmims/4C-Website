'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ensureGsap } from '@/lib/scrollAnim';
import { site, bars, footerSection } from '@/data/site';
import styles from './Footer.module.css';

const ICONS = {
  ig: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.26.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.26.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.26-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.26-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.73 1.48 1.38 2.13.65.65 1.33 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>),
  li: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" /></svg>),
  x: (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>),
  mail: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="M3.5 6.5l8.5 6 8.5-6" /></svg>),
};

export default function Footer() {
  const root = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    ensureGsap();
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const text = textRef.current;
      if (!section || !text) return;

      const vh = window.innerHeight;
      const textH = text.offsetHeight || 100;
      const targetStretch = (vh * 0.4) / textH;

      gsap.fromTo(text,
        { scaleY: 0.01 },
        {
          scaleY: targetStretch,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <footer className={styles.footer} id="global-site-footer">
        <div className={styles.mainGrid}>

          <div className={styles.brandCol}>
            <img src={footerSection.logoSrc} alt="4C Logo" className={styles.logo} />
            <p className={styles.tagline}>{site.tagline}</p>

            <div className={styles.socialsRow}>
              {footerSection.socials.map((s) => (
                <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className={styles.socialBox} style={{ '--brand-color': s.brandColor }} aria-label={s.ariaLabel}>
                  {ICONS[s.id]}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksCol}>
            <div className={styles.linkList}>
              <Link href="/" className={styles.navLink} style={{ '--hover-color': 'var(--cyan)' }}>Home</Link>
              {bars.filter((b) => b.slug !== '').map((b) => (
                <Link key={b.slug} href={`/${b.slug}`} className={styles.navLink} style={{ '--hover-color': `var(--${b.color})` }}>
                  {b.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyInfo}>
            <p>© {new Date().getFullYear()} {site.brand} — Marketing Committee. All rights reserved.</p>
            <p>{footerSection.builtBy}</p>
          </div>
          <div className={styles.legal}>
            {footerSection.legalLinks.map((link, idx) => (
              <Link key={idx} href={link.href}>{link.label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}