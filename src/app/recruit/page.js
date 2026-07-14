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

      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[160px]" />

        <div className="absolute right-[-220px] bottom-[-220px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-14">

        {/* Hero */}

        <div className="mb-12 text-center">

          <Image
            src="/4clogo.webp"
            alt="4C Logo"
            width={72}
            height={72}
            className="mx-auto mb-6"
            priority
          />

          <h1 className="text-5xl font-bold leading-none tracking-tight text-white md:text-7xl">
            EXECUTIVE
            <br />
            RECRUITMENT
          </h1>

          <p className="mt-5 text-xl font-medium tracking-[0.2em] text-blue-400 md:text-2xl">
            2026–27
          </p>

        </div>

        {/* Form */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-black/40
            backdrop-blur-xl
            shadow-[0_0_80px_rgba(37,99,235,.10)]
          "
        >

          {showLoader && <FormLoader />}

          <iframe
            data-tally-src="https://tally.so/embed/5BDxqv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
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