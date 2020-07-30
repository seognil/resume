module.exports = {
  sourceType: 'unambiguous',
  plugins: [
    '@babel/plugin-transform-runtime',
    ['babel-plugin-module-resolver', { root: './', alias: { '#': './src' } }],
  ],
  presets: [
    ['@babel/preset-env', { modules: 'cjs', targets: { node: 10 } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
