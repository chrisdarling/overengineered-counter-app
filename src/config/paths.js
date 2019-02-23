import path from 'path'
import fs from 'fs'

const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath)

const paths = {
    clientBuild: resolvePath('build/public'),
    key: resolvePath('server.key'),
    cert: resolvePath('server.crt'),
    ca: resolvePath('keys/server.csr')
}

export default paths