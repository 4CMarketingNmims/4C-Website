import Link from "next/link";
import Image from "next/image";

export default function ApplyPage() {
  return (
    <div className="min-h-screen">
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
            mb-8
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

        {/* Form Container */}
        <div
          className="
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-black/40
            backdrop-blur-xl
            shadow-2xl
          "
        >
          <iframe
            src="https://tally.so/embed/yPorpB?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="4C Core Interviews 2026-27"
          />
        </div>

      </div>
    </div>
  );
}
