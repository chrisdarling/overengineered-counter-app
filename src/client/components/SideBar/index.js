import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SideBarContainer, SideBarContent, Title, AddButton } from './styles'
import Switch from '../Switch'
import { addCounter, themeTypeSelector, toggleThemeType } from '../../modules/count'
import { DarkThemeType, LightThemeType, DEFAULT_THEME_TYPE } from '../../appStyles'

@connect(state => ({
    themeType: themeTypeSelector(state),
}), {
    addCounter,
    toggleThemeType,
})
export default class SideBar extends Component {
    static propTypes = {
        addCounter: PropTypes.func.isRequired,
        toggleThemeType: PropTypes.func.isRequired,
        themeType: PropTypes.oneOf([LightThemeType, DarkThemeType]),
    }

    static defaultProps = {
        themeType: DEFAULT_THEME_TYPE,
    }

    handleToggleTheme = (event) => {
        const { checked } = event.target;
        const { toggleThemeType } = this.props;
        toggleThemeType(checked);
    }

    render() {
        const { themeType, addCounter } = this.props;
        const isDarkMode = themeType === DarkThemeType;
        return (
            <SideBarContainer>
                <SideBarContent>
                    <Title>Welcome to the Over Engineered Counter App</Title>
                    <div className="action-container">
                        <AddButton onClick={addCounter}>
                            <span>&#43;</span>
                            <div>Counter</div>
                        </AddButton>
                        <Switch value={isDarkMode} onChange={this.handleToggleTheme} label="Dark Mode" />
                    </div>
                </SideBarContent>
            </SideBarContainer>
        )
    }
}