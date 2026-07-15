'use client';
import { missionSection } from '@/data/site';
import styles from './Mission.module.css';

export default function Mission() {
  return (
    <section className={styles.section} id="mission">
      <div className={styles.layout}>

        <div className={styles.introPanel}>
          <h2 className={styles.massiveTitle}>
            {missionSection.titleLines[0]}<br />{missionSection.titleLines[1]}
          </h2>
        </div>

        <div className={styles.stack}>
          {missionSection.cards.map((card, idx) => (
            <div key={card.tag} className={styles.card} style={{ top: `calc(24vh + ${idx * 40}px)` }}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.copy}>{card.copy}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}