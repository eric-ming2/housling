/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['media.discordapp.net', 'cdn.discordapp.com'],
    },
}

module.exports = nextConfig
