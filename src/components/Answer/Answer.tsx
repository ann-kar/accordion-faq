import styled from 'styled-components';

import {styles as s} from '../../theme/styles';

interface Props {
    display: string;
}

const AnswerWrapper = styled.p<Props>`
    color: ${s.colors.fontSmall};
    font-size: ${s.fontSizes.sm}px;
    line-height: 1.28rem;
    max-height: ${props => (props.display) ? '8rem' : 0};
    padding-right: 0.7rem;
    padding-bottom: ${props => (props.display) ? '1rem' : 0};
    overflow: hidden;
    pointer-events: none;

    @media screen and (${s.media.vertical}) and (min-width: ${s.breakpoints.sm}px),
           screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.xxlg}px) {
        padding-right: calc(0.7rem + 1.15rem);
        padding-bottom: ${props => (props.display) ? '1.28rem' : 0};
    }

    @media screen and (min-width: ${s.breakpoints.xxxlg}px) {
        font-size: 0.95rem;
    }
`

function Answer({ answer, selected }): JSX.Element {
    return (
        <AnswerWrapper display={selected}>{answer}</AnswerWrapper>
    )
}

export default Answer;
