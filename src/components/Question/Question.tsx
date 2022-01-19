import styled from 'styled-components';

import arrow from '../../assets/arrow.svg';
import {styles as s} from '../../theme/styles';

interface Props {
    display: string;
}

const QuestionWrapper = styled.div`
padding: 1rem 0;
display: flex;
align-items: center;
pointer-events: none;
justify-content: space-between;

@media screen and (${s.media.horizontal}) and (min-width: 1440px) {
        padding: 1.28rem 0;
}
`

const QuestionText = styled.h2<Props>`
font-size: ${s.fontSizes.md}px;
line-height: 1.006rem;
font-weight: ${props => props.display ? 700 : 400};
color: ${props => props.display ? `${s.colors.fontLarge}` : `${s.colors.font}`};
`

const QuestionArrow = styled.img<Props>`
width: 0.7rem;
height: 0.42rem;
margin-right: 0;
content:url('${arrow}');
transform: ${props => props.display ? 'rotate(180deg)' : null};

@media screen and (${s.media.vertical}) and (min-width: ${s.breakpoints.sm}px),
       screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.xxlg}px) {
    margin-right: 1.15rem;
}
`

function Question({question, selected}): JSX.Element {
    return (
        <QuestionWrapper>
              <QuestionText display={selected}>{question}</QuestionText>
              <QuestionArrow display={selected}/>
        </QuestionWrapper>
    )
}

export {Question, QuestionText};
