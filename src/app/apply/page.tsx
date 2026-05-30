import Link from "next/link";

export default function ApplyPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-6">
      
      <Link
        href="/"
        className="
          inline-flex items-center gap-2
          glass-card
          px-5 py-3
          rounded-xl
          text-white
          hover:scale-105
          transition-all
          mb-6
        "
      >
        ← Back to 4C
      </Link>

      <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <iframe
          src="https://tally.so/r/yPorpB"
          className="w-full h-[92vh]"
          frameBorder="0"
          title="4C Core Applications"
        />
      </div>

    </div>
  );
}
