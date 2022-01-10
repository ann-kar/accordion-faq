import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import image from '../assets/picture.svg';
import box from '../assets/box.svg';

const ImgSceneWrapper = styled.div`

width: 100%;
height: 0;
position: relative;

screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
    overflow: hidden;
}
`

const Image = styled.img`
position: absolute;
width: 63vw;
max-width: 300px;
left: 50%;
transform: translate(-50%, -50%);
top: 0;

screen and (min-width: 768px) {
    top: 13rem;
    left: -1rem;
    transform: scale(2);
}

`

const ImgScene = styled(Image)`
content:url('${image}');
`

const ImgBox = styled(Image)`
content:url('${box}');
`

function Illustration(): JSX.Element {
    return (
        <>
            <ImgSceneWrapper>
                <ImgScene />
            </ImgSceneWrapper>
            
        </>
    )
}

export default Illustration;
