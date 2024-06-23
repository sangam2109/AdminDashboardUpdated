// Import necessary modules
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Manually define __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define the Next.js configuration
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    sassOptions: {
        includePaths: [join(__dirname, 'styles')],
    },
};

export default nextConfig;
