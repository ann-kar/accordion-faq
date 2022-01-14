import React from 'react';
import styled from 'styled-components';

import Theme from "./theme/Theme";
import { Content } from "./components";

const AppWrapper = styled.main`
background: linear-gradient(
  ${props => props.theme.colors.bgUpper}, 
  ${props => props.theme.colors.bgLower}
  );
width: 100vw;
height: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding-top: 40px;
padding-bottom: 80px;


@media screen and (min-aspect-ratio: 1/1) {
  @media screen and (min-width: 600px) {
    padding: calc(2vh + 1rem) calc(4vw + 2rem);
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
