const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');

const baseConfig = require('./base');

const config = _.merge({
  entry: [
    './src/components/run.jsx',
  ],
  cache: true,
  devtool: 'eval',
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: path.join(__dirname, '/../src'),
});

module.exports = config;
