import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './client/configureStore'
import { Helmet } from 'react-helmet'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import App from './client/App'

function createHTML(req, res) {
    const sheet = new ServerStyleSheet()
    const context = {}
    const initialState = { 
        count: { 
            counters: [
                { count: 0 },
                { count: 0 },
            ],
        },
    }
    const store = configureStore({
        initialState,
    })
    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <StyleSheetManager sheet={sheet.instance}>
                    <App />
                </StyleSheetManager>
            </StaticRouter>
        </Provider>
    )

    const preloadedState = store.getState()

    const styleTags = sheet.getStyleTags()

    const helmet = Helmet.renderStatic()

    const { JSFiles = [] } = res.locals;

    const filteredFiles = JSFiles
        .filter(file => file !== '/service-worker.js')
        .filter(file => !file.startsWith('/precache'))
        .map(fileName => `<script src="${fileName}"></script>`)
        .join('')

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
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                        /</g,
                        '\\u003c'
                      )}
                </script>
                ${filteredFiles}
            </body>
        </html>
    `
}

export default () => async (req, res) => {
    const html = createHTML(req, res)
    res.end(html)
}