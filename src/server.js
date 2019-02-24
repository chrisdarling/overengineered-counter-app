import 'babel-polyfill'
import express from 'express'
import spdy from 'spdy'
import bodyParser from 'body-parser'
import compression from 'compression'
import paths from './config/paths'
import { readFileAsync } from './helpers'
import manifestHelpers from './middleware/manifestHelpers'
import renderer from './renderer'

const app = express()
const PORT = process.env.PORT || 4000

app.use(compression())

app.use(bodyParser.json())
app.use(express.static('build/public'))

app.use(manifestHelpers())
app.get('*', renderer())

async function createServerOptions() {
    const files = [
        readFileAsync(paths.key, 'utf8'),
        readFileAsync(paths.cert, 'utf8')
    ]
    const [key, cert] = await Promise.all(files)
    return { key, cert }
}

async function main() {
    const { key, cert } = await createServerOptions()
    const options = { key, cert }
    const server = spdy.createServer(options, app)
    
    server.listen(PORT, (err) => {
        if (err) {
            console.error(err)
            return -1
        }
        console.log(`App running 🌏 on port ${PORT} 🎉`)
    })
    
}
    
main().catch(err => console.error('An Error Occured:', err))

