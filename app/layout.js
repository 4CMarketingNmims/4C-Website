import FooterHero from "@/components/FooterHero";
import Footer from "@/components/Footer";
import ClientBody from "@/components/ClientBody";
import SmoothScroller from "@/components/SmoothScroller";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | 4C NMIMS",
    default: "4C NMIMS | Marketing Cell of NMIMS MPSTME",
  },
  description:
    "4C is the college's marketing committee — Connect, Collect, Commence, Contest. Strategy and design for every department event.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientBody>
          <SmoothScroller>
            <main>{children}</main>

            {/* Footer is intentionally not rendered.
               It will be added back when the redesigned
               website goes live. */}

          </SmoothScroller>
        </ClientBody>
      </body>
    </html>
  );
}