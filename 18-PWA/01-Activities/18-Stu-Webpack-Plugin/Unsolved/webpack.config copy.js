const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = {
  entry: "./public/assets/js/app.js",
  output: {
    path: __dirname + "/public/dist/",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [new BundleAnalyzerPlugin()]
};
module.exports = config;