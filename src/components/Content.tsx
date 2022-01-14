import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import { FAQ, Illustration } from '../components';

const ContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
position: relative;
width: calc(100vw - 48px);
height: calc((100vw - 48px) * 1.63);
min-height: 480px;
margin: 0 24px;
margin-top: calc((100vw - 48px) * 0.73 * 0.88 * 0.5); // to allow for illustration
border-radius: 23px;
background: ${props => props.theme.colors.contentBg};

@media screen and (min-width: 400px) and (max-aspect-ratio: 1/1) {
    max-width: calc(400px - 48px);
    max-height: calc((400px - 48px) * 1.63);
    margin-top: calc((400px - 48px) * 0.73 * 0.88 * 0.5); // to allow for illustration
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-aspect-ratio: 1/1) {
    margin: 0 auto;
    min-height: 320px;

    @media screen and (min-width: 600px) {
        width: auto;    
        max-width: 85vw; 
        max-height: calc(85vw * 0.55);
        margin-top: 10vh;
        margin-bottom: 10vh;
    }

    @media screen and (min-width: 800px) {   
        width: 67vw;
        height: calc(67vw * 0.555);
    }
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
