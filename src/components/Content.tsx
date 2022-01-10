import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import { FAQ, Illustration } from '../components';

const ContentWrapper = styled.div`
background: ${props => props.theme.colors.contentBg};
position: relative;
width: 100%;
margin: 0 ${props => props.theme.margins.sm};
margin-top: calc(63vw * 0.4);
height: 67vh;
border-radius: 1.64rem;
display: flex;
flex-wrap: wrap;
align-items: center;

@media screen and (min-width: 436px) {
    margin-top: calc(436px * 0.63 * 0.4);
}
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
