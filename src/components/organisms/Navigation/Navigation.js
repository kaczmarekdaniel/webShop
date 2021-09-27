import React from "react";
import { Wrapper, ModeSwitch, CartButton } from "./Navigation.styles";
import Logo from "components/atoms/Logo/Logo";
import Navbar from "components/molecules/Navbar/Navbar";

const Navigation = () => (
  <>
    <Wrapper>
      <Logo />
      <Navbar />
    </Wrapper>
  </>
);

export default Navigation;
