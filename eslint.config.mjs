// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked, // Enables type-aware rules
  {
    languageOptions: {
      globals: { ...globals.node },
      parserOptions: {
        projectService: true, // Recommended: Automatically finds your tsconfig.json
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // PERMISSIVE TYPE-AWARE OVERRIDES
      "@typescript-eslint/no-explicit-any": "off",        // Allow 'any' for speed
      "@typescript-eslint/no-floating-promises": "warn",  // Warn instead of error for un-awaited promises
      "@typescript-eslint/no-unsafe-assignment": "off",   // Allow assigning 'any' to variables
      "@typescript-eslint/no-unsafe-member-access": "off",// Allow accessing properties on 'any'
      "@typescript-eslint/no-unsafe-call": "off",         // Allow calling 'any' as a function
      "@typescript-eslint/restrict-template-expressions": "off", // Allow any type in `${}`
      
      // GENERAL PERMISSIVE OVERRIDES
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    },
  }
);
