import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import {
    GlobalStyle,
    Wrapper,
    themeLookup,
    DEFAULT_THEME_TYPE,
    LightThemeType,
    DarkThemeType,
} from './appStyles'
import { themeTypeSelector } from './modules/count'
import CounterPage from './pages/CounterPage/index.js'
import Page from './components/Page'
import SideBar from './components/SideBar'

@connect(state => ({ 
    themeType: themeTypeSelector(state)
}))
export default class App extends Component {
    static propTypes = {
        themeType: PropTypes.oneOf([LightThemeType, DarkThemeType])
    }

    static defaultProps = {
        themeType: DEFAULT_THEME_TYPE
    }

    render() {
        return (
            <ThemeProvider theme={themeLookup[this.props.themeType]}>
                <Fragment>
                    <GlobalStyle theme={themeLookup[this.props.themeType]} />
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
    }
}