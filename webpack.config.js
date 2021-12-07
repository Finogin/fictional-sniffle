const path = require("path");
const HTMLWEbpackplugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "build.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HTMLWEbpackplugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.DOMAIN": JSON.stringify(process.env.DOMAIN),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
