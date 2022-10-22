module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'plugin:react/recommended',
    'standard',
    "eslint:recommended", 
    "plugin:react/recommended", 
    "plugin:prettier/recommended"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/react-in-jsx-scope": "off"
  },
  env: {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  settings: {
    "react": {
      "version": "detect"
    }
  },
  ignorePatterns: ["**/node_modules/**"]
}
