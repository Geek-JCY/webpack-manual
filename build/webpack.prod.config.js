const path = require('path')
const merge = require('webpack-merge')
const config = require('../config')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: config.dev.mode,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: []
  }
})

