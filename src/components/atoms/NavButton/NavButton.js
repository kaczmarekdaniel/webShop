import React from "react";
import { Button } from "./NavButton.styles";

const NavButton = ({ text, route }) => (
  <Button to={route} exact>
    <p>{text}</p>
  </Button>
);

export default NavButton;
