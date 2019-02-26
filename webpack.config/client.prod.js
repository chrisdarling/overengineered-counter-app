const baseConfig = require('./client.base')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    ...baseConfig,
    mode: 'production',
    plugins: [
        ...baseConfig.plugins,
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast 
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true
        }),
    ]
}