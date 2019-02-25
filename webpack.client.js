const paths = require('./config/paths')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const pathsToClean = [paths.clientBuild]

module.exports = {
    mode: 'development',
    target: 'web',
    entry: paths.clientEntry,
    plugins: [
        new CleanWebpackPlugin(pathsToClean, {}),
        new webpack.HashedModuleIdsPlugin(),
        new WriteFileWebpackPlugin(),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'server',
        //     generateStatsFile: true,
        //     statsOptions: { source: false }
        // }),
        // new WorkboxPlugin.GenerateSW({
        //     // these options encourage the ServiceWorkers to get in there fast 
        //     // and not allow any straggling "old" SWs to hang around
        //     clientsClaim: true,
        //     skipWaiting: true
        // }),
        new ManifestPlugin({ fileName: 'manifest.json' }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: '[name].[hash].js',
        path: paths.clientBuild,
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-transform-arrow-functions',
                        [
                            'babel-plugin-styled-components',
                            {
                                ssr: true
                            }
                        ]
                    ]
                }
            }
        ]
    },
}