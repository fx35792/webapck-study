const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const prodConfig = {
    mode: 'production', //development
    devtool: 'cheap-module-source-map', //development:'cheap-module-eval-source-map' production:'cheap-module-source-map'
}
module.exports = merge(commonConfig, prodConfig)