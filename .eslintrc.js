module.exports = {
  settings: {
    react: {
      version: "999.999.999" // Disable warning from airbnb typescript
    }
  },
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'promise',
    'unicorn'

  ],
  extends: [
    'airbnb-typescript',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    "oclif",
    "oclif-typescript",
    'prettier',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true
  },
  rules: {
    'unicorn/prevent-abbreviations': 'off',
    'import/prefer-default-export': 'off',

  }
}
