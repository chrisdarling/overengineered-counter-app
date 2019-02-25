import React from 'react'
import styled from 'styled-components'

const SideBarContainer = styled.div`
    width: 50rem;
    max-width: 30rem;
    padding: 0 2rem;
    background: ${props => `linear-gradient(${props.theme.color4},${props.theme.color2})`};
    color: ${props => props.theme.color3};

    @media (max-width: ${props => props.theme.pageBreak}) {
        width: 100%;
        max-width: 100%;
        min-height: 8rem;
    }
`

const Title = styled.h2`
    font-size: 2.5rem;
    margin: 0;
    padding: 0;

    @media (max-width: ${props => props.theme.pageBreak}) {
        flex-direction: column;
        padding: 1rem 0;
    }
`

export default function SideBar(props) {
    return (
        <SideBarContainer>
            <Title>Welcome to the Over Counter App 🔥🔥🔥</Title>
        </SideBarContainer>
    )
}