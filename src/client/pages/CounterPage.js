import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100rem;
    align-items: center;

    .counter-actions {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Title = styled.h1`
    font-size: 10rem;
    align-self: center;
`

const ResetButton = styled.button`
    background: ${props => props.theme.color4};
    color: ${props => props.theme.color3};
    width: 25rem;
    height: 6.2rem;
    font-size: 5rem;
    border: none;
`

const CircleButton = styled.button`
    display:block;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
 
    outline: none;
    background: ${props => props.theme.color3};

    span {
        font-size: 5rem;
        color: ${props => props.theme.color1};
    }
`

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
                    <Title> 
                        {this.state.count}
                    </Title>
                    <div>
                        <CircleButton onClick={this.handleChange}>
                            <span>&#43;</span>
                        </CircleButton>
                    </div>
            </Container>
        )
    }
}