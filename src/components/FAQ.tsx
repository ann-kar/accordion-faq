import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

const FAQWrapper = styled.div`
width: 50%;
height: 100%;
`
function FAQ(): JSX.Element {
    return (
        <FAQWrapper>
    faq
        </FAQWrapper>
    )
}

export default FAQ;
