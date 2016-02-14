
var Webpack = require('webpack');
var Path = require('path');

var config = require('./webpack.config.js');
var L = require('./webpack.loaders.js');

config.output.publicPath = 'http://localhost:7000/'

config.entry.sphere.unshift('webpack-hot-middleware/client');

config.devtool = 'inline-source-map';
// config.cache = true;
// config.debug = true;


config.plugins = [
  new Webpack.optimize.OccurenceOrderPlugin(),
  new Webpack.HotModuleReplacementPlugin(),
  new Webpack.DefinePlugin({
    APIURL: JSON.stringify('http://localhost:' + (process.env.APIPORT || 3000) + '/api')
  })
];


config.module.loaders = [
  { test: L.css.test, loaders: L.css_loaders_dev },
  { test: L.styl.test, loaders: L.styl_loaders_dev },
  L.html,
  L.json,
  L.jpeg,
  L.font
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
