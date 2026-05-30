'use client';

import Image from 'next/image';

export default function FormLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-md z-20">
      <Image
        src="/4clogo.webp"
        alt="4C"
        width={100}
        height={100}
        className="animate-pulse"
        priority
      />

      <p className="mt-4 text-white/80 text-lg">
        Loading Application Portal...
      </p>
    </div>
  );
}
