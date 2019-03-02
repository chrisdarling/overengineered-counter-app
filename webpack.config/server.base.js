const paths = require('../config/paths')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpackNodeExternals = require('webpack-node-externals')

const pathsToClean = [paths.serverBuild]

module.exports = {
    name: 'server',
    target: 'node',
    entry: paths.serverEntry,
    plugins: [new CleanWebpackPlugin(pathsToClean, {}),],
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: paths.serverBuild,
        publicPath: '/build'
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
                        [
                            '@babel/plugin-proposal-decorators',
                            {
                                legacy: true,
                            }
                        ],
                        [
                            '@babel/plugin-proposal-class-properties',
                            {
                                loose: true
                            }
                        ],
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
    externals: [webpackNodeExternals()]
}