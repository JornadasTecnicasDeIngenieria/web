import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

// Assign to a variable first and add ignore patterns
const base = compat.extends('next/core-web-vitals', 'prettier');

const config = [
  // Ignore build artifacts and vendored code
  {
    ignores: ['.next/**', '**/.next/**', 'node_modules/**', 'public/**', 'dist/**', 'out/**'],
  },
  ...base,
];

export default config;
