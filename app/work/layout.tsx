import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://dibbayajyoti.com";

export const metadata: Metadata = {
  title: "Rust & Systems Programming | Dibbayajyoti Roy",
  description: "Explore Dibbayajyoti's passion for Rust, from low-level systems and hardware to high-performance web applications and games.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Rust & Systems Programming | Dibbayajyoti Roy",
    description: "Deep dive into systems programming and building high-performance software with Rust.",
    url: `${baseUrl}/rust`,
  },
  twitter: {
    title: "Rust & Systems Programming | Dibbayajyoti Roy",
    description: "Deep dive into systems programming and building high-performance software with Rust.",
  },
};

export default function RustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
