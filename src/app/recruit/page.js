"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[150px]" />
        <div className="absolute right-[-220px] bottom-[-220px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Return Button */}
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-3
            glass-card
            rounded-2xl
            px-6
            py-3
            text-white
            border
            border-white/10
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
            mb-10
          "
        >
          <span className="text-lg font-medium">
            ← Return to
          </span>

          <Image
            src="/4clogo.webp"
            alt="4C"
            width={40}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Hero */}
        <div className="mb-12 text-center">
          <Image
            src="/4clogo.webp"
            alt="4C Logo"
            width={90}
            height={90}
            className="mx-auto mb-6"
            priority
          />

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400">
            4C NMIMS
          </p>

          <h1 className="text-5xl font-bold text-white">
            Executive Recruitment
          </h1>

          <h2 className="mt-2 text-2xl font-semibold text-blue-400">
            2026–27
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Join the Official Marketing Committee of NMIMS MPSTME.
            Applications are now open.
          </p>
        </div>

        {/* Form */}
        <div
          className="
            relative
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-black/40
            backdrop-blur-xl
            shadow-2xl
          "
        >
          {showLoader && <FormLoader />}

          <iframe
            data-tally-src="https://tally.so/embed/5BDxqv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="eager"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="4C Executive Recruitment 2026-27"
          />
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
    </div>
  );
}
