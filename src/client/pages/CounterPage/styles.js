import styled from 'styled-components'

export const CounterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 1rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #d3d3d3;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    
    .counter-actions {
        display: flex;
        align-items: center;
    }
`

export const Count = styled.div`
    font-size: 7.5rem;
    align-self: center;
`

export const ResetButton = styled.button`
    background: ${props => props.theme.color2};
    color: ${props => props.theme.color1};
    font-size: 2rem;
    padding: .5rem;
    border-radius: 0.2rem;
    cursor: pointer;
    border: none;
`

export const CircleButton = styled.button`
    display:block;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
    cursor: pointer;
 
    background: ${props => props.theme.color1};

    span {
        font-size: 3rem;
        color: ${props => props.theme.color3};
    }
`