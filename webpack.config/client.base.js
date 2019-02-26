const paths = require('../config/paths')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')

const pathsToClean = [paths.clientBuild]

module.exports = {
    target: 'web',
    entry: paths.clientEntry,
    plugins: [
        new CleanWebpackPlugin(pathsToClean, {}),
        new webpack.HashedModuleIdsPlugin(),
        new WriteFileWebpackPlugin(),
        new ManifestPlugin({ fileName: 'manifest.json' }),
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