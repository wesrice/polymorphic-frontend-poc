const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
    port: process.env.PORT || 4000,
  },
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
      exclude: /node_modules/,
      test: /\.ts(x?)$/,
      use: [{
        loader: 'ts-loader'
      }]
    },
    {
      test: /\.css$/,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
    },
    {
      enforce: 'pre',
      loader: 'source-map-loader',
      test: /\.js$/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:  path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.css', '.js', '.ts', '.tsx'],
    modules: ["src", "node_modules"],
  }
};
