module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  extends: ['airbnb-base', 'eslint-config-prettier'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ["jest"],
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
};
