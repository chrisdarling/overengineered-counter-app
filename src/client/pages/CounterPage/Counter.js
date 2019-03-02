import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, ResetButton, Count, CircleButton } from './styles'

export default class Counter extends Component {
    static propTypes = {
        onDecrement: PropTypes.func.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onReset: PropTypes.func.isRequired,
        count: PropTypes.number,
        index: PropTypes.number,
    }

    static defaultProps = {
        count: 0,
        index: 0,
    }

    handleAdd = () => {
        const { index, onIncrement } = this.props
        onIncrement(index)
    }

    handleMinus = () => {
        const { index, onDecrement } = this.props
        onDecrement(index)
    }

    handleReset = () => {
        const { index, onReset } = this.props
        onReset(index)
    }
    render() {
        const { count } = this.props
        return (
            <Container>
                <div>
                    <ResetButton onClick={this.handleReset}>
                        Reset
                    </ResetButton>
                </div>
                <Count> 
                    {count}
                </Count>
                <div className="counter-actions">
                    <CircleButton onClick={this.handleMinus}>
                        <span>&#8722;</span>
                    </CircleButton>
                    <CircleButton onClick={this.handleAdd}>
                        <span>&#43;</span>
                    </CircleButton>
                </div>
            </Container>
        )
    }
}