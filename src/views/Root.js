import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import MainTemplate from "components/templates/MainTemplate";
import Products from "components/organisms/Products/Products";
import './scrollbar.css';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MainTemplate>
      <Wrapper>
        <Products />
      </Wrapper>
    </MainTemplate>
  </ThemeProvider>
);

export default Root;
