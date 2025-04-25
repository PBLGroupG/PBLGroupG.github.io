/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/PBLGroupG.github.io' : '',
  assetPrefix: isGithubPages ? '/PBLGroupG.github.io/' : '',
};

module.exports = nextConfig;
