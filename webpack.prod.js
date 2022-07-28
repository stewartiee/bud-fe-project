const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const config = require('./webpack.common');

module.exports = merge(config, {
    mode: 'production',
    devtool: 'nosources-source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
});
