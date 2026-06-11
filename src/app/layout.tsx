import LayoutWrapper from '@/components/layout/layout-wrapper';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.4cnmims.in'),

  title: {
    default: '4C NMIMS | Marketing Cell of NMIMS MPSTME',
    template: '%s | 4C NMIMS',
  },

  description:
  'Official website of 4C NMIMS, the Marketing Cell of MPSTME. Explore flagship events, competitions, sponsors, initiatives, and the people driving them.',
  keywords: [
    '4C NMIMS',
    'Marketing Cell',
    'MPSTME',
    'NMIMS',
    'Marketing Committee',
    'Student Committee',
    'Wings and Roots',
    'Roulette',
    'DeBattle',
    'Marketing Cell of MPSTME',
  ],

  authors: [
    {
      name: '4C NMIMS',
    },
  ],

  alternates: {
    canonical: 'https://www.4cnmims.in',
  },

  openGraph: {
    title: '4C NMIMS | Marketing Cell of NMIMS MPSTME',
    description:
      'Official website of 4C NMIMS. Explore our events, team, sponsors, and initiatives.',
    url: 'https://www.4cnmims.in',
    siteName: '4C NMIMS',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '4C NMIMS',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '4C NMIMS | Marketing Cell of MPSTME NMIMS',
    description:
      'Official website of 4C NMIMS. Explore our events, team, sponsors, and initiatives.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
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
        <Script
  id="organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({{
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '4C NMIMS',
  alternateName: 'Marketing Cell of NMIMS MPSTME',
  url: 'https://www.4cnmims.in',
  logo: 'https://www.4cnmims.in/apple-icon.png',
  sameAs: [
    'https://www.instagram.com/4cnmims/',
    'https://www.linkedin.com/company/4c-nmims/',
  ],
  department: {
    '@type': 'Organization',
    name: 'Marketing Cell of NMIMS MPSTME',
  },
}),
  }}
/>
        <Script
  id="website-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '4C NMIMS',
      url: 'https://www.4cnmims.in',
    }),
  }}
/>
        <Toaster />
      </body>
    </html>
  );
}
