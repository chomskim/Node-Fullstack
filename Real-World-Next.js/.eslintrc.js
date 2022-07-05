module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  globals: {
    cy: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jest/no-disabled-tests': 'warn',
    'jest/no-identical-title': 'error',
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'jest/expect-expect': 'off',
  },
  plugins: ['simple-import-sort', 'jest', 'cypress'],
  ignorePatterns: [
    '01-a-brief-introduction-to-nextjs/custom-babel-and-webpack-configuration/pages/*',
    '09-testing-nextjs/with-cypress/cypress/*',
  ],
};
