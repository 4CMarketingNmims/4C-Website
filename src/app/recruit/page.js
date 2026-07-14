"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import FormLoader from "@/components/ui/form-loader";

export default function RecruitPage() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050608]">

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[160px]" />

        <div className="absolute right-[-220px] bottom-[-220px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-40 pb-16 md:pt-44">

        {/* Hero */}

        <div className="mb-16 text-center">

          <Image
            src="/4c-logo.png"
            alt="4C Logo"
            width={96}
            height={96}
            className="mx-auto mb-8"
            priority
          />

          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-white">
            EXECUTIVE
            <br />
            RECRUITMENT
          </h1>

          <p className="mt-6 text-xl md:text-2xl font-medium tracking-[0.35em] text-blue-400">
            2026–27
          </p>

        </div>

        {/* Form */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-black/40
            backdrop-blur-xl
            shadow-[0_0_100px_rgba(37,99,235,.08)]
          "
        >

          {showLoader && <FormLoader />}

          <iframe
            data-tally-src="https://tally.so/embed/5BDxqv?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="eager"
            width="100%"
            height="850"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="4C Executive Recruitment 2026-27"
          />

        </div>

      </div>

      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Tally) {
            window.Tally.loadEmbeds();
          }
        }}
      />

    </div>
  );
}
