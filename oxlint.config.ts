export default {
  $schema: "./node_modules/oxlint/configuration_schema.json",
  plugins: ["typescript", "unicorn", "oxc", "import", "jsx-a11y"],
  categories: {
    correctness: "error",
  },
  rules: {
    "typescript/no-explicit-any": "off",
  },
  env: {
    builtin: true,
  },
  ignorePatterns: ["**/*.astro", "**/*.vue", "dist/**", "node_modules/**", ".astro/**"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      rules: {},
    },
  ],
};
