const path = require("path"); // Manipulates filepaths
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { modules: true } },
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(woff(2)|jpeg|jpg)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "./font/[hash].[ext]",
              mimetype: "application/font-woff"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: [
              autoprefixer()
          ]
      }
  })
  ],
  devServer: {
    watchOptions: {
      ignored: "./src/assets/fonts/fontawesome/"
    }
  }
};
