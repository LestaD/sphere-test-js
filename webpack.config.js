
var Path = require('path');
var Util = require('util');
var Webpack = require('webpack');
var Autoprefixer = require('autoprefixer');
var ShortCss = require('postcss-short');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var Package = require('./package.json');
var L = require('./webpack.loaders.js');



module.exports = {
  context: Path.join(__dirname, 'src'),
  entry: {
    sphere: ['./client.js']
  },
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
      L.styl,
      L.html,
      L.css,
      L.jpeg,
      L.font
    ],
    preLoaders: [
      L.jsx,
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.styl'],
    modulesDirectories: [
      'web_modules',
      'node_modules',
      Path.join(__dirname, 'src'),
      Path.join(__dirname, 'src', 'components')
    ]
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin(Path.join('css', Util.format('[name]-%s.css', Package.version)), {
      allChunks: true
    }),
    new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new Webpack.optimize.DedupePlugin(),
    new Webpack.NoErrorsPlugin(),
    new Webpack.DefinePlugin({ APIURL: JSON.stringify('/api') })
  ],
  postcss: function() {
    return [Autoprefixer, ShortCss];
  }
};


