import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: antialiased;
  position: fixed;
  right: 20px;
  top: 20px;
`;

const CartButton = ({ shirts }) => {
  return <Button></Button>;
};

export default CartButton;
