import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SwitchLabel, SwitchContainer } from './styles'

export default class Switch extends Component {
    static propTypes = {
        value: PropTypes.bool,
        onChange: PropTypes.func,
        label: PropTypes.string,
    }

    static defaultProps = {
        value: false,
        onChange: () => {},
        label: '',
    }

    render() {
        const { value, onChange, label } = this.props;
        return (
            <SwitchContainer>
                <SwitchLabel>
                    <input type="checkbox" checked={value} onChange={onChange} />
                    <span className="slider round"></span>
                </SwitchLabel>
                <div className="label">{label}</div>
            </SwitchContainer>
        )
    }
}