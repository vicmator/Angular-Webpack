var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var basePath = __dirname;

module.exports = {

  context: path.join(basePath, "src"),

  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html']
  },

  entry: {
    app: './index.ts',
    styles: [
      './css/site.css'
    ],
    vendor: [
      "core-js",
      "reflect-metadata",
      "zone.js",
      "@angular/core",
      "@angular/platform-browser",
      "@angular/platform-browser-dynamic",
      "@angular/common",
      "@angular/compiler",
      "rxjs"
    ]
  },

  output: {
    path: path.join(basePath, "dist"),
    filename: '[name].js'
  },

  devServer: {
    contentBase: './dist', //Content base
    inline: true, //Enable watch and live reload
    // noInfo: true,
    host: 'localhost',
    port: 8080,
    stats: 'minimal'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]

}
