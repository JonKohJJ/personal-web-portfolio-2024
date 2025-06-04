/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: isGithubPages ? '/personal-web-portfolio-2024' : '',
};

export default nextConfig;
