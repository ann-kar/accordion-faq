import styled from 'styled-components';

import {styles as s} from '../../theme/styles';

const calcStyles = {
    imgHeight: `calc(${s.content.portrait.w} * 
                     ${s.content.portrait.imgWToContW} * 
                     ${s.content.portrait.imgHToW})`,
    maxImgHeight: `calc(${s.portrait.maxW} * ${s.portrait.imgWToContW} * ${s.portrait.imgHToW})`                
}

const ContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
position: relative;
width: ${s.content.portrait.w};
height: calc(${s.content.portrait.w} * ${s.content.portrait.hToW});
min-height: ${s.content.portrait.minH};
margin: 0 ${s.mgs.sm}px;
margin-top: calc( ${calcStyles.imgHeight} * 0.5); 
border-radius: ${s.borderRadii.md}px;
background: ${s.colors.contentBg};

@media screen and (${s.media.vertical}) and (min-width: ${s.breakpoints.sm}px),
       screen and (${s.media.horizontal}) 
              and (min-width: ${s.breakpoints.sm}px) 
              and (max-width: ${s.breakpoints.md}px) {
    max-width: ${s.content.portrait.maxW};
    max-height: calc(${s.content.portrait.maxW} *  ${s.content.portrait.hToW});
    margin-top:  calc(${calcStyles.maxImgHeight} * 0.5);
    margin-left: auto;
    margin-right: auto;
}

@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
   width: ${s.content.landscape.width};
   height: calc(${s.content.landscape.width} * ${s.content.landscape.hToW});
   min-height: ${s.content.landscape.minH};
   min-width: calc(${s.content.landscape.minH} * ${s.content.landscape.wToH});     
   margin: ${s.mgs.sm}px auto;
}
`

export {ContentWrapper};
