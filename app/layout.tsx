import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/react"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Dibbayajyoti – Full Stack Developer Portfolio",
  description: "Portfolio of Dibbayajyoti, a full stack developer building fast and scalable web applications using React, Next.js and Node.js.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "YOUR_VERIFICATION_CODE",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Dibbayajyoti Portfolio",
    title: "Dibbayajyoti – Developer Portfolio",
    description: "Building scalable web applications with modern technologies.",
    images: [
      {
        url: `/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Dibbayajyoti Roy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dibbayajyoti – Developer Portfolio",
    description: "Full stack developer building scalable apps.",
    images: [`/opengraph-image.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dibbayajyoti",
  "url": "https://dibbayajyoti.com",
  "sameAs": [
    "https://github.com/YOUR_GITHUB",
    "https://linkedin.com/in/dibbayajyoti-roy/"
  ],
  "jobTitle": "Full Stack Developer"
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} 68e50d59-88e6-47d8-be3b-7aec8eb9f8af b5b5cc2f-bcfa-4b34-b5eb-419b51477b34 relative font-sans bg-whiteout selection:text-white 24576e23-44f4-4174-a049-9a0ebd609e65 selection:bg-pink-400 dark:bg-zinc-900 text-blackout dark:text-zinc-100`}
      >
        <ThemeProvider attribute="class">
          <Nav/>
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

export const revalidate = 300;
