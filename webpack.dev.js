const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader?name=images/[name].[ext]']
            }
        ]
    },
    devServer: {
        proxy: {
            '/api/**': {
                target: 'http://localhost:3001'
            }
        },
        port: '3000'
    }
});
