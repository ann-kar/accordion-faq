import styled from 'styled-components';

import image from '../../assets/picture.svg';
import box from '../../assets/box.svg';
import shadow from '../../assets/shadow.svg';
import line from '../../assets/path-upper.svg';
import {styles as s} from '../../theme/styles';

const IllustrationWrapper = styled.div`
width: 100%;
height: 0;
position: relative;
@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
      height: 100%;
      width: 40%;   
  }
`

const ImageSceneWrapper = styled(IllustrationWrapper)`
@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
    overflow: hidden;
    width: 100%;
}
`

const Image = styled.img`
position: absolute;
@media screen and (${s.media.vertical}),
       screen and (${s.media.horizontal}) and (max-width: ${s.breakpoints.md}px) {
    top: 0;
    left: 50%;
    width: calc(${s.content.portrait.w} * ${s.content.portrait.imgWToContW});
    max-width: calc(${s.content.portrait.maxW} * ${s.content.portrait.imgWToContW});
    max-height: calc(${s.content.portrait.maxW} * ${s.content.portrait.imgWToContW} * ${s.content.portrait.imgHToW});
    transform: translate(-50%, -50%); 
}

@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
    width: 120%;
    left: -20%;
    bottom: 0;
    transform: translate(0, -10%);
}
`

const ImageScene = styled(Image)`
content: url('${image}');
`

const ImageShadow = styled(Image)`
content: url('${shadow}');
@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
    transform: translate(0, -10%) scale(2);
    transform-origin: center right;
}
`

const ImageBox = styled(Image)`
content: url('${box}');
display: none;
@media screen and (min-width: ${s.breakpoints.md}px) {
    display: block;
}
`

const Line = styled(Image)`
content: url('${line}');
display: none;
@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
    top: 0;
    display: block;
    transform-origin: center right;
}
`

const LineOne = styled(Line)`
@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
    transform: translate(0, -53%) scale(2);
}
`

const LineTwo = styled(Line)`
@media screen and (${s.media.horizontal}) and (min-width: ${s.breakpoints.md}px) {
    transform: translate(0, -3%) scale(2);
}
`

export {
    IllustrationWrapper,
    ImageSceneWrapper,
    LineOne,
    LineTwo,
    ImageScene,
    ImageShadow,
    ImageBox,
};
