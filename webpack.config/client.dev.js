const webpack = require('webpack')
const baseConfig = require('./client.base')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    ...baseConfig,
    mode: 'development',
    plugins: [
        ...baseConfig.plugins,
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'server',
        //     generateStatsFile: true,
        //     statsOptions: { source: false }
        // }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}