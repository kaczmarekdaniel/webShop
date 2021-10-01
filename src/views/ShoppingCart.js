import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "providers/StoreProvider";
import styled from "styled-components";
import ShoppingCartElement from "components/molecules/ShoppingCartElement/ShoppingCartElement";
import ShoppingCartPopUp from "components/organisms/ShoppingCartPopUp/ShoppingCartPopUp";
import PopUpWindow from "components/molecules/PopUpWindow/PopUpWindow";
const CartButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: #ffd1dc;
  border: 1px solid black;
  position: fixed;
  right: 20px;
  top: 20px;
`;

const ShoppingCart = () => {
  const { isShow, setIsShow } = useContext(StoreContext);
  const { popUp, setPopUp, showPopUp } = useContext(StoreContext);

  return (
    <>
      {popUp === true ? (
        [
          useEffect(() => {
            const timer = setTimeout(() => {
              setPopUp(!popUp);
            }, 1000);
            return () => clearTimeout(timer);
          }, []),
          <PopUpWindow />,
        ]
      ) : (
        <></>
      )}
      <CartButton onClick={() => setIsShow(!isShow)}>Cart</CartButton>

      {isShow ? (
        [
          <ShoppingCartPopUp />,
          <CartButton onClick={() => setIsShow(!isShow)}>Close</CartButton>,
        ]
      ) : (
        <></>
      )}
    </>
  );
};

export default ShoppingCart;
