const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: ["./index.js"],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    path: path.resolve(__dirname, "public"),
  },
};
