import LayoutWrapper from '@/components/layout/layout-wrapper';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { AuroraBackground } from '@/components/ui/aurora-background';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: '4C NMIMS | Marketing Cell of MPSTME NMIMS',
  description:
    'Official website of 4C NMIMS. Explore events, team members, sponsors and initiatives.',

  openGraph: {
    title: '4C NMIMS',
    description:
      'Official website of 4C NMIMS.',
    url: 'https://4cnmims.in',
    siteName: '4C NMIMS',
    images: [
      {
        url: 'https://4cnmims.in/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    images: ['https://4cnmims.in/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased relative',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Toaster />
      </body>
    </html>
  );
}
