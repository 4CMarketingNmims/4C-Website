'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function ApplyPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(68,154,249,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(98,91,253,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,145,254,0.13),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">

        {/* Return Button */}
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-3
            glass-card
            px-5
            py-3
            rounded-2xl
            text-white
            hover:bg-white/10
            hover:scale-105
            transition-all
            duration-300
            mb-6
          "
        >
          <Image
            src="/4clogo.webp"
            alt="4C Logo"
            width={32}
            height={32}
          />
          <span className="font-medium">
            Return to 4C
          </span>
        </Link>

        {/* Embedded Tally Form */}
        <div
          className="
            rounded-3xl
            overflow-hidden
            backdrop-blur-xl
            border
            border-white/10
            bg-white/[0.03]
            shadow-2xl
          "
        >
          <iframe
            data-tally-src="https://tally.so/embed/yPorpB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="4C Core Interviews 2026-27"
            className="w-full"
          />
        </div>

      </div>
    </div>
  );
}
