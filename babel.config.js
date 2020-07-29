module.exports = {
  sourceType: 'unambiguous',
  plugins: ['@babel/plugin-transform-runtime'],
  presets: [
    ['@babel/preset-env', { modules: 'cjs', targets: { node: 10 } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
