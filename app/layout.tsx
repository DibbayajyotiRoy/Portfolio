import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/react"
import { FramerProvider } from "@/components/framer-provider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Dibbayajyoti Roy – Full Stack Software Engineer & Rust Enthusiast",
  description: "Portfolio of Dibbayajyoti Roy, a Full Stack Software Engineer specializing in high-performance systems with Rust and modern web apps with React/Next.js.",
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
    title: "Dibbayajyoti Roy – Developer Portfolio",
    description: "Full Stack Software Engineer & Rust Enthusiast. Building high-performance systems and scalable web apps.",
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
    title: "Dibbayajyoti Roy – Developer Portfolio",
    description: "Full Stack Software Engineer specializing in Rust and modern web technologies.",
    images: [`/opengraph-image.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dibbayajyoti Roy",
  "url": "https://dibbayajyoti.com",
  "sameAs": [
    "https://github.com/DibbayajyotiRoy",
    "https://linkedin.com/in/dibbayajyoti-roy/"
  ],
  "jobTitle": "Full Stack Software Engineer"
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
          <FramerProvider>
            <Nav/>
            {children}
            <Footer />
          </FramerProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

export const revalidate = 300;
