const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const DEV = process.env.npm_lifecycle_event === 'dev';

module.exports = {
  devtool: 'source-map',

  devServer: {
    port: 8080,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'src/assets'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: path.resolve(__dirname, 'src/index.jsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts.bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      DEV: JSON.stringify(DEV),
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.ejs'),
      inject: 'body',
    }),

    new ExtractTextWebpackPlugin({
      filename: 'styles.bundle.css',
    }),
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'stage-2'],
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        }),
      },
    ],
  },
};
