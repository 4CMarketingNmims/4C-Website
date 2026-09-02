"use client";

import Image from "next/image";
import styles from "./form-loader.module.css";

export default function FormLoader() {
  return (
    <div className={styles.overlay}>
      <Image
        src="/4clogo.png"
        alt="4C"
        width={100}
        height={100}
        className={styles.logo}
        priority
      />

      <h3 className={styles.title}>
        4C Executive Recruitment 2026–27
      </h3>

      <p className={styles.text}>
        Loading Application Portal...
      </p>
    </div>
  );
}
