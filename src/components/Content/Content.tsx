import { FAQ, Illustration } from '../../components';
import { ContentWrapper } from './styled';

function Content(): JSX.Element {
    return (
        <ContentWrapper>
            <Illustration />
            <FAQ />
        </ContentWrapper>
    )
}

export default Content;
