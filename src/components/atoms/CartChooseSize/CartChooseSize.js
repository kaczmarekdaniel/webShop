import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "providers/StoreProvider";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .active {
    width: 25%;
    height: 65%;
    min-height: 30px;
    margin: 2%;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};
    background-size: 300% 100%;
    transition: all 0.3s ease-out;
    background-size: 300% 100%;

    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.lightGrey},
      whitesmoke,
      #ffd1dc,
      #ffd1dc
    );
    &:hover {
      background-position: 100% 0;
    }
  }
  .clickedButton {
    width: 25%;
    height: 65%;
    min-height: 30px;
    box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};

    margin: 2%;
    border: none;
    border-radius: 10px;
    background-size: 300% 100%;
    background-image: none;
    background-color: #ffd1dc;
  }

  .disabledButton {
    width: 25%;
    height: 65%;
    min-height: 30px;
    box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};

    margin: 2%;
    border: none;
    border-radius: 10px;
    background-size: 300% 100%;
    background-image: none;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  min-height: 30px;
  margin: 2%;
  border: none;
  border-radius: 10px;

  box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};

  background-color: blue;

  &:focus {
    outline: none;
  }
`;

const CartChooseSize = ({ takeSize, product, highlight }) => {
  const { cart, addToCart, buttonsToDisable, setButtonsToDisable } =
    useContext(StoreContext);
  const [targetId, setTargetId] = useState(
    product.size + product.id + "" + product.key
  );
  const [localSize, setLocalSize] = useState(product.size);

  useEffect(() => {
    if (targetId != "") {
      document.getElementById(targetId).className = "clickedButton";
      product.size = localSize;
      //alert(product.size);
      //document.getElementById("S" + product.id + product.key).disabled = true;
    }
  });

  const deactivateButton = () => {
    document.getElementById(targetId).className = "active";
  };
  const setActiveButton = () => {
    //alert(focus)
    //document.getElementById(focus).className="clickedButton" ;
  };

  return (
    <Wrapper>
      <Button
        id={"S" + product.id + product.key}
        className="active"
        onClick={() => {
          deactivateButton();
          setLocalSize("S");
          setTargetId("S" + product.id + product.key);
        }}
        key={uuidv4()}
      >
        S
      </Button>
      <Button
        id={"M" + product.id + product.key}
        className="active"
        onClick={() => {
          deactivateButton();
          setLocalSize("M");

          setTargetId("M" + product.id + product.key);
        }}
        key={uuidv4()}
      >
        M
      </Button>
      <Button
        id={"L" + product.id + product.key}
        className="active"
        onClick={() => {
          deactivateButton();
          setLocalSize("L");

          setTargetId("L" + product.id + product.key);
        }}
        key={uuidv4()}
      >
        L
      </Button>
      <Button
        id={"XL" + product.id + product.key}
        className="active"
        onClick={() => {
          deactivateButton();
          setLocalSize("XL");

          setTargetId("XL" + product.id + product.key);
        }}
        key={uuidv4()}
      >
        XL
      </Button>
    </Wrapper>
  );
};

export default CartChooseSize;
