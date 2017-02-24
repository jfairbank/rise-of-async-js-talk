const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: path.join(__dirname, 'demo', 'src', 'main.js'),

  output: {
    path: path.join(__dirname, 'demo', 'public'),
    filename: 'main.js',
    publicPath: 'http://localhost:3000/',
  },

  resolve: {
    modules: [
      path.join(__dirname, 'demo', 'src'),
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]',
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'demo/src/index.ejs'),
    }),
  ],
};

if (isProduction) {
  config.output.filename = 'main-[chunkhash].js';
  config.output.publicPath = '/';

  config.module.rules.push({
    test: /\.css$/,

    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader',
    }),
  });

  config.plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),

    new ExtractTextPlugin('main-[chunkhash].css'),

    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
    }),

    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }) // eslint-disable-line comma-dangle
  );
} else {
  config.devtool = 'cheap-module-eval-source-map';

  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  });

  config.plugins.push(new webpack.NamedModulesPlugin());
}

module.exports = config;
