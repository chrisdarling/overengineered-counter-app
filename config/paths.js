const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath)

const paths = {
    clientBuild: resolvePath('build/public'),
    clientEntry: resolvePath('src/client/client.js'),
    serverBuild: resolvePath('build'),
    serverEntry: resolvePath('src/server.js'),
    key: resolvePath('server.key'),
    cert: resolvePath('server.crt'),
    ca: resolvePath('keys/server.csr')
}

module.exports = paths