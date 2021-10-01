import React, { useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import MainTemplate from "components/templates/MainTemplate";
import Hoodies from "components/organisms/Products/Hoodies";
import Shirts from "components/organisms/Products/Shirts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scrollbar.css";
import StoreProvider from "providers/StoreProvider";
import { StoreContext } from "providers/StoreProvider";
import ShoppingCart from "views/ShoppingCart";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <StoreProvider>
            <Wrapper>
              <ShoppingCart />
              <Switch>
                <Route path="/shirts">
                  <Shirts />
                </Route>
                <Route path="/">
                  <Hoodies />
                </Route>
              </Switch>
            </Wrapper>
          </StoreProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
