import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    font-size: calc(0.5rem * 1vw);
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin:0;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
  
  

`;
