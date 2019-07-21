const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const webpack = require('webpack');

module.exports = {
    entry: {
        main: "./src/index.js"
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
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
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
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
            ignoreOrder: false, // Enable 
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
        })
    ],
    performance: false,
    optimization: {
        runtimeChunk: {
            name:'runtime'
        },
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors'
                }
            }
        }
    },
    output: {
        // publicPath: '/',
        filename: '[name][contenthash].js',
        chunkFilename: '[name][contenthash].js',
        path: path.resolve(__dirname, '../dist')
    }
}