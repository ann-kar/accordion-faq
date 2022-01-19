import styled from 'styled-components';

import Theme from "./theme/Theme";
import { Content } from "./components";
import {styles as s} from "./theme/styles";

const AppWrapper = styled.main`
  background: linear-gradient(
  ${s.colors.bgUpper}, 
  ${s.colors.bgLower}
  );
width: 100vw;
height: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding-top: 2.8rem;
padding-bottom: 5.7rem;

@media screen and (${s.media.horizontal}) {
  @media screen and (min-width: ${s.breakpoints.md}px) {
    padding: calc(2vh + 1rem) calc(4vw + 2rem);
  }
}
`

function App() {

  return (
    <Theme>
      <AppWrapper>
        <Content />
      </AppWrapper>
    </Theme>
  );
}

export default App;
