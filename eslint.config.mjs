import nextConfig from 'eslint-config-next';
import prettierConfig from 'eslint-config-prettier';

const config = [
  // Ignore build artifacts and vendored code
  {
    ignores: [
      '.next/**',
      '**/.next/**',
      'node_modules/**',
      'public/**',
      'dist/**',
      'out/**',
    ],
  },
  ...nextConfig,
  prettierConfig,
];

export default config;
