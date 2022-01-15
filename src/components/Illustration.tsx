import styled from 'styled-components';

import image from '../assets/picture.svg';
import box from '../assets/box.svg';
import shadow from '../assets/shadow.svg';
import line from '../assets/path-upper.svg';

const IllustrationWrapper = styled.div`
width: 100%;
height: 0;
position: relative;
@media screen and (min-aspect-ratio: 1/1) and (min-width: 600px) {
      height: 100%;
      width: 40%;   
  }
`

const ImageSceneWrapper = styled(IllustrationWrapper)`

@media screen and (min-aspect-ratio: 1/1) and (min-width: 600px) {
    overflow: hidden;
    width: 100%;
}
`

const Image = styled.img`
position: absolute;
@media screen and (max-aspect-ratio: 1/1),
       screen and (min-aspect-ratio: 1/1) and (max-width: 600px) {
    top: 0;
    left: 50%;
    width: calc((100vw - 48px) * 0.73);
    max-width: calc((400px - 48px) * 0.73);
    max-height: calc((400px - 48px) * 0.73 * 0.88);
    transform: translate(-50%, -50%); 
}

@media screen and (min-aspect-ratio: 1/1) and (min-width: 600px) {
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
@media screen and (min-width: 600px) and (min-aspect-ratio: 1/1) {
    transform: translate(0, -10%) scale(2);
    transform-origin: center right;
}
`

const ImageBox = styled(Image)`
content: url('${box}');
display: none;
@media screen and (min-width: 600px) {
    display: block;
}
`

const Line = styled(Image)`
content: url('${line}');
display: none;
@media screen and (min-width: 600px) and (min-aspect-ratio: 1/1) {
    top: 0;
    display: block;
    transform-origin: center right;
}
`

const LineOne = styled(Line)`
@media screen and (min-width: 600px) and (min-aspect-ratio: 1/1) {
    transform: translate(0, -53%) scale(2);
}
`

const LineTwo = styled(Line)`
@media screen and (min-width: 600px) and (min-aspect-ratio: 1/1) {
    transform: translate(0, -3%) scale(2);
}
`

function Illustration(): JSX.Element {
    return (
        <>
            <IllustrationWrapper>
                <ImageSceneWrapper>
                    <LineOne />
                    <LineTwo />
                    <ImageScene />
                    <ImageShadow />
                </ImageSceneWrapper>
                <ImageBox />
            </IllustrationWrapper>
        </>
    )
}

export default Illustration;
