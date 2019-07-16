const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    mode: 'development', //development
    // entry: "./src/index.js",
    entry: {
        main: "./src/index.js"
    },
    devtool: 'cheap-module-eval-source-map', //development:'cheap-module-eval-source-map' production:'cheap-module-source-map'
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 8081,
        open: true,
        hot: true, //hrm 需要配置的
        hotOnly: true //hrm 需要配置的
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                //当我们配置options内容太多的时候，我们可以把这部分放入到.babelrc文件内
                options: {
                    //1.如果是自己的业务代码可以用用preset-env
                    // presets: [
                    //     [
                    //         '@babel/preset-env',
                    //         {
                    //             useBuiltIns: 'usage',
                    //             targets: {
                    //                 chrome: "67"
                    //             },
                    //         }
                    //     ]
                    // ]

                    //2.如果是自己封装的ui组件那么就要使用
                    // plugins: [
                    //     [
                    //         '@babel/plugin-transform-runtime',
                    //         {
                    //             "corejs": 2,
                    //             "helpers": true,
                    //             "regenerator": true,
                    //             "useESModules": false
                    //         }
                    //     ]
                    // ]
                }
            },
            {
                test: /\.(png|jeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[path][name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 20480
                    }
                }]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin() //hrm 需要配置的
    ],
    output: {
        publicPath: '/',
        filename: 'dist.js',
        path: path.resolve(__dirname, 'dist')
    }
}