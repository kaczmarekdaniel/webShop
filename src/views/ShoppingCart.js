import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "providers/StoreProvider";
import styled from "styled-components";
import ShoppingCartElement from "components/molecules/ShoppingCartElement/ShoppingCartElement";
import ShoppingCartPopUp from "components/organisms/ShoppingCartPopUp/ShoppingCartPopUp";
import PopUpWindow from "components/molecules/PopUpWindow/PopUpWindow";
import { v4 as uuidv4 } from "uuid";

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
  console.log([popUp.show]);
  return (
    <>
      {popUp.show === true ? (
        [
          useEffect(() => {
            const timer = setTimeout(() => {
              setPopUp(!popUp.show);
            }, 1000);
            return () => clearTimeout(timer);
          }, []),
          <PopUpWindow type={popUp.type} />,
        ]
      ) : (
        <></>
      )}
      <CartButton onClick={() => setIsShow(!isShow)}>Cart</CartButton>

      {isShow ? (
        [
          <ShoppingCartPopUp key={uuidv4()} />,
          <CartButton onClick={() => setIsShow(!isShow)}>Close</CartButton>,
        ]
      ) : (
        <></>
      )}
    </>
  );
};

export default ShoppingCart;
