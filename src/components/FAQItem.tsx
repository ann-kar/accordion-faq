import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import arrow from '../assets/arrow.svg';

const FAQItemWrapper = styled.div`
padding: 1.28rem 0;
border-bottom: 1px solid ${props => props.theme.colors.spacer};
`

const QuestionStyles = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const QuestionText = styled.h2`
color: ${props => props.theme.colors.fontLarge};
font-size: ${props => props.theme.fontSizes.md};
line-height: 1.006rem;
`
const QuestionArrow = styled.img`
width: 0.7rem;
height: 0.42rem;
margin-right: 1.15rem;
content:url('${arrow}');
`

const AnswerStyles = styled.p`
padding-top: 1rem;
color: ${props => props.theme.colors.fontSmall};
font-size: ${props => props.theme.fontSizes.sm};
line-height: 1.28rem;
`

function FAQItem(): JSX.Element {
    return (
        <FAQItemWrapper>
            <QuestionStyles>
                <QuestionText>How many team members can I invite?</QuestionText>
                <QuestionArrow />
            </QuestionStyles>
            <AnswerStyles>Every user can invite up to 5 team members.</AnswerStyles>
        </FAQItemWrapper>
    )
}

export default FAQItem;
