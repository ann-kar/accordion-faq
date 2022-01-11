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
justify-content: space-between;

@media screen and (min-width: 436px) {
    width: calc(436px - 24px * 2);
    margin-top: calc(436px * 0.63 * 0.4);
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-width: 768px) {
    width: 67vw;
    height: calc(67vw * 0.55);
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
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
