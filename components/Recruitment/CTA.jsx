"use client";

import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* ---------------- Discover ---------------- */}

        <div className={styles.discover}>

          <div className={styles.left}>

            <h2 className={styles.discoverTitle}>
              <span>DISCOVER</span>
              <span>4C.</span>
            </h2>

          </div>

          <div className={styles.right}>

            <a
              href="https://instagram.com/4cnmims"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >

              <div className={styles.socialLeft}>

                <svg
                  className={styles.socialIcon}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="17.2"
                    cy="6.8"
                    r="1.2"
                    fill="currentColor"
                  />
                </svg>

                <span>Instagram</span>

              </div>

              <svg
                className={styles.arrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </a>

            <a
              href="https://linkedin.com/company/4c-nmims"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >

              <div className={styles.socialLeft}>

                <svg
                  className={styles.socialIcon}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5a1.48 1.48 0 100 2.96 1.48 1.48 0 000-2.96zM3.5 8h3v12h-3V8zm5 0h2.88v1.71h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V20h-3v-5.97c0-1.42-.03-3.24-1.98-3.24-1.98 0-2.28 1.55-2.28 3.14V20h-3V8z"/>
                </svg>

                <span>LinkedIn</span>

              </div>

              <svg
                className={styles.arrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </a>

          </div>

        </div>

        <div className={styles.divider}></div>

        {/* ---------------- CTA ---------------- */}

        <div className={styles.cta}>

          <h2 className={styles.title}>
            <span>READY</span>
            <span>TO</span>
            <span>BEGIN?</span>
          </h2>

          <p className={styles.subtitle}>
            Every great journey starts with one application.
          </p>

          <Link
            href="https://tally.so/r/5BDxqv"
            target="_blank"
            className={styles.primary}
          >

            <span>Apply Now</span>

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </Link>

        </div>

      </div>

    </section>
  );
}