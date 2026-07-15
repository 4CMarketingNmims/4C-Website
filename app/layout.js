import FooterHero from '@/components/FooterHero';
import Footer from '@/components/Footer';
import ClientBody from '@/components/ClientBody';
import './globals.css';

export const metadata = {
  title: {
    template: '%s | 4C NMIMS',
    default: '4C NMIMS | Marketing Cell of NMIMS MPSTME',
  },
  description:
    "4C is the college's marketing committee — Connect, Collect, Commence, Contest. Strategy and design for every department event.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientBody>
          {/* The home-only scroll-snap container (formerly "SmoothScroller")
              used to live here, wrapping every route. That meant it never
              unmounted between page navigations, so its internal scroll
              position stuck around when you went from Home to any other
              page like About. It now lives only inside app/page.js, scoped
              to the Home page itself, so every other route gets normal
              document scrolling. */}
          <main>{children}</main>
          <FooterHero />
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}