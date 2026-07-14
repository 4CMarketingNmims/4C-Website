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

  The official marketing committee of NMIMS MPSTME.
</p>

          <div className={styles.actions}>

            <Link
              href="https://tally.so/r/5BDxqv"
              target="_blank"
              className={styles.primary}
            >
              Apply Now
              <span>→</span>
            </Link>

          </div>

        </div>

        <div className={styles.visual}>

          <div className={styles.logoGlow}></div>

          <Image
            src="/4clogo.png"
            alt="4C Logo"
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