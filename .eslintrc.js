module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
