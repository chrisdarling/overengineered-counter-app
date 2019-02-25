import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import CounterPage from './pages/CounterPage/index.js'
import Page from './components/Page'
import SideBar from './components/SideBar'

const theme = {
    color1: '#87B1B1',
    color2: '#C7D8D4',
    color3: '#DBE5E2',
    color4: '#DB817D',
    pageBreak: '780px'
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
        height: 100%;
        min-height: 100%;
        min-width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
        overflow: hidden;

        font-family: 'Ubuntu', sans-serif;
    }

    html {
        font-size: 10px;
        height: 100%;
    }

    body {
        line-height: 2;
        background: ${`linear-gradient(${theme.color1},${theme.color2})`};
        color: ${theme.color3};
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    #root {
        width: 100%;
        height: 100%;
        min-height: 100%;
        overflow: hidden;
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