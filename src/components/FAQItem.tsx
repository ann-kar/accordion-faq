import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import { Answer, Question } from '../components';
import { QuestionText } from "../components/Question";

const FAQItemWrapper = styled.div`
&:hover ${QuestionText} {
    color: ${props => props.theme.colors.accent};
}

border-bottom: 1px solid ${props => props.theme.colors.spacer};
`

function FAQItem({ question, answer, active, toggleActive, id }): JSX.Element {

    let selected = false;
    if (id === active) {
        selected = true;
    }

    return (
        <FAQItemWrapper id={id} onClick={(e) => toggleActive(e)}>
            <Question question={question} selected={selected} />
            <Answer answer={answer} selected={selected} />
        </FAQItemWrapper>
    )
}

export default FAQItem;
