import React from "react";
import styled from "styled-components";
import NavButton from "components/atoms/NavButton/NavButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: blue;
  height: 80vh;
`;

const ContactView = () => (
  <Wrapper>
    <h1>Contact us</h1>
  </Wrapper>
);

export default ContactView;
