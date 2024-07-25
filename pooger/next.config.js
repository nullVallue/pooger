/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {

  env: {

  },

  async redirects(){
    return [
      {
        source : "/",
        destination: "/pages/public/landingPage",
        permanent: true,
      },
    ]
  }
};
