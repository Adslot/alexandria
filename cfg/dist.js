const _ = require('lodash');
const baseConfig = require('./base');
const path = require('path');
const webpack = require('webpack');

const alexandriaPath = path.resolve(__dirname, '../src/components/alexandria');

const config = _.merge(baseConfig, {
  cache: false,
  devtool: 'sourcemap',
  externals: {
    lodash: {
      root: '_',
      commonjs2: 'lodash',
      commonjs: 'lodash',
      amd: 'lodash',
    },
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  entry: {
    main: path.join(alexandriaPath, '/components-main.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'alexandria-[name].js',
    libraryTarget: 'umd',
    library: 'Alexandria',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: false,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
});

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: path.join(__dirname, '/../src'),
});

module.exports = config;
