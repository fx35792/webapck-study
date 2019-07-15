const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    mode: 'development', //development
    // entry: "./src/index.js",
    entry: {
        main: "./src/index.js"
    },
    module: {
        rules: [{
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
        })
    ],
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'dist')
    }
}