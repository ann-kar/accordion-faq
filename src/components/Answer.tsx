import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

interface Props {
    display: string;
}

const AnswerStyles = styled.p<Props>`
padding-top: 1rem;
color: ${props => props.theme.colors.fontSmall};
font-size: ${props => props.theme.fontSizes.sm};
line-height: 1.28rem;
display: ${props => props.display ? "block" : "none"};
pointer-events: none;
`

function Answer({ answer, selected }): JSX.Element {
    return (
        <AnswerStyles display={selected}>{answer}</AnswerStyles>
    )
}

export default Answer;
