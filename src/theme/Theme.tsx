import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        accent: '#F47B56',
        bgUpper: '#B068E9',
        bgLower: '#6463E7',
        contentBg: '#FFF',
        font: '#4B4C5F',
        fontLarge: '#1E1F36',
        fontSmall: '#787887',
        spacer: '#E8E8EA'
      },
      fontSizes: {
        lg: '34px',
        md: '14px',
        sm: '12px'
      },
      margins: {
        sm: '24px',
        lg: '95px'
      }
};

const Theme : React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
