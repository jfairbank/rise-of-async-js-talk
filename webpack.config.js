const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'demo', 'src', 'main.js'),

  output: {
    path: path.join(__dirname, 'demo', 'public', 'assets'),
    publicPath: 'assets',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
