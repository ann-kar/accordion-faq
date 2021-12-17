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
