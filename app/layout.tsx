import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree, Shantell_Sans } from "next/font/google";
import "./globals.css";

import { Curtain } from "@/components/site/curtain";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WhatsAppBar } from "@/components/site/whatsapp-bar";
import { site } from "@/lib/data";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const shantell = Shantell_Sans({
  variable: "--font-shantell",
  subsets: ["latin"],
  display: "swap",
  axes: ["BNCE", "INFM", "SPAC"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    template: "%s — TeddyPups U.A.E.",
  },
  description: site.description,
  applicationName: "TeddyPups U.A.E.",
  keywords: [
    "teacup puppies Dubai",
    "Korean teacup pomeranian",
    "micro poodle Dubai",
    "maltipoo Dubai",
    "cavapoo Dubai",
    "puppies for sale UAE",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "TeddyPups U.A.E.",
    title: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    description: site.description,
    url: site.url,
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    description: site.description,
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fffdf8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${figtree.variable} ${shantell.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only-focusable fixed left-4 top-4 z-[100] rounded-full bg-cocoa px-5 py-3 font-semibold text-milk"
        >
          Skip to content
        </a>
        <Curtain />
        <Header />
        <main id="main" tabIndex={-1} className="relative pt-[var(--header-h)] outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppBar />
      </body>
    </html>
  );
}
