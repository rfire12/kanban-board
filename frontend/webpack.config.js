const path = require('path'); // Manipulates filepaths
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const webpackNodeExternarls = require('webpack-node-externals');

const serverConfig = {
  entry: './client_server/server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'server_bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { modules: true } }, 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff(2)|jpeg|jpg)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '/font/[hash].[ext]',
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
  ],
  externals: [webpackNodeExternarls()],
};

const clientConfig = {
  entry: './src/index.jsx',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js',
    publicPath: '/public',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { modules: true } }, 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff(2)|jpeg|jpg)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '/font/[hash].[ext]',
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
  ],
};

module.exports = [serverConfig, clientConfig];
