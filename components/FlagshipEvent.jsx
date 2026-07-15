'use client';
import Link from 'next/link';
import { flagshipSection } from '@/data/site';
import styles from './FlagshipEvent.module.css';

const FLAGSHIP_STATS = [
  { value: '2400+', label: 'Participants' },
  { value: '930+', label: 'Teams' },
  { value: '370+', label: 'Universities' },
];

export default function FlagshipEvent() {
  return (
    <section className={styles.section} id="flagship">
      <div className={styles.layout}>
        
        {/* Left Side: Logo Punch */}
        <div className={styles.logoBlock}>
           <img src="/events/Wings and Roots (2).png" alt="Contest Logo" className={styles.punchLogo} />
        </div>

        {/* Right Side: Content */}
        <div className={styles.textBlock}>
           <h2 className={styles.massiveTitle}>FLAGSHIP</h2>
           <p className={styles.body}>
             A competition that challenges students to solve real world business and marketing problems.
           </p>

           {/* Stats */}
           <div className={styles.statsRow}>
             {FLAGSHIP_STATS.map((stat) => (
               <div key={stat.label} className={styles.statItem}>
                 <span className={styles.statValue}>{stat.value}</span>
                 <span className={styles.statLabel}>{stat.label}</span>
               </div>
             ))}
           </div>

           {/* View Gallery Button */}
           <Link href="/wingsandroots" className={styles.galleryBtn}>
             VIEW GALLERY!
           </Link>
        </div>

      </div>
    </section>
  );
}