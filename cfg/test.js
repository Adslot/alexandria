const path = require('path');
const srcPath = path.join(__dirname, '/../src/');

module.exports = {
  devtool: 'eval',
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '/../test'),
        ],
      },
      {
        test: /\.js?$/,
        include: [
          path.join(__dirname, '/../src'),
        ],
        loader: 'isparta',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      helpers: srcPath + 'helpers/',
      components: srcPath + 'components/',
      styles: srcPath + 'styles/',
    },
  },
};
