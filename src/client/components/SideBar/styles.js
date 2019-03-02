import styled from 'styled-components'

export const SideBarContainer = styled.div`
    width: 50rem;
    max-width: 30rem;
    color: ${props => props.theme.color3};

    @media (max-width: ${props => props.theme.pageBreak}) {
        width: 100%;
        max-width: 100%;
        min-height: 8rem;
    }
`

export const SideBarContent = styled.div`
    top: 0;
    position: sticky;
    padding: 2rem;
`

export const Title = styled.h2`
    font-size: 2.5rem;
    margin: 0;
    padding: 0;

    @media (max-width: ${props => props.theme.pageBreak}) {
        flex-direction: column;
        padding: 1rem 0;
    }
`

export const AddButton = styled.button`
    display: flex;
    background: ${props => props.theme.color2};
    color: ${props => props.theme.color1};
    padding: 1rem;
    font-size: 2rem;
    border-radius: 0.2rem;
    cursor: pointer;
    border: none;

    span {
        margin-right: .5rem;
    }
`