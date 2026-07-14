'use client';

import Image from 'next/image';

export default function FormLoader() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/80 backdrop-blur-md">
      <Image
        src="/4clogo.webp"
        alt="4C"
        width={100}
        height={100}
        className="animate-pulse"
        priority
      />

      <h3 className="mt-6 text-xl font-semibold text-white">
        4C Executive Recruitment 2026–27
      </h3>

      <p className="mt-2 text-white/70">
        Loading Application Portal...
      </p>
    </div>
  );
}
