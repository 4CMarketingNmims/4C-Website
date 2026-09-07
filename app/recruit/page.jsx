"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import FormLoader from "@/components/ui/form-loader";
import styles from "./page.module.css";

export default function RecruitPage() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const loadEmbeds = () => {
    if (typeof window !== "undefined" && window.Tally) {
      window.Tally.loadEmbeds();
    }
  };

  return (
    <div className={styles.page}>
      {/* Background */}
      <div className={styles.grid} />
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />

      <div className={styles.hero}>
        <Image
          src="/4clogo.png"
          alt="4C Logo"
          width={110}
          height={110}
          priority
          className={styles.logo}
        />

        <h1>
          EXECUTIVE
          <br />
          RECRUITMENT
        </h1>

        <h2>2026–27</h2>
      </div>

      {/* Form */}
      <div className={styles.formWrapper}>
        {showLoader && <FormLoader />}

        <iframe
          data-tally-src="https://tally.so/embed/5BDxqv?hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="eager"
          width="100%"
          height="900"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="4C Executive Recruitment 2026-27"
          className={styles.tally}
        />
      </div>

      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={loadEmbeds}
      />
    </div>
  );
}
