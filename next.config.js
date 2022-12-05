/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/member/:id',
//         destination: '/member/:id/view',
//         permanent: true,
//       },
//     ]
//   },
// }
