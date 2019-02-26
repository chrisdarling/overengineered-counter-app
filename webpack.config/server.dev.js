const webpack = require('webpack')
const baseConfig = require('./server.base')

module.exports = {
    ...baseConfig,
    mode: 'development',
    plugins: [
        ...baseConfig.plugins,
        new webpack.HotModuleReplacementPlugin()
    ]
}
