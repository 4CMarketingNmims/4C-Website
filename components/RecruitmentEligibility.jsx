"use client";

import styles from "./RecruitmentEligibility.module.css";

export default function RecruitmentEligibility() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <p className={styles.eyebrow}>
          Eligibility
        </p>

        <h2 className={styles.heading}>
          WHO CAN APPLY?
        </h2>

        <p className={styles.description}>
          Students from all streams in the following programmes are eligible to
          apply for the <strong>4C Executive Team.</strong>
        </p>

        <div className={styles.grid}>

          <div className={styles.item}>
            <span>01</span>
            <h3>1st Year B.Tech</h3>
          </div>

          <div className={styles.item}>
            <span>02</span>
            <h3>1st Year MBA Tech</h3>
          </div>

          <div className={styles.item}>
            <span>03</span>
            <h3>2nd Year BTI</h3>
          </div>

          <div className={styles.item}>
            <span>04</span>
            <h3>2nd Year Diploma</h3>
          </div>

        </div>

      </div>

    </section>
  );
}
