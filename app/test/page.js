"use client";

import Script from "next/script";

export default function Test() {
  return (
    <div
      style={{
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "32px 24px",
      }}
    >
      <iframe
        data-tally-src="https://tally.so/embed/5BDxqv?hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="eager"
        width="100%"
        height="800"
        frameBorder="0"
        title="Recruitment"
      />

      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}