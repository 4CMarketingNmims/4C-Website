'use client';

import { usePathname } from 'next/navigation';
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
      <>
        <main>{children}</main>
      </>
    );
  }

  return (
    <AuroraBackground>
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </AuroraBackground>
  );
}
