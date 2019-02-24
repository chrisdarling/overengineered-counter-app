import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .counter-actions {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Count = styled.div`
    font-size: 7.5rem;
    align-self: center;
`

export const ResetButton = styled.button`
    background: ${props => props.theme.color4};
    color: ${props => props.theme.color3};
    width: 10rem;
    font-size: 2rem;
    border: none;
`

export const CircleButton = styled.button`
    display:block;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
 
    background: ${props => props.theme.color3};

    span {
        font-size: 3rem;
        color: ${props => props.theme.color1};
    }
`