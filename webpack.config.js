const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true,
    port: 8080
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }, 
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        use: 'file'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('app.css')
  ]
};
