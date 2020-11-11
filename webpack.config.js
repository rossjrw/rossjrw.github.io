const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CnameWebpackPlugin = require('cname-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js?[contenthash:5]',
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
      { test: /\.toml$/, use: ['raw-loader'] },
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
      meta: { viewport: "width=device-width, initial-scale=1" }
    }),
    new CnameWebpackPlugin({
      domain: "rossjrw.com",
    }),
  ],
};
