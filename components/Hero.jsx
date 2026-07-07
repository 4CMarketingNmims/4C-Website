"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(`.${styles.badge}`, {
        y: 24,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          `.${styles.titleLine}`,
          {
            y: 90,
            opacity: 0,
            stagger: 0.12,
            duration: 1,
          },
          "-=0.35"
        )
        .from(
          `.${styles.description}`,
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.55"
        )
        .from(
          `.${styles.meta}`,
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45"
        )
        .from(
          `.${styles.logoWrapper}`,
          {
            opacity: 0,
            scale: 0.82,
            rotate: -10,
            duration: 1.2,
          },
          "-=1"
        )
        .from(
          `.${styles.scroll}`,
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.35"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.grid}></div>
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>
      <div className={styles.noise}></div>

      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.badge}>
            Official Student Committee
          </span>

          <div className={styles.heading}>
            <div className={styles.titleLine}>
              THE OFFICIAL
            </div>

            <div className={styles.titleLine}>
              MARKETING
            </div>

            <div className={styles.titleLine}>
              COMMITTEE
            </div>

            <div className={styles.titleLine}>
              OF NMIMS MPSTME
            </div>
          </div>

          <p className={styles.description}>
            Where future marketers create,
            compete and lead.
          </p>

          <div className={styles.meta}>
            <span className={styles.metaLabel}>
              Established
            </span>

            <span className={styles.metaDivider}></span>

            <span className={styles.metaYear}>
              2008
            </span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoGlow}></div>

            <div className={styles.logoRing}></div>

            <div className={styles.logo}>
              <Image
                src="/4c-logo.png"
                alt="4C NMIMS"
                fill
                priority
                sizes="(max-width:768px) 220px, 420px"
              />
            </div>

            <div className={styles.floatingOrb}></div>
            <div className={styles.floatingOrbSmall}></div>
          </div>
        </div>
      </div>

      <div className={styles.scroll}>
        <span className={styles.scrollText}>
          Scroll
        </span>

        <div className={styles.scrollMouse}>
          <span></span>
        </div>
      </div>
    </section>
  );
}
