import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import manifestHelpers from './middleware/manifestHelpers'
import renderer from './renderer'

const app = express()
const PORT = process.env.PORT || 4000

app.use(compression())

app.use(bodyParser.json())

// allow serverless function (zeit now, aws lamda, etc) to serve
// static files in production 
if (process.env.NODE_ENV === 'development') {
    app.use(express.static('build/public'))
}

app.use(manifestHelpers())
app.get('*', renderer())

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
        return -1
    }
    console.log(`App running 🌏 at: http://localhost:${PORT} 🎉`)
})

