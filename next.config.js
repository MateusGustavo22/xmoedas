const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    sw: '/sw.js'
});

const nextConfig = withPWA({
    reactStrictMode: true,
    compiler: {
      styledComponents: true
    },
});
module.exports = nextConfig;