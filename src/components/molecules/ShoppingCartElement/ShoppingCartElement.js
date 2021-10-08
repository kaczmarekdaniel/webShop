import React, { useState, useContext } from "react";
import { StoreContext } from "providers/StoreProvider";
import styled from "styled-components";
import AddToCartSection from "../../organisms/AddToCartSection/AddToCartSection";
import CartChooseSize from "components/atoms/CartChooseSize/CartChooseSize";
import Quantity from "components/atoms/Quantity/Quantity";

const Element = styled.div`
  width: 100%;
  height: 50vh;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: -2px 4px 10px lightgrey;
  border-radius: 20px;
  overflow: hidden;
  &:last-of-type {
    margin-bottom: 15%;
    font-size: 1.2vh;
  }

  @media (min-width: 1024px) {
    width: 45%;
    height: 25vh;
    min-height: 20vh;
    margin: 2% 0 0% 4%;
  }
  @media (min-width: 2000px) {
    width: 45%;
    min-height: 20vh;
    height: 30%;
    margin: 2% 0 2% 4%;
  }
  p {
    margin: 0 0 0 0;
  }
`;

const Modifications = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  flex-direction: column;
`;

const Size = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin: 5px 0 0 0;
  }
`;
const Image = styled.div`
  width: 50%;
  height: 66%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: auto;
    max-width: 100%;
    height: 100%;
  }
`;

const ProductSpecification = styled.div`
  width: 50%;
  height: 34%;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  flex-direction: column;

  h2 {
    font-weight: normal;
    margin: 0;
    font-size: 2vh;
  }
  h3 {
    font-weight: normal;
    margin: 0;
    font-size: 2vh;
  }
`;

const RemoveFromCart = styled.div`
  width: 100%;
  height: 34%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3px;
  h2 {
    font-weight: normal;
    margin: 0;
    font-size: 2vh;
  }

  hr {
    width: 75%;
    height: 0.5px;
    margin: 5px;
  }
`;

const DeleteButton = styled.button`
  width: 70%;
  height: auto;
  background-color: #ff6961;
  border: 0.5px solid black;
  box-shadow: -2px 4px 10px lightgrey;
`;

const CartIsEmpty = styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  background-color: yellow;
`;

const ShoppingCartElement = ({ productData }) => {
  const { removeFromCart, buttonsToDisable, setButtonsToDisable } =
    useContext(StoreContext);

  return (
    <>
      <Element>
        <Image>
          <img src={productData.photo} />
        </Image>
        <ProductSpecification>
          <h2>{productData.name}</h2>
          <h3>{productData.model}</h3>
        </ProductSpecification>

        <Modifications>
          <Size>
            <p>Size:</p>
            <CartChooseSize
              product={productData}
              highlight={productData.size}
              key={productData.key}
            />
          </Size>
          <p>Quantity</p>

          <Quantity quantity={productData.quantity} product={productData} />

          <RemoveFromCart>
            <hr />
            <DeleteButton onClick={() => removeFromCart(productData.key)}>
              Remove
            </DeleteButton>
          </RemoveFromCart>
        </Modifications>
      </Element>
    </>
  );
};

export default ShoppingCartElement;
