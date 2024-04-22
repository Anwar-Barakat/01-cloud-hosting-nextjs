/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "https://flowbite.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
