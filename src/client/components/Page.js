import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
`

export default function Page({ children }) {
    return (
        <PageContainer>
            {children}
        </PageContainer>
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired
}