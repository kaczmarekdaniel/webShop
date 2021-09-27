import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import MainTemplate from "components/templates/MainTemplate";
import Hoodies from "components/organisms/Products/Hoodies";
import Shirts from "components/organisms/Products/Shirts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hoodies as hoodiesCatalog, shirts as shirtCatalog } from "data/users";
import "./scrollbar.css";
import { useState } from "react";
import styled from "styled-components";

const CartButton = styled.button`
  width: 40px;
  height: 30px;
  background-color: #ffd1dc;
  border: 1px solid black;
  position: fixed;
  right: 20px;
  top: 20px;
`;

const StyledPrompt = styled.div`
  width: 40%;
  height: 70%;
  background-color: #ffd1dc;
  position: fixed;
  border: 1px solid black;
  right: 20px;
  top: 20px;
`;

const Prompt = (props) => {
  return <StyledPrompt>{props.children}</StyledPrompt>;
};

const Root = () => {
  // hook to show/hide cart prompt
  const [isShow, setIsShow] = React.useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };

  //hooks to handle adding to cart

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <>
              {isShow ? (
                <StyledPrompt>show/hide typography</StyledPrompt>
              ) : (
                <></>
              )}
              {isShow ? (
                <CartButton onClick={handleClick}>Close</CartButton>
              ) : (
                <CartButton onClick={handleClick}>Cart</CartButton>
              )}
            </>
            <Switch>
              <Route path="/shirts">
                <Shirts shirts={shirtCatalog} />
              </Route>
              <Route path="/">
                <Hoodies hoodies={hoodiesCatalog} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
