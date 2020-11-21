const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CnameWebpackPlugin = require('cname-webpack-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.ts',
    logo: './src/pages/logo.ts',
  },
  output: {
    filename: 'bundle.[contenthash:5].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.ts$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.s[ac]ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'file-loader',
          options: { esModule: false, name: "[name].[ext]?[hash:5]" }
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "rossjrw",
      template: './src/template.ejs',
      filename: 'index.html',
      chunks: ['main'],
      meta: { viewport: "width=device-width, initial-scale=1" },
    }),
    new HtmlWebpackPlugin({
      title: "rossjrw · Logo Recolour Tool",
      template: './src/template.ejs',
      filename: 'logo/index.html',
      chunks: ['logo'],
      meta: { viewport: "width=device-width, initial-scale=1" },
    }),
    new CnameWebpackPlugin({
      domain: "rossjrw.com",
    }),
  ],
};
