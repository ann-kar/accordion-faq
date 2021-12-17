import React from 'react';
import styled from 'styled-components';

import Theme from "./theme/Theme";

const AppWrapper = styled.main`
background: linear-gradient(
  ${props => props.theme.colors.bgUpper}, 
  ${props => props.theme.colors.bgLower}
  );
width: 100vw;
height: 100%;
min-height: 100vh;
padding-top: 9.3rem;
padding-bottom: 9.3rem;
display: flex;
justify-content: center;
align-items: center;
`

function App() {

  return (
    <Theme>
      <AppWrapper/>
    </Theme>
  );
}

export default App;
