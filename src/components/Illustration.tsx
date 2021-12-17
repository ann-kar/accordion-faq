import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import image from '../assets/illustration.svg';
import box from '../assets/box.svg';

const ImgSceneWrapper = styled.div`
width: 50%;
height: 100%;
position: relative;
overflow: hidden;
`

const Image = styled.img`
position: absolute;
top: 13rem;
left: -1rem;
transform: scale(2);
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
            <ImgBox />
        </>
    )
}

export default Illustration;
