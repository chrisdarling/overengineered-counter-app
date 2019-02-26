const webpack = require('webpack')
const nodemon = require('nodemon')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const paths = require('../config/paths')
const clientConfig = require('../webpack.config/client.dev')
const serverConfig = require('../webpack.config/server.dev')
const { compilerPromise } = require('../config/utils')

const app = express()
const PORT = 8000

const start = async () => {
    clientConfig.entry = [
        `webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr`,
        clientConfig.entry,
    ];

    clientConfig.output.hotUpdateMainFilename = '[hash].hot-update.json';
    clientConfig.output.hotUpdateChunkFilename = '[hash].hot-update.js';

    const publicPath = clientConfig.output.publicPath;

    clientConfig.output.publicPath = [`http://localhost:${PORT}`, publicPath]
        .join('/')
        .replace(/([^:+])\/+/g, '$1/');

    serverConfig.output.publicPath = [`http://localhost:${PORT}`, publicPath]
        .join('/')
        .replace(/([^:+])\/+/g, '$1/');

    const multiCompiler = webpack([clientConfig, serverConfig])

    const clientCompiler = multiCompiler.compilers[0]
    const serverCompiler = multiCompiler.compilers[1]

    const clientPromise = compilerPromise('client', clientCompiler)
    const serverPromise = compilerPromise('server', serverCompiler)

    const watchOptions = {
        // poll: true,
        ignored: /node_modules/,
        //stats: clientConfig.stats,
    }

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        return next()
    })

    app.use(webpackDevMiddleware(clientCompiler, {
        publicPath: clientConfig.output.publicPath,
        watchOptions
    }))

    app.use(webpackHotMiddleware(clientCompiler))

    app.use(express.static(paths.clientBuild))

    app.listen(PORT)

    serverCompiler.watch(watchOptions, (error, stats) => {
        if (!error && !stats.hasErrors()) {
            console.log('server has finished building')
            return;
        }

        if (error) {
            console.error(error)
        }

        if (stats.hasErrors()) {
            const info = stats.toJson()
            const errors = info.errors[0].split('\n')
            console.error(errors)
        }
    })

    try {
        await serverPromise
        await clientPromise
    } catch (err) {
        console.error(error)
    }

    const script = nodemon({
        script: `${paths.serverBuild}/bundle.js`,
        ignore: ['scripts', 'config', './*.*', 'build']
    })

    script.on('restart', () => {
        console.log('Server side app has been restarted.')
    })

    script.on('quit', () => {
        console.log('Process ended')
        process.exit()
    })

    script.on('error', () => {
        console.error('An error occured. Exiting')
        process.exit(1)
    })
}

start()
