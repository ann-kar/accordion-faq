import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import arrow from '../assets/arrow.svg';

interface Props {
    display: string;
}

const QuestionStyles = styled.div`
padding: 1.28rem 0;
display: flex;
align-items: center;
pointer-events: none;
justify-content: space-between;

@media screen and (max-width: 375px) {
    padding: 1rem 0;
}
`

const QuestionText = styled.h2<Props>`
font-size: ${props => props.theme.fontSizes.md};
line-height: 1.006rem;
font-weight: ${props => props.display ? 700 : 400};
color: ${props => props.display ? props => `${props.theme.colors.fontLarge}` : props => `${props.theme.colors.font}`};
`

const QuestionArrow = styled.img<Props>`
width: 0.7rem;
height: 0.42rem;
margin-right: 1.15rem;
content:url('${arrow}');
transform: ${props => props.display ? 'rotate(180deg)' : null};

@media screen and (max-width: 375px) {
    margin-right: 0;
}
`

function Question({question, selected}): JSX.Element {
    return (
        <QuestionStyles>
              <QuestionText display={selected}>{question}</QuestionText>
              <QuestionArrow display={selected}/>
        </QuestionStyles>
    )
}

export {Question, QuestionText};
