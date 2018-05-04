var webpack = require('webpack')
var path = require('path')
var DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');

module.exports = {
  entry: './src/index',
  mode: 'production',
  output: {
    libraryTarget: 'umd',
    library: 'ReactYearMonthSelector',
    path: path.resolve('./dist/'),
    filename: 'react-year-month-selector.js'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader" },
      { test: /\.css$/, use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ] },
      
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.ts', '.tsx']
  },
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-input-mask': {
        root: 'react-input-mask',
        commonjs2: 'react-input-mask',
        commonjs: 'react-input-mask',
        amd: 'react-input-mask'
      }
    },
    {
      'react-onclickoutside': {
        root: 'onClickOutside',
        commonjs2: 'react-onclickoutside',
        commonjs: 'react-onclickoutside',
        amd: 'react-onclickoutside'
      }
    }
  ],
  node: { Buffer: false },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new DeclarationBundlerPlugin({
      moduleName:'ReactYearMonthSelector',
      out:'./types.d.ts',
    })
  ]
}
