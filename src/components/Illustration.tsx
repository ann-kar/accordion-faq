import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import image from '../assets/picture.svg';
import box from '../assets/box.svg';
import shadow from '../assets/shadow.svg';
import shadows from '../assets/shadows.svg';

const IllustrationWrapper = styled.div`
width: 100%;
height: 0;
position: relative;
@media screen and (min-width: 768px) {
    width: 45%;
    height: 100%;
}
`

const ImgSceneWrapper = styled.div`
width: 100%;
height: 0;
position: relative;
@media screen and (min-width: 768px) {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    background: blue;
}
`

const Image = styled.img`
position: absolute;

@media screen and (max-aspect-ratio: 1/1) {
    top: 0;
    left: 50%;
    width: calc((100vw - 48px) * 0.73);
    max-width: calc((400px - 48px) * 0.73);
    max-height: calc((400px - 48px) * 0.73 * 0.88);
    transform: translate(-50%, -50%);    
}

@media screen and (min-width: 600px) {
    // top: unset;
    // bottom: 0;
    // left: -21.5%;
    // width: 120%;
    // max-width: 120%;
    // transform: none;
}
`

const ImgScene = styled(Image)`
content: url('${image}');
`

const ImgShadow = styled(Image)`
content: url('${shadow}');
@media screen and (min-width: 768px) {
    display: none;
}
`

const ImgBox = styled(Image)`
content: url('${box}');
display: none;
@media screen and (min-width: 768px) {
    display: block;
}
`

const ImgShadows = styled(Image)`
content: url('${shadows}');
display: none;
@media screen and (min-width: 768px) {
    top: 0;
    display: block;
}
`

function Illustration(): JSX.Element {
    return (
        <>
            <IllustrationWrapper>
                <ImgSceneWrapper>
                    <ImgShadows />
                    <ImgScene />
                    <ImgShadow />
                </ImgSceneWrapper>
                <ImgBox />
            </IllustrationWrapper>
        </>
    )
}

export default Illustration;
