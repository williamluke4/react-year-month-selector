var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    port: 8080
  },
  mode: 'production',
  entry: [
    './docs/index.tsx'
  ],
  output: {
    path: path.resolve('./docs/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'react-year-month-selector/dist/react-year-month-selector.css': path.resolve('./src/styles/index.scss'),
      'react-year-month-selector': path.resolve('./src/index.tsx')
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.css$/, use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ] },
      
    ]
  },
  devtool: 'inline-source-map',
  node: { Buffer: false },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'docs/index.ejs',
      inject: 'body'
    })
  ]
}
