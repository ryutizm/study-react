module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: "true",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-var": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
