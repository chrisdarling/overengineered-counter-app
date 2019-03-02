import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import Counter from './Counter';
import { CounterGrid } from './styles'

import {
    countersSelector,
    decrementCounter,
    resetCounter,
    incrementCounter,
} from '../../modules/count'

@connect(state => ({ 
    counters: countersSelector(state)
 }), {
    decrementCounter,
    incrementCounter,
    resetCounter,
 })
export default class CounterPage extends Component  {  
    static propTypes = {
        decrementCounter: PropTypes.func.isRequired,
        incrementCounter: PropTypes.func.isRequired,
        resetCounter: PropTypes.func.isRequired,
        counters: PropTypes.array,
    }

    static defaultProps = {
        counters: []
    }

    head() {
        return (
            <Helmet>
                <title>Over Engineered Counter App</title>
            </Helmet>
        )
    }

    render() {
        const { counters, decrementCounter, incrementCounter, resetCounter } = this.props;
        return (
            <CounterGrid>
                {this.head()}
                {counters.map((counter, i) => (
                    <Counter
                        key={i} 
                        index={i} 
                        {...counter}
                        onIncrement={incrementCounter}
                        onDecrement={decrementCounter}
                        onReset={resetCounter}
                    />
                ))}
            </CounterGrid>
        )
    }
}