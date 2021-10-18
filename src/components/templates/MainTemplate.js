import React from "react";
import { Wrapper } from "components/templates/MainTemplate.styles";
import Navigation from "components/templates/Navigation/Navigation";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
