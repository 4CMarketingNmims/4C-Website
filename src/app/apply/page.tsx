import Link from "next/link";

export default function ApplyPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition"
        >
          ← Back to 4C Website
        </Link>
      </div>

      <iframe
        src="https://tally.so/r/yPorpB"
        className="w-full h-[calc(100vh-140px)]"
        frameBorder="0"
        title="4C Core Applications"
      />
    </div>
  );
}
