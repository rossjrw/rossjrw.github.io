const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const CnameWebpackPlugin = require('cname-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: { format: { comments: false } }
      })
    ]
  },
  plugins: [
    new CnameWebpackPlugin({
      domain: "rossjrw.com",
    }),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: [ '/' ]
    }),
  ]
});
