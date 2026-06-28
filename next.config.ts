import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/dehydrated-garlic",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/dehydrated-white-onion",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/dehydrated-red-pink-onion",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/cumin-seeds",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/coriander-seeds",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/fennel-seeds",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/dehy-fresh-fried-onion",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/red-chilli",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/turmeric",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/spray-dried-lemon-powder",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/mint-leaves-powder",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/moringa-leaves-powder",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

