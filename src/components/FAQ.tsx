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

@media screen and (min-aspect-ratio: 1/1) {

  @media screen and (min-width: 600px) {
    width: 70%;   
    height: 100%;
    padding-right: ${props => props.theme.margins.sm};
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 800px) {
    width: 65%;   
  }

  @media screen and (min-width: 927px) {
    width: 55%;
    padding-top: calc(65px - 27px);
    padding-bottom: 83px;
  }

  @media screen and (min-width: 1369px) and (max-width: 1440px) {
    padding-right: calc(24px + (100vw - 1369px));
  }

  @media screen and (min-width: 1440px) and (max-width: 1511px) {
    padding-left: calc(24px + (100vw - 1440px));
  }

  @media screen and (min-width: 1440px) {
    padding-right: 95px;  
    height: calc(67vw * 0.555 * 0.8);
    padding-top: calc(67vw * 0.555 * 0.1);
    padding-bottom: calc(67vw * 0.555 * 0.10);
  }

  @media screen and (min-width: 1511px) {
    padding-left: 95px;
  }
}
`

const FAQTitle = styled.h1`
color: ${props => props.theme.colors.fontLarge};
font-size: ${props => props.theme.fontSizes.lg};
line-height: 2.3rem;
padding: 2rem 0;
width: 100%;
text-align: center;
@media screen and (max-width: 375px) {
    padding: 1rem 0;
}

@media screen and (min-width: 600px) and (min-aspect-ratio: 1/1) {
    padding: 1rem 0;
}

@media screen and (min-width: 1200px) {
    padding: 2rem 0 45px 0;
}
`

const FAQContentWrapper = styled.div`
width: 100%;
padding: 0.7rem 0;
height: 100%;
overflow-y: scroll;
overflow-x: hidden;

@media screen and (min-aspect-ratio: 1/1) and (max-width: 1000px) {
    @media screen and (min-width: 600px) {
        padding: 0;
    }
}
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
