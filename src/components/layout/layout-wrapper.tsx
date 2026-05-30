'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header } from './header';
import { Footer } from './footer';
import { AuroraBackground } from '../ui/aurora-background';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isApplyPage = pathname.startsWith('/apply');

  if (isApplyPage) {
    return (
      <AuroraBackground>
        <motion.main
  key={pathname}
  className="relative z-10"
  initial={{
  opacity: 0,
  y: 20,
  filter: "blur(6px)",
}}
animate={{
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
}}
transition={{
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}}
>
  {children}
</motion.main>
      </AuroraBackground>
    );
  }

  return (
    <AuroraBackground>
      <Header />

      <motion.main
  key={pathname}
  className="relative z-10"
 initial={{
  opacity: 0,
  y: 20,
  filter: "blur(6px)",
}}
animate={{
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
}}
transition={{
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}}
>
  {children}
</motion.main>

      <Footer />
    </AuroraBackground>
  );
}
