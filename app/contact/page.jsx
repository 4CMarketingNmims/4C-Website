'use client';

import { footerHeroSection } from '@/data/site';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        
        {/* Header / Branding */}
        <div className={styles.cardHeader}>
          <div className={styles.logoGroup}>
            <img src="/4clogo.png" alt="4C" className={styles.logoImg} />
            <span className={styles.logoText}>nmims</span>
          </div>
          <p className={styles.cardTagline}>Reach out to us for any queries or collaborations.</p>
        </div>
        
        {/* Main Content Links */}
        <div className={styles.content}>
          <div className={styles.emailsList}>
            {footerHeroSection.emails.map((item) => (
              <a key={item.email} href={`mailto:${item.email}`} className={styles.emailRow}>
                <div className={styles.emailRowInfo}>
                   <span className={styles.emailPurpose}>{item.purpose}</span>
                   <span className={styles.emailAddress}>{item.email}</span>
                </div>
                <div className={styles.emailRowIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </a>
            ))}
          </div>
          
          {/* Social Icons Layout */}
          <div className={styles.socialsGrid}>
            <a href="https://x.com/4cnmims" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.socialX}`} aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
            <a href="https://linkedin.com/in/4cnmims" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.socialLinkedin}`} aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/4cnmims?igsh=MTVtM2Z2b2RpcWsyNA==" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.socialInstagram}`} aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}