import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

interface Props {
    display: string;
}

const AnswerStyles = styled.p<Props>`
color: ${props => props.theme.colors.fontSmall};
font-size: ${props => props.theme.fontSizes.sm};
line-height: 1.28rem;
max-height: ${props => props.display ? '8rem' : '0'};
padding-right: calc(0.7rem + 1.15rem);
padding-bottom: ${props => props.display ? '1.28rem' : '0'};
overflow: hidden;
pointer-events: none;
`

function Answer({ answer, selected }): JSX.Element {
    return (
        <AnswerStyles display={selected}>{answer}</AnswerStyles>
    )
}

export default Answer;
