import FooterHero from '@/components/FooterHero';
import Footer from '@/components/Footer';
import ClientBody from '@/components/ClientBody';
import SmoothScroller from '@/components/SmoothScroller';
import './globals.css';

export const metadata = {
  title: {
    template: '%s | 4C NMIMS',
    default: '4C NMIMS | Marketing Cell of NMIMS MPSTME',
  },
  description:
    "4C is the college's marketing committee — Connect, Collect, Commence, Contest. Strategy, design, and outreach for every department event.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientBody>
          <SmoothScroller>
            <main>{children}</main>
            <FooterHero />
            <Footer />
          </SmoothScroller>
        </ClientBody>
      </body>
    </html>
  );
}
