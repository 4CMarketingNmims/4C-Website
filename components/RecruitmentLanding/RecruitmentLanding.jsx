"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./RecruitmentLanding.module.css";

export default function RecruitmentLanding() {
  return (
    <section className={styles.hero}>

      <div className={styles.glow}></div>

      <div className={styles.container}>

        <div className={styles.left}>

          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Executive Recruitment 2026–27
          </div>

          <h1 className={styles.title}>
            <span>MAKE</span>
            <span>YOUR</span>
            <span>MARK.</span>
          </h1>

          <p className={styles.description}>
            Join the Official Marketing Cell of NMIMS MPSTME and become part of
            the team behind the ideas, campaigns, events and experiences that
            shape campus life.
          </p>

          <div className={styles.actions}>
            <Link href="/recruitment" className={styles.button}>
              Start Your Application
              <span>→</span>
            </Link>
          </div>

          <div className={styles.scroll}>
            Scroll
          </div>

        </div>

        <div className={styles.right}>

          <div className={styles.logoGlow}></div>

          <Image
            src="/4c-logo.png"
            alt="4C Logo"
            width={460}
            height={460}
            priority
            className={styles.logo}
          />

        </div>

      </div>

    </section>
  );
}
