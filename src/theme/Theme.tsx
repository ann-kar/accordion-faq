import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        accent: '#F47B56',
        bgUpper: '#B068E9',
        bgLower: '#6463E7',
        font: '#4B4C5F',
        fontLarge: '#1E1F36',
        fontSmall: '#787887',
        contentBg: '#FFF'
      }
};

const Theme : React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
