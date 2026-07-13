"use client";

import styles from "./RecruitmentLanding.module.css";

export default function RecruitmentLanding() {
  return (
    <main className={styles.page}>

      <section className={styles.hero}>

        <div className={styles.badge}>
          Executive Recruitment 2026–27
        </div>

        <h1 className={styles.title}>
          <span>MAKE</span>
          <span>YOUR</span>
          <span>MARK.</span>
        </h1>

        <p className={styles.description}>
          Join the Official Marketing Cell of NMIMS MPSTME and help create the
          ideas, events and experiences that define campus life.
        </p>

        <button className={styles.cta}>
          Start Application
        </button>

      </section>

    </main>
  );
}
