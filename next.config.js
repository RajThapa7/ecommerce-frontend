const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com", "itti.com.np", "swiperjs.com"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
