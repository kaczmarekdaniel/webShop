import React from "react";
import styled from "styled-components";
import NavButton from "components/atoms/NavButton/NavButton";

const Wrapper = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Navbar = () => (
  <Wrapper>
    <NavButton text={"Main"} route={"/"} />
    <NavButton text={"Hoodies"} route={"/hoodies"} />
    <NavButton text={"T-shirts"} route={"/shirts"} />
    <NavButton text={"Contact"} route={"/contact"} />
  </Wrapper>
);

export default Navbar;
