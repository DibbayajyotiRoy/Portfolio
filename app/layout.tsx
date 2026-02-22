import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Dibbayajyoti Roy",
  description: "design engineering, and comms",
  metadataBase: new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
    siteName: "Dibbayajyoti Roy",
    images: [
      {
        url: `/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Dibbayajyoti Roy - Design Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`/twitter-image`],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
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
