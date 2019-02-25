const paths = require('./config/paths')
const webpack = require('webpack')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
    name: 'server',
    mode: 'development',
    target: 'node',
    entry: paths.serverEntry,
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
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
    externals: [webpackNodeExternals()]
}