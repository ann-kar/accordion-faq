import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import { FAQ, Illustration } from '../components';

const ContentWrapper = styled.div`
background: ${props => props.theme.colors.contentBg};
width: 100%;
max-width: 65rem;
height: 67%;
border-radius: 1.64rem;
display: flex;
flex-wrap: wrap;
align-items: center;
`

function Content(): JSX.Element {
    return (
        <ContentWrapper>
            <Illustration />
            <FAQ />
        </ContentWrapper>
    )
}

export default Content;
