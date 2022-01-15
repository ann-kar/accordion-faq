import styled from 'styled-components';

import { FAQ, Illustration } from '../components';

const ContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
position: relative;
width: calc(100vw - 48px);
height: calc((100vw - 48px) * 1.63);
min-height: 480px;
margin: 0 24px;
margin-top: calc((100vw - 48px) * 0.73 * 0.88 * 0.5); 
border-radius: 23px;
background: ${p => p.theme.colors.contentBg};

@media screen and (max-aspect-ratio: 1/1) and (min-width: 400px),
       screen and (min-aspect-ratio: 1/1) and (min-width: 400px) and (max-width: 600px) {
    max-width: calc(400px - 48px);
    max-height: calc((400px - 48px) * 1.63);
    margin-top: calc((400px - 48px) * 0.73 * 0.88 * 0.5);
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-aspect-ratio: 1/1) and (min-width: 600px) {
   
    min-height: 330px;

    @media screen and (min-width: 600px) {
        width: 67vw;
        min-width: calc(600px - 48px); // TODO: fix proportions
        height: calc(67vw * 0.555);
        margin: 24px auto;
        }
}
`

function Content(): JSX.Element {
    return (
        <ContentWrapper>
            <Illustration />
            <FAQ />
        </ContentWrapper>
    )
}

export default Content;
