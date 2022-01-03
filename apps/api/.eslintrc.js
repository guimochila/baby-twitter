module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:jsdoc/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'jsdoc/valid-types': 'off',
  },
  plugins: ['jsdoc', 'prettier'],
}
