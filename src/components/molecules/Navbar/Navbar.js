import React from "react";
import styled from "styled-components";
import NavButton from "components/atoms/NavButton/NavButton";

const Wrapper = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Navbar = () => (
  <Wrapper>
    <NavButton text={"Hoodies"} route={"/"} />
    <NavButton text={"T-shirts"} route={"/shirts"} />
  </Wrapper>
);

export default Navbar;
