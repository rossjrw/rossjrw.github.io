const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { main: './src/main.ts', },
  output: { path: path.resolve(__dirname, 'dist'), },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.ts'],
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  plugins: [ new CleanWebpackPlugin() ],
};
