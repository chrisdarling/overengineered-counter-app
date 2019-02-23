import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Helmet } from 'react-helmet'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import App from './client/App'

import paths from './config/paths'
import { readFileAsync } from './helpers'

function createHTML(req, res) {
    const sheet = new ServerStyleSheet()
    const context = {}
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <StyleSheetManager sheet={sheet.instance}>
                <App />
            </StyleSheetManager>
        </StaticRouter>
    )

    const styleTags = sheet.getStyleTags()

    const helmet = Helmet.renderStatic()

    const { JSFiles = [] } = res.locals;

    return `
        <!doctype html>
        <html>
            <head>
                ${helmet.meta.toString()}
                ${helmet.title.toString()}
                ${styleTags}
            </head>
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root">
                    ${content}
                </div>
                ${JSFiles.map(fileName => `<script src="${fileName}"></script>`)}
            </body>
        </html>
    `
}

export default () => async (req, res) => {
    const { JSFiles = [] } = res.locals;

    for (let i = 0; i < JSFiles.length; i++) {
        const stream = res.push(`/${JSFiles[i]}`, {
            status: 200,
            method: 'GET',
            request: {
              accept: '*/*'
            },
            response: {
              'content-type': 'application/javascript'
            }
        })

        stream.on('error', err => {})

        const fileData = await readFileAsync(`${paths.clientBuild}/${JSFiles[i]}`)
    
        stream.end(fileData)
    }

    const html = createHTML(req, res)
    res.end(html)
}