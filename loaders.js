
var Package = require('./package.json');
var Extract = require('extract-text-webpack-plugin');
var Path = require('path');


// postLoader
exports.jsx = {
  test: /\.jsx?$/,
  loader: 'babel',
  query: {
    // optional: 'runtime',
    cacheDirectory: true,
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-decorators-legacy']
  },
  exclude: /node_modules/
};


exports.css_loaders = [
  'css?importLoaders=1&modules',
  'postcss'
];

exports.css_loaders_dev = [
  'style',
  'css?sourceMap&importLoaders=1&modules&localIdentName=[path][name]_[local]__[hash:base64:5]',
  'postcss'
];


exports.css = {
  test: /\.css$/,
  loaders: [Extract.extract('style', exports.css_loaders)]
};


exports.styl_loaders = exports.css_loaders.slice();
exports.styl_loaders.push('stylus?paths=' + Path.join(__dirname, 'src', 'stylus'));

exports.styl = {
  test: /\.styl$/,
  loaders: [Extract.extract('style', exports.styl_loaders)]
};

exports.styl_loaders_dev = exports.css_loaders_dev.slice();
exports.styl_loaders_dev.push('stylus?paths=' + Path.join(__dirname, 'src', 'stylus'));


exports.html = {
  test: /\.html?$/,
  loaders: [
    'file?name=[path][name].[ext]',
    'template-html?' + [
      'raw=true',
      'engine=lodash',
      'version=' + Package.version,
      'dev=false'
    ].join('&')
  ]
};


exports.json = {
  test: /\.json$/,
  loader: 'json'
};


exports.jpeg = {
  test: /\.jpe?g$/,
  loader: 'file',
  query: {
    name: '[path][name]-[hash:8].[ext]'
  }
};

