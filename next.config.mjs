/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    domains: [
      'merakiui.com',
      "assets.aceternity.com",
      'gomoonbeam.com',
      'cursor.so',
      'userogue.com',
      'editorially.org',
      'editrix.ai',
      'app.pixelperfect.quest',
      'algochurn.com',
      'ui.aceternity.com',
      'tailwindmasterkit.com',
      'smartbridgetech.com',
      'renderwork.studio',
      'cremedigital.com',
      'goldenbellsacademy.com',
      'invoker.lol',
      'efreeinvoice.com',
      'aceternity.com', // Add this line
    ],
  },
};

export default nextConfig;
