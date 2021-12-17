import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

const IllustrationWrapper = styled.div`
width: 50%;
height: 100%;
`

function Illustration(): JSX.Element {
    return (
        <IllustrationWrapper>
           <div>illustration</div>
        </IllustrationWrapper>
    )
}

export default Illustration;
