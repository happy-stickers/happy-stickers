const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/prod.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  mode: 'production'
};
