const webpack = require('webpack');
const path = require('path');

const entry = [
  './frontend/main.js'
];

const output = {
  path: path.resolve(__dirname, 'build'),
  publicPath: '/build/',
  filename: 'bundle.js',
};

module.exports = {
  entry, output,
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ // multiple loaders load in reverse order
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }]
    }]
  },
};