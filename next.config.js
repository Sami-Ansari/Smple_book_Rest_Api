// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PGHOST:'ep-long-art-154941.us-east-2.aws.neon.tech',
    PGDATABASE:'neondb',
    PGUSER:'samiansari008836',
    PGPASSWORD:'ILTdMu4Bk5aD',
    ACCESS_TOKEN_SECRET: "46b828f30ae062e81e3f444f0a46f6821f18d1d79173b1293eb731b5592b9f4b455d2ed4eb74f45d6c00c9ac249ac06950bfd9e3510aeda8ae6b8fae86d0038d"
    
}
}

module.exports = nextConfig
