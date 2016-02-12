
var Webpack = require('webpack');
var Path = require('path');

var config = require('./webpack.config.js');
var L = require('./loaders.js');

// config.entry.sphere.unshift(
//   'webpack-dev-server/client?http://localhost:5000',
//   'webpack/hot/dev-server'
// );

// config.entry.client = 'webpack-dev-server/client?http://localhost:5000';

// config.cache = true;
config.debug = true;


config.plugins = [
  new Webpack.optimize.OccurenceOrderPlugin(),
  new Webpack.HotModuleReplacementPlugin()
];


var css = L.css;
css.loaders = L.css_loaders_dev;

var styl = L.styl;
styl.loaders = L.styl_loaders_dev;

config.module.loaders = [
  css,
  styl,
  L.html,
  L.json,
  L.jpeg,
  {
    test: /\.jsx?$/,
    loader: 'react-hot'
  }
];


config.devServer = {
  contentBase: Path.resolve(__dirname, 'src'),
  hot: true,
  noInfo: true,
  inline: true,
  stats: {
    color: true
  },
  historyApiFallback: true
}

module.exports = config;
