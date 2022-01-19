import {
    IllustrationWrapper,
    ImageSceneWrapper,
    LineOne,
    LineTwo,
    ImageScene,
    ImageShadow,
    ImageBox,
} from './styled';

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
