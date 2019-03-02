import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SideBarContainer, SideBarContent, Title, AddButton } from './styles'
import { addCounter } from '../../modules/count'

@connect(state => ({}), {
    addCounter
})
export default class SideBar extends Component {
    static propTypes = {
        addCounter: PropTypes.func.isRequired
    }
    render() {
        return (
            <SideBarContainer>
                <SideBarContent>
                    <Title>Welcome to the Over Engineered Counter App</Title>
                    <AddButton onClick={this.props.addCounter}>
                        <span>&#43;</span>
                        <div>Counter</div>
                    </AddButton>
                </SideBarContent>
            </SideBarContainer>
        )
    }
}