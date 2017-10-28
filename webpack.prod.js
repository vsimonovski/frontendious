const merge = require('webpack-merge');
const common = require('./webpack.common');

const MinifyPlugin = require('babel-minify-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [new MinifyPlugin(), new cleanWebpackPlugin(['dist'])]
});
