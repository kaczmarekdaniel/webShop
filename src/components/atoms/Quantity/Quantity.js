import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "providers/StoreProvider";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 2vh;
  border: none;
  h2 {
    font-weight: normal;
    margin: 10px 0 0 0;
    font-size: 2vh;
  }
`;
const Number = styled.div`
  width: 33%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};
  border-radius: 10px;
  border: none;
`;

const MinusButton = styled.button`
  width: 20%;
  margin-right: 10px;
  box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};
  border-radius: 10px;
  height: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border: none;
  background-size: 300% 100%;
  transition: all 0.3s ease-out;
  background-size: 300% 100%;

  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.lightGrey},
    whitesmoke,
    #ff6961,
    #ff6961
  );
  &:hover {
    background-position: 100% 0;
  }
`;
const PlusButton = styled.button`
  box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};
  border-radius: 10px;
  margin-left: 10px;
  width: 20%;
  height: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  background-size: 300% 100%;
  transition: all 0.3s ease-out;
  background-size: 300% 100%;

  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.lightGrey},
    whitesmoke,
    #77dd77,
    #77dd77
  );
  &:hover {
    background-position: 100% 0;
  }
`;

const Quantity = ({ product, quantity }) => {
  console.log("lolz");
  const [localQuantity, setLocalQuantity] = React.useState(quantity);
  const { cart } = useContext(StoreContext);
  product.itemtotal = localQuantity * product.price;

  useEffect(() => {
    if (localQuantity > 0) {
      product.quantity = localQuantity;
    } else if (localQuantity < 1) {
      setLocalQuantity(1);
    }
  });

  return (
    <Wrapper>
      <MinusButton onClick={() => setLocalQuantity(localQuantity - 1)}>
        {" "}
        -{" "}
      </MinusButton>
      <Number> {localQuantity} </Number>
      <PlusButton onClick={() => setLocalQuantity(localQuantity + 1)}>
        {" "}
        +{" "}
      </PlusButton>
      <h2>Price: {product.itemtotal}$</h2>
    </Wrapper>
  );
};

export default Quantity;
