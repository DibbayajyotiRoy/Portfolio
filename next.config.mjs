/** @type {import('next').NextConfig} */
const nextConfig = {
  // Canonicalize the host: every www request 301s to the apex in a single hop,
  // path preserved. Fixes the GSC "Redirect error" on www.dibbayajyoti.com/work.
  // Keep this as the ONLY host-redirect layer (no middleware, no host-level
  // redirect that points apex -> www) to avoid a redirect loop.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dibbayajyoti.com" }],
        destination: "https://dibbayajyoti.com/:path*",
        permanent: true,
      },
    ];
  },

  // Security / best-practice headers (HSTS is already set at the platform level).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
