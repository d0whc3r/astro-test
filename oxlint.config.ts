export default {
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": [
    "astro",
    "typescript",
    "unicorn",
    "oxc"
  ],
  "categories": {
    "correctness": "error"
  },
  "rules": {
    "astro/no-confusing-languages": "error",
    "typescript/no-explicit-any": "off",
    "import/no-unresolved": "off"
  },
  "env": {
    "builtin": true
  },
  "settings": {
    "import/resolver": {
      "typescript": true,
      "astro": true
    }
  },
  "overrides": [
    {
      "files": ["*.astro"],
      "parser": "astro"
    },
    {
      "files": ["*.ts", "*.tsx", "*.mts", "*.cts"],
      "parser": "typescript"
    }
  ]
}