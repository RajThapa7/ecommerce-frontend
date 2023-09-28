const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fakestoreapi.com",
      "itti.com.np",
      "swiperjs.com",
      "images.unsplash.com",
      "transvelo.github.io",
      "www.apple.com",
    ],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
