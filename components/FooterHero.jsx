'use client';
import { usePathname } from 'next/navigation';
import { footerHeroSection } from '@/data/site';
import styles from './FooterHero.module.css';

export default function FooterHero() {
  const pathname = usePathname();
const contacts = footerHeroSection.contacts;

// Hide this component on both paths so it doesn't overlap or distort full-screen sections
if (pathname === '/wingsandroots' || pathname === '/contact') return null;

  return (
    <footer id="footer-contact" className={styles.footerWrap}>
      {/* Marquee Punch */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeText}>{footerHeroSection.marqueeText}</span>
          <span className={styles.marqueeText}>{footerHeroSection.marqueeText}</span>
        </div>
      </div>

      {/* Big Mail ID */}
      <div className={styles.mailContainer}>
        <a href={`mailto:${footerHeroSection.bigEmail}`} className={styles.bigMail}>{footerHeroSection.bigEmail}</a>
      </div>

      {/* Contacts Roster */}
      <div className={styles.rosterContainer}>
        <div className={styles.roster}>
          {contacts.map((c) => (
            <div key={c.name} className={styles.interactiveRow}>
              <div className={styles.nameGroup}>
                <h3 className={styles.contactName}>{c.name}</h3>
                <span className={styles.contactRole}>{c.role}</span>
              </div>
              <div className={styles.detailGroup}>
                <a href={`tel:${c.phone}`} className={styles.detailLink}>{c.phone}</a>
                <a href={`mailto:${c.email}`} className={styles.detailLink}>{c.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
