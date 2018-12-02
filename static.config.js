import webpackConfig from './webpack.config.js'
import 'babel-polyfill'
import webpack from 'webpack'

import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  getRoutes: async () => {

    return [
    {
      path: '/'
    },
    {
      path: '/register'
    },
    {
      path: '/register-school'
    },
  ]},
  entry: './src/index.js',
  webpack: config => {
    config = Object.assign(webpackConfig, config)
    config.module.rules = webpackConfig.module.rules
    return config
  },
  devServer: {
    ...webpackConfig.devServer
  }
}
