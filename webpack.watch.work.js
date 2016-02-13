
var Path = require('path');
var Util = require('util');
var Webpack = require('webpack');
var Autoprefixer = require('autoprefixer');
var ShortCss = require('postcss-short');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var Package = require('./package.json');
var L = require('./loaders.js');



module.exports = {
  context: Path.join(__dirname, 'src'),
  entry: {
    sphere: ['webpack-hot-middleware/client', './application.js']
  },
  devtool: 'inline-source-map',
  output: {
    path: Path.join(__dirname, 'dist'),
    filename: Util.format('js/[name]-%s.js', Package.version),
    publicPath: '/',
    pathinfo: false
  },
  target: 'web',
  cache: false,
  debug: false,
  module: {
    loaders: [
      L.json,
      { test: L.styl.test, loaders: L.styl_loaders_dev },
      L.html,
      { test: L.css.test, loaders: L.css_loaders_dev },
      L.jpeg
    ],
    preLoaders: [
      L.jsx,
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'web_modules',
      'node_modules',
      Path.join(__dirname, 'src'),
      Path.join(__dirname, 'src', 'components')
    ]
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.HotModuleReplacementPlugin()
  ],
  postcss: function() {
    return [Autoprefixer, ShortCss];
  },
  devServer: {
    contentBase: Path.resolve(__dirname, 'src'),
    hot: true,
    noInfo: true,
    inline: true,
    stats: {
      color: true
    },
    historyApiFallback: true
  }
};


