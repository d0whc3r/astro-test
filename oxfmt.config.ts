export default {
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "options": {
        "parser": "typescript"
      }
    },
    {
      "files": ["*.css"],
      "options": {
        "parser": "css"
      }
    }
  ]
}
