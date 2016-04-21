/* eslint-disable no-var */
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './scripts/index'
    ],
    devtool: 'eval-source-map',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new ExtractTextPlugin('weui.min.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            },
            {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'scripts')
        }]
    }
};
