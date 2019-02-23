import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import CounterPage from './pages/CounterPage'

const theme = {
    color1: '#87B1B1',
    color2: '#C7D8D4',
    color3: '#DBE5E2',
    color4: '#DB817D'
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html, body {
        width: 100%;
        height: 100%;
        min-height: 100%;
        min-width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
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
    }
`

const Wrapper = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 100%;
`

const App = () => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle />
            <Wrapper>
                <Switch>
                    <Route path="/" render={props => <CounterPage {...props} />} />
                </Switch>
            </Wrapper>
        </Fragment>
    </ThemeProvider>
)

export default App