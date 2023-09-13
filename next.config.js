/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: "/dev-mode-bug",
  rewrites: async () => [
    {
      source: `/dev-mode-bug/_next/static/:path*`,
      destination: "/_next/static/:path*",
    },
  ],
};
