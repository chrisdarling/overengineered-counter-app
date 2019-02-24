import styled from 'styled-components'

export const Container = styled.div`
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

export const Count = styled.h1`
    font-size: 10rem;
    align-self: center;
`

export const ResetButton = styled.button`
    background: ${props => props.theme.color4};
    color: ${props => props.theme.color3};
    width: 25rem;
    height: 6.2rem;
    font-size: 5rem;
    border: none;
`

export const CircleButton = styled.button`
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