module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    "react/prop-types": "off",
    "no-console": "error",
    "react/jsx-props-no-spreading": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-default-export": "error",
    "import/order": [
      "error",
      {
        "groups": [["external", "builtin"], ["parent", "internal"], ["index", "sibling"]],
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "moduleDirectory": ["node_modules", "src/"],
        "extensions": [".ts", ".tsx"],
      },
    },
  },
  "overrides": [
    {
      "files": ["**/!(setupTests|test/utils|*.spec.*|*.test.*).ts?x"],
      "rules": {
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            "allowExpressions": true,
          },
        ],
      },
    },
  ],
}