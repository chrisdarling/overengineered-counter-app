import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Helmet } from 'react-helmet'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import App from './client/App'

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

    const filteredFiles = JSFiles
        .filter(file => file !== '/service-worker.js')
        .filter(file => !file.startsWith('/precache'))

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
                ${filteredFiles.map(fileName => `<script src="${fileName}"></script>`)}
            </body>
        </html>
    `
}

export default () => async (req, res) => {
    const html = createHTML(req, res)
    res.end(html)
}