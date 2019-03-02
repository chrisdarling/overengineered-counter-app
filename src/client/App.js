import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import CounterPage from './pages/CounterPage/index.js'
import Page from './components/Page'
import SideBar from './components/SideBar'

const theme = {
    color1: '#E2E2E2',
    color2: '#DB817D',
    color3: '#232D32',
    color4: '#131c25',
    background: '#f6f9fc',
    pageBreak: '780px',
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }


    @font-face {
        font-family: 'Ubuntu';
        font-display: swap;
        src: url('/assets/fonts/Ubuntu-Light.ttf') format('truetype');
        font-weight: normal;
    }
    
    html, body {
        width: 100%;
        min-width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0; 

        font-family: 'Ubuntu', sans-serif;
    }

    html {
        font-size: 10px;
        height: 100%;
    }

    body {
        line-height: 2;
        background: ${theme.background}
        color: ${theme.color3};
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    #root {
        width: 100%;
    }
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;

    @media (max-width: ${props => props.theme.pageBreak}) {
        flex-direction: column;
    }
`

const App = () => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle />
            <Wrapper>
                <SideBar />
                <Page>
                    <Switch>
                        <Route path="/" render={props => <CounterPage {...props} />} />
                    </Switch>
                </Page>
            </Wrapper>
        </Fragment>
    </ThemeProvider>
)

export default App