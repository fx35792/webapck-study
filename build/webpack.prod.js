const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const prodConfig = {
    mode: 'production', //development
    devtool: 'cheap-module-source-map', //development:'cheap-module-eval-source-map' production:'cheap-module-source-map'
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
}
module.exports = merge(commonConfig, prodConfig)