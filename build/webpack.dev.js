const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const merge = require('webpack-merge');
// const commonConfig = require('./webpack.common.js');

const devConfig = {
    mode: 'development', //development
    devtool: 'cheap-module-eval-source-map', //development:'cheap-module-eval-source-map' production:'cheap-module-source-map'
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 8081,
        open: true,
        hot: true, //hrm 需要配置的
        // hotOnly: true //hrm 需要配置的
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //hrm 需要配置的
        // new BundleAnalyzerPlugin()
    ],
}

// module.exports = merge(commonConfig, devConfig)
module.exports = devConfig