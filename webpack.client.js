const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const clientPath = path.resolve(__dirname, 'build/public');
const pathsToClean = [clientPath]

module.exports = {
    mode: 'production',
    target: 'web',
    entry: './src/client/client.js',
    plugins: [
        new CleanWebpackPlugin(pathsToClean, {}),
        new webpack.HashedModuleIdsPlugin(),
        new ManifestPlugin({ fileName: 'manifest.json' })
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: clientPath,
        publicPath: '/build/public'
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