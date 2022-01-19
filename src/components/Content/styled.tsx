import styled from 'styled-components';

import {styles as s, helpers} from '../../theme/styles';

const ContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
position: relative;
width: ${helpers.portrait.contentW};
height: calc(${helpers.portrait.contentW} * ${s.ratios.portrait.contentHToW});
min-height: ${helpers.portrait.minContentH};
margin: 0 ${s.mgs.sm}px;
margin-top: calc(${helpers.portrait.imgHeight} * 0.5); 
border-radius: ${s.borderRadii.md}px;
background: ${s.colors.contentBg};

@media screen and (${s.media.vertical}) and (min-width: ${s.breakpoints.sm}px),
       screen and (${s.media.horizontal}) 
              and (min-width: ${s.breakpoints.sm}px) 
              and (max-width: ${s.breakpoints.md}px) {
    max-width: ${helpers.portrait.maxContentW};
    max-height: calc(${helpers.portrait.maxContentW} *  ${s.ratios.portrait.contentHToW});
    margin: 0 auto;
    margin-top: calc(${helpers.portrait.maxImgHeight} * 0.5);
}

@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
   width: ${helpers.landscape.contentW};
   height: calc(${helpers.landscape.contentW} * ${s.ratios.landscape.contentHToW});
   min-height: ${helpers.landscape.minContentH};
   min-width: calc(${helpers.landscape.minContentH} * ${s.ratios.landscape.contentWToH});     
   margin: ${s.mgs.sm}px auto;
}
`

export {ContentWrapper};
