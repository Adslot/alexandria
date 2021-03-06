const path = require('path');

const host = '0.0.0.0';
const port = 8000;
const srcPath = path.join(__dirname, '/../src');
const publicPath = '/assets/';
const autoprefixer = require('autoprefixer');

module.exports = {
  debug: true,
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath,
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    host,
    hot: true,
    port,
    publicPath,
    noInfo: true,
  },
  postcss: () => [
    autoprefixer({
      browsers: [
        'last 2 versions',
        '> 5%',
        'ie >= 8',
        'not and_chr > 0',
        'not and_uc > 0',
        'not android > 0',
        'not ie_mob > 0',
        'not ios_saf > 0',
        'not op_mini > 0',
      ],
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: `${srcPath}/components/`,
      styles: `${srcPath}/styles/`,
    },
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded',
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
};
