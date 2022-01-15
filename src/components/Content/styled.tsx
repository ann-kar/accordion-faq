import styled from 'styled-components';

import s from '../../theme/global';

const ContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
position: relative;
width: ${s.portrait.w};
height: calc(${s.portrait.w} * ${s.portrait.hToW});
min-height: ${s.portrait.minH}px;
margin: 0 ${s.mgs.sm}px;
margin-top: calc( ${s.portrait.w} * ${s.portrait.imgWToContW} * ${s.portrait.imgHToW} * 0.5); 
border-radius: ${s.borderRadiuses.md}px;
background: ${s.colors.contentBg};

@media screen and (max-aspect-ratio: 1/1) and (${s.media.min_sm}),
       screen and (min-aspect-ratio: 1/1) and (${s.media.min_sm}) and (${s.media.max_md}) {
    max-width: ${s.portrait.maxW};
    max-height: calc(${s.portrait.maxW} *  ${s.portrait.hToW});
    margin-top: calc(${s.portrait.maxW} * ${s.portrait.imgWToContW} * ${s.portrait.imgHToW} * 0.5);
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-aspect-ratio: 1/1) and (${s.media.min_md}) {
   
    min-height: ${s.landscape.minH}px;

    @media screen and (${s.media.min_md}) {
        width: 67vw;
        min-width: calc(${s.breakpoints.md}px - ${2 * s.mgs.sm}px); // TODO: fix proportions
        height: calc(67vw * ${s.landscape.hToW});
        margin: ${s.mgs.sm}px auto;
        }
}
`

export {ContentWrapper};
