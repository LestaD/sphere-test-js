
var Webpack = require('webpack');

var config = require('./webpack.config.js');
var L = require('./loaders.js');

config.entry.sphere.push(
  'webpack-dev-server/client',//?http://localhost:5000',
  'webpack/hot-dev-server'
);

config.cache = true;
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
  L.jpeg
];

module.exports = config;
