/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CLIENT_KEY: process.env.MIDTRANS_CLIENT_KEY,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        });
        return config;
    },
};

module.exports = nextConfig;
