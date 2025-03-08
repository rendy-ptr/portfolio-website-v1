module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.eslint.json"],
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: [".json"],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-shadow": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "node_modules/**",
    ".next/**",
    "out/**",
    "public/**",
    "*.config.js",
    "package.json",
  ],
  overrides: [
    {
      files: ["*.js", "*.cjs", "*.mjs", "package.json"],
      parserOptions: {
        project: null,
      },
    },
  ],
};
