import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import { Answer, Question } from '../components';

const FAQItemWrapper = styled.div`
padding: 1.28rem 0;
border-bottom: 1px solid ${props => props.theme.colors.spacer};
`

function FAQItem({ question, answer, active, toggleActive, id }): JSX.Element {

    let selected = false;

    if (id === active) {
        selected = true;
    }

    return (
        <FAQItemWrapper id={id} onClick={toggleActive}>
                <Question question={question} selected={selected} />
                <Answer answer={answer} selected={selected} />
        </FAQItemWrapper>
    )
}

export default FAQItem;
