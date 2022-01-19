import { useState } from 'react';

import { FAQItem } from '..';
import { FAQWrapper, FAQCnt, FAQTitle, FAQContentWrapper } from './styled'
import qa from '../../data/qa';

function FAQ(): JSX.Element {

  const [active, setActive] = useState('');

  const toggleActive = (e) => {
    (e.target.id === active) ? setActive('') : setActive(e.target.id);
  }

  return (
    <FAQWrapper>
      <FAQCnt>
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
      </FAQCnt>
    </FAQWrapper>
  )
}

export default FAQ;
