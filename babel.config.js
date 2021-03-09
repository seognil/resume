module.exports = {
  plugins: [
    ['babel-plugin-module-resolver', { root: './', alias: { '#': './src' } }],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
