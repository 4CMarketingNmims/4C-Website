"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./RecruitmentLanding.module.css";

export default function RecruitmentLanding() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.grid}></div>

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span></span>
            Executive Recruitment 2026–27
          </div>

          <h1 className={styles.title}>
            <span>MAKE</span>
            <span>YOUR</span>
            <span>MARK.</span>
          </h1>

          <p className={styles.description}>
            Join the Official Marketing Cell of NMIMS MPSTME and work alongside
            passionate students to create campaigns, experiences, events and
            ideas that leave a lasting impact on campus.
          </p>

          <Link href="/recruitment" className={styles.button}>
            Start Your Application
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          <p className={styles.note}>
            No prior experience required.
            <br />
            Just curiosity and the willingness to learn.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.logoGlow}></div>

          <Image
  src="/4c-logo.png"
  alt="4C Logo"
  fill
  priority
  sizes="50vw"
  className={styles.logo}
/>
        </div>
      </div>
    </section>
  );
}
