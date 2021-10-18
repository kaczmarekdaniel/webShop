import React from "react";
import styled from "styled-components";
import NavButton from "components/atoms/NavButton/NavButton";
import Skateboard from "data/photos/skateboard.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};
  @media (min-width: 1024px) {
    width: 100%;
    background-position: center;
    max-width: 50%;
    height: 100%;
    max-height: 75%;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;

  h1 {
    font-weight: normal;
    margin-right: 100px;
  }
`;

const MainPage = () => (
  <Wrapper>
    <Content>
      <h1>Create your own style with us.</h1>
      <Image />
    </Content>
    <Content />
  </Wrapper>
);

export default MainPage;
