const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const TerserPlugin = require("terser-webpack-plugin")
const CnameWebpackPlugin = require("cname-webpack-plugin")

const dev = process.env.NODE_ENV === "development"

module.exports = {
  mode: process.env.NODE_ENV,
  ...(dev ? { devtool: "eval-source-map" } : {}),
  entry: {
    main: "./src/pages/index.ts",
    logo: "./src/pages/logo.ts",
  },
  output: {
    filename: "bundle.[contenthash:5].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.vue$/, use: "vue-loader" },
      { test: /\.ts$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
              },
            },
          },
        ],
      },
      {
        test: /\.woff2?$/,
        use: {
          loader: "file-loader",
          options: { name: "[name].[ext]" },
        },
      },
      {
        test: /\.(png|svg|web[mp])$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[path][name].[ext]?[hash:5]",
            context: "src/assets",
          },
        },
      },
      { test: /\.mjs$/, include: /node_modules/, type: "javascript/auto" },
    ],
  },
  ...(dev
    ? {}
    : {
        optimization: {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              extractComments: false,
              terserOptions: { format: { comments: false } },
            }),
          ],
        },
      }),
  resolve: {
    extensions: [".ts", ".js", ".vue", ".mjs"],
    alias: { "@": path.resolve(__dirname, "src") },
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "rossjrw",
      template: "./src/template.ejs",
      filename: "index.html",
      chunks: ["main"],
      meta: { viewport: "width=device-width, initial-scale=1" },
    }),
    new HtmlWebpackPlugin({
      title: "rossjrw · Logo Recolour Tool",
      template: "./src/template.ejs",
      filename: "logo/index.html",
      chunks: ["logo"],
      meta: { viewport: "width=device-width, initial-scale=1" },
    }),
    ...(dev ? [] : [new CnameWebpackPlugin({ domain: "rossjrw.com" })]),
  ],
}
