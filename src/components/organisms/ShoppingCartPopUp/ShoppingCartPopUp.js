import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "providers/StoreProvider";
import styled from "styled-components";
import ShoppingCartElement from "components/molecules/ShoppingCartElement/ShoppingCartElement";
import Product from "../Product/Product";
import { v4 as uuidv4 } from "uuid";

const PopUp = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffd1dc;
  position: fixed;
  box-shadow: -2px 4px 10px lightgrey;

  overflow: hidden;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1020px) {
    width: 45%;
    height: 90%;
    right: 20px;
    top: 20px;
    border-radius: 20px;
  }

  @media (min-width: 2000px) {
    width: 40%;
    height: 90%;
    right: 20px;
    top: 20px;
    border-radius: 20px;
  }
`;

const ItemsSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;

  margin-bottom: 10%;
  padding: 5% 3% 5% 3%;
`;

const Header = styled.div`
  width: 100%;
  height: 6%;
  background-color: #ffd1dc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  h1 {
    font-weight: normal;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 7%;
  background-color: #ffd1dc;
  display: flex;
  position: absolute;
  flex-direction: column;
  bottom: 0;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  h1 {
    background-color: #ffd1dc;
  }
`;

const CartIsEmptyMessage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    font-weight: normal;
    color: black;
  }
`;

const ShoppingCartPopUp = () => {
  const { cart } = useContext(StoreContext);
  let sum = 0;
  const prices = cart.map((item) => (sum += item.price * item.quantity));

  const CheckIsEmpty = () => {
    if (sum == 0) {
      return (
        <CartIsEmptyMessage>
          <h1>Your cart is empty, add something</h1>
        </CartIsEmptyMessage>
      );
    } else {
      return cart.map((productData) => (
        <ShoppingCartElement productData={productData} />
      ));
    }
  };

  return (
    <>
      <PopUp>
        <Header>
          <h1>Your cart</h1>
        </Header>
        <ItemsSection>
          <CheckIsEmpty />
        </ItemsSection>

        <BtnContainer>
          <h1>SubTotal: {sum}$</h1>
        </BtnContainer>
      </PopUp>
    </>
  );
};

export default ShoppingCartPopUp;
