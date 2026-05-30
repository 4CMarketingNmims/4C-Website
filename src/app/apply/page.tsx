import Link from "next/link";
import Image from "next/image";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(68,154,249,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(98,91,253,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,145,254,0.13),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">

        {/* Back Button */}
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
            hover:scale-105
            transition-all
            mb-6
          "
        >
          <Image
            src="/4clogo.webp"
            alt="4C"
            width={32}
            height={32}
          />
          <span>Back to 4C</span>
        </Link>

        {/* Form Container */}
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            src="https://tally.so/r/yPorpB"
            className="w-full h-[92vh]"
            frameBorder="0"
            title="4C Core Applications"
          />
        </div>

      </div>
    </div>
  );
}
