'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"/proxyApi"',
  USE_PROXY: false,
  PROXY_SERVER: 'http://127.0.0.1:6061/ura'
})
