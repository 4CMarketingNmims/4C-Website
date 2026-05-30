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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.main>

      <Footer />
    </AuroraBackground>
  );
}
