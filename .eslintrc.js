module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'prefer-const': 'error',
    'arrow-parens': [2, 'as-needed'],
    'no-await-in-loop': 'error',
    'no-console': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: 'next|_.+', varsIgnorePattern: '_' }
    ],
    'default-case': 'error'
  }
}
