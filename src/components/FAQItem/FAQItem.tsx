import styled from 'styled-components';

import { Answer, Question } from '..';
import { QuestionText } from '../Question/Question';
import {styles as s} from '../../theme/styles';

const FAQItemWrapper = styled.div`
&:hover ${QuestionText} {
    color: ${s.colors.accent};
}
border-bottom: 1px solid ${s.colors.spacer};
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
