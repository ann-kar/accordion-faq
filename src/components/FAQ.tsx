import { render } from '@testing-library/react';
import React, { useState } from 'react';
import styled from 'styled-components';

import { FAQItem } from '../components';
import qa from '../data/qa';

const FAQWrapper = styled.div`
width: 100%;
height: 100%;
padding: 0 ${props => props.theme.margins.sm};
padding-top: calc(63vw * 0.44);
padding-bottom: 43px;
overflow: hidden;

@media screen and (min-width: 436px) {
    padding-top: calc(436px * 0.63 * 0.44);
}

@media screen and (min-width: 768px) {
    width: 50%;
    padding-right: 55px;
    padding-top: calc(65px - 27px);
    padding-bottom: 83px;
}
`

const FAQTitle = styled.h1`
color: ${props => props.theme.colors.fontLarge};
font-size: ${props => props.theme.fontSizes.lg};
line-height: 2.3rem;
padding: 2rem 0;
width: 100%;
text-align: center;

`

const FAQContentWrapper = styled.div`
width: 100%;
padding: 0.7rem 0;
height: 100%;
//max-height: 22rem;
overflow-y: scroll;
overflow-x: hidden;
margin-bottom: 100px;
`

function FAQ(): JSX.Element {

    const [active, setActive] = useState('');

    const toggleActive = (e) => {
        (e.target.id === active) ?  setActive('') : setActive(e.target.id);
    }

    return (
        <FAQWrapper>
            <FAQTitle>FAQ</FAQTitle>
            <FAQContentWrapper>
                {qa.map((item, i) => <FAQItem 
                active={active} 
                toggleActive={toggleActive} 
                question={item.q} 
                answer={item.a} 
                id={`id-${i}`} 
                key={`faq-${i}`} />)}
            </FAQContentWrapper>
        </FAQWrapper>
    )
}

export default FAQ;
