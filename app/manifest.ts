import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dibbayajyoti Roy — Full Stack & Rust Backend Engineer",
    short_name: "Dibbayajyoti Roy",
    description:
      "Dibbayajyoti Roy — hackathon winner and Full Stack Engineer at Yupcha Softwares. Rust backend, WebAssembly, React, and Next.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7F7",
    theme_color: "#080808",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
