const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "index.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 4000,
    hot: true,
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm|wav)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            name: "[contenthash].[ext]",
            outputPath: "assets",
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./src/assets/img/rocket.png"
    }),
  ],
};
