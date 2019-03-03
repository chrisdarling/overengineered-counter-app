import styled, { createGlobalStyle } from 'styled-components'

export const LightThemeType = 'light'
export const DarkThemeType = 'dark'
export const LightTheme = {
    grayColor: '#E2E2E2',
    dangerColor: '#DB817D',
    textColor: '#232D32',
    border: '#d3d3d3',
    background: '#f6f9fc',
    pageBreak: '780px',
}

export const DarkTheme = {
    grayColor: '#373c49',
    dangerColor: '#DB817D',
    textColor: '#f6f9fc',
    border: '#5f636e',
    background: '#272c35',
    pageBreak: '780px',
}

 
export const themeLookup = {
    [LightThemeType]: LightTheme,
    [DarkThemeType]: DarkTheme, 
}

export const DEFAULT_THEME_TYPE = DarkThemeType

export const GlobalStyle = createGlobalStyle`
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
        background: ${props => props.theme.background};
        color: ${props => props.theme.textColor};

        transition: all 250ms ease;
    }

    #root {
        width: 100%;
    }
`

export const Wrapper = styled.div`
    display: flex;
    height: 100%;

    @media (max-width: ${props => props.theme.pageBreak}) {
        flex-direction: column;
    }
`