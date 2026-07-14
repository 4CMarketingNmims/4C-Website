"use client";

import { useEffect } from "react";
import Script from "next/script";
import styles from "./page.module.css";

export default function RecruitPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />

      <main className="recruit-page">
        <div className="grid-overlay" />
        <div className="glow glow-left" />
        <div className="glow glow-right" />

        <div className="recruit-container">
          <iframe
            data-tally-src=""
            loading="lazy"
            width="100%"
            height="970"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="4C Executive Recruitment 2026-27"
            className="tally-frame"
          />
        </div>
      </main>
    </>
  );
}