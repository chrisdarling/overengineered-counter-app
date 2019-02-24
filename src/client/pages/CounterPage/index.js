import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Container, Count, ResetButton, CircleButton } from './styles'


export default class CounterPage extends Component  {
    state = {
        count: 0,
    }

    handleChange = () => {
        this.setState(state => ({ count: state.count + 1 }))
    }

    handleReset = () => {
        this.setState({ count: 0 })
    }

    head() {
        return (
            <Helmet>
                <title>Welcome Home 🏠</title>
            </Helmet>
        )
    }

    render() {
        return (
            <Container>
                    {this.head()}
                    <div>
                        <ResetButton onClick={this.handleReset}>
                            Reset
                        </ResetButton>
                    </div>
                    <Count> 
                        {this.state.count}
                    </Count>
                    <div>
                        <CircleButton onClick={this.handleChange}>
                            <span>&#43;</span>
                        </CircleButton>
                    </div>
            </Container>
        )
    }
}