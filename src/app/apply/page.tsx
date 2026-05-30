import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function ApplyPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(68,154,249,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(98,91,253,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,145,254,0.13),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Return Button */}
        <Link
          href="/"
          className="
            inline-flex items-center gap-3
            glass-card
            rounded-2xl
            px-6 py-3
            text-white
            border border-white/10
            shadow-xl
            hover:scale-105
            transition-all
            mb-8
          "
        >
          <Image
            src="/4clogo.webp"
            alt="4C"
            width={32}
            height={32}
          />
          <span className="font-medium">
            Return to 4C
          </span>
        </Link>

        {/* Form */}
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl">

          <iframe
            data-tally-src="https://tally.so/embed/yPorpB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="1000"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="4C Core Interviews 2026-27"
          />

        </div>

        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
