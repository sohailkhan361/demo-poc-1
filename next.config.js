const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
    images: {
        // domains: ['podiumaudio.com'], // Add the domains for your images, deprecated
        remotePatterns: [{
            'hostname': 'podiumaudio.com'
        }]
    },
});

module.exports = nextConfig;
