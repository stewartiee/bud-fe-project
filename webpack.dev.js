const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const config = require('./webpack.common');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        hot: true,
        static: './dist',
    },
});
