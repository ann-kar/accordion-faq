import styled from 'styled-components';

import {styles as s, helpers} from '../../theme/styles';

const FAQWrapper = styled.div`
width: 100%;
height: 100%;
padding: 0 ${s.mgs.sm}px;
padding-top: calc(${helpers.portrait.imgHeight} * 0.5);
padding-bottom: ${s.mgs.sm * 2}px; 
overflow: hidden;

@media screen and (min-width: ${s.breakpoints.sm}px) { 
    padding-top: calc(${helpers.portrait.maxImgHeight} * 0.5);
}

@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
    width: calc(${s.ratios.landscape.faq} * 100%); 
    height: 100%;
    position: relative;
    overflow: visible; 
    margin: auto 0;
    padding: ${s.mgs.sm}px;
}
`

const FAQCnt = styled.div`
  width: 100%;
  height: 100%;

@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${helpers.landscape.imgHeight};
  min-height: calc(${helpers.landscape.minContentH} - 2 * ${s.mgs.sm}px);
  min-width: calc(${helpers.landscape.minContentH} * ${s.ratios.landscape.contentWToH} * 0.4 * 1.2);
  padding: 0 ${s.mgs.sm}px;
  border: 1px solid red;
  transform: ${helpers.landscape.imgTransform};

   @media screen and (min-width: ${helpers.landscape.breakpoint}px) and (max-width: ${s.breakpoints.xxlg}px) {
    padding-left: calc(${s.mgs.sm}px + calc((100vw - ${helpers.landscape.breakpoint}px) * 0.25));
    padding-right: calc(${s.mgs.sm}px + calc((100vw - ${helpers.landscape.breakpoint}px) * 0.25));
  }

  @media screen and (min-width: ${s.breakpoints.xxlg}px) { 
    padding-left: ${s.mgs.lg}px;
    padding-right: ${s.mgs.lg}px;
  }

  @media screen and (min-width: ${s.breakpoints.xxxlg}px) {
    padding-left: ${s.mgs.xlg}px;
    padding-right: ${s.mgs.xlg}px;
  }
}
`

const FAQTitle = styled.h1`
width: 100%;
color: ${s.colors.fontLarge};
font-size: ${s.fontSizes.lg}px;
line-height: ${s.fontSizes.lg}px;
padding: 0 0 ${s.mgs.sm}px 0;
text-align: center;

@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
  text-align: left;
}
`

const FAQContentWrapper = styled.div`
width: 100%;
padding: ${s.mgs.xsm} 0;
height: 100%;
overflow: scroll;
overflow: hidden;

@media screen and (${s.media.horizontal}) 
              and (min-width: ${s.breakpoints.sm}px) 
              and (max-width: ${s.breakpoints.xxlg}px) {
        padding: 0;
}
`

export {FAQWrapper, FAQCnt, FAQTitle, FAQContentWrapper}
