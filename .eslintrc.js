module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard",
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"]
  }
};
