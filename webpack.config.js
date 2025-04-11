'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/js/main.jsx',
  // entry: './src/finalApp/main.jsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  // resolve: {
  //   extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        // test: /\.(scss)$/,
        // test: /\.s[ac]ss$/i,
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader',
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader',
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', title: 'Ooops' }),
    new webpack.HotModuleReplacementPlugin(),
    // favicon: 'public/favicon.ico',
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8090,
    // hot: true,
    historyApiFallback: true,
    open: true,
  },
};
