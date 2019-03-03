import styled from 'styled-components'

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;

    .label {
        margin-left: .5rem;
        font-size: 1.5rem;
    }
`

const sizes = {
    small: {
        width: '45px',
        height: '25px',
        translate: '18px',
    }
}

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 45px;
    height: 25px;

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${props => props.theme.grayColor};
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: ${props => props.theme.dangerColor};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px ${props => props.theme.dangerColor};
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
    }
`