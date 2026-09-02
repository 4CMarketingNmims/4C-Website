"use client";

import styles from "./Eligibility.module.css";

const programmes = [
  "1st Year B.Tech onwards",
  "1st Year MBA Tech onwards",
  "2nd Year BTI onwards",
  "2nd Year Diploma onwards",
];

export default function Eligibility() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.left}>

          <h2 className={styles.heading}>
            <span>WHO</span>
            <span>CAN</span>
            <span>APPLY?</span>
          </h2>

        </div>

        <div className={styles.right}>

          <p className={styles.description}>
            Open to students from all streams across:
          </p>

          <div className={styles.list}>

            {programmes.map((item) => (
              <div
                key={item}
                className={styles.row}
              >
                <span className={styles.dot}></span>

                <span className={styles.text}>
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}