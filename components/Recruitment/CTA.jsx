"use client";

import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <h2 className={styles.heading}>
          <span>READY</span>
          <span>TO</span>
          <span>BEGIN?</span>
        </h2>

        <p className={styles.description}>
          The next chapter starts with one application.
        </p>

        <Link
          href="https://tally.so/r/5BDxqv"
          target="_blank"
          className={styles.button}
        >
          Apply Now
          <span>→</span>
        </Link>

        <div className={styles.follow}>

          <p className={styles.followText}>
            See what you're joining.
          </p>

          <div className={styles.socials}>

            <a
              href="https://www.instagram.com/4cnmims"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/4cnmims/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}