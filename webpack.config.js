const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    hot: true,
    compress: true,
    port: 9000,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Application',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
};
