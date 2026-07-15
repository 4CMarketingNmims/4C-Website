"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}></div>
      <div className={styles.glow}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>MAKE</span>
            <span>YOUR</span>
            <span>MARK.</span>
          </h1>

          <p className={styles.description}>
            <span className={styles.lead}>
              Ideas deserve people who can build them.
            </span>

            The Official Marketing Cell of NMIMS MPSTME.
          </p>

          <div className={styles.actions}>
            <Link
              href="https://4cnmims.in/recruit"
              target="_blank"
              className={styles.primary}
            >
              <span>Apply Now</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
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

        <div className={styles.visual}>
          <div className={styles.logoGlow}></div>

          <Image
            src="/4c-logo.png"
            alt="4C NMIMS Logo"
            width={700}
            height={700}
            priority
            className={styles.logo}
          />
        </div>
      </div>
    </section>
  );
}