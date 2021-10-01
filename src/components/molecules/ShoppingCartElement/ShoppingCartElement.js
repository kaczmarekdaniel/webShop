import React, { useState, useContext } from "react";
import { StoreContext } from "providers/StoreProvider";
import styled from "styled-components";
import AddToCartSection from "../../organisms/AddToCartSection/AddToCartSection";
import ChooseSize from "components/atoms/ChooseSize/ChooseSize";

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
    margin-bottom: 5%;
  }

  @media (min-width: 1024px) {
    width: 45%;
    min-height: 25vh;
    height: 30%;
    margin: 2% 0 2% 4%;
  }
  @media (min-width: 2000px) {
    width: 45%;
    min-height: 20vh;
    height: 30%;
    margin: 2% 0 2% 4%;
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
    margin: 10px 0 0 0;
  }
`;
const Image = styled.div`
  width: 50%;
  height: 66%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
  h3 {
    font-weight: normal;
    margin: 0;
  }
`;
const Quantity = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
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
  const { removeFromCart } = useContext(StoreContext);
  return (
    <>
      <Element>
        <Image></Image>
        <ProductSpecification>
          <h2>{productData.name}</h2>
          <h3>{productData.model}</h3>
        </ProductSpecification>

        <Modifications>
          <Size>
            <p>Size:</p>
            <ChooseSize product={productData} />
          </Size>
          <Quantity>
            <p>Quantity:{productData.quantity}</p>
          </Quantity>
          <RemoveFromCart>
            <h2>
              Price: {productData.itemtotal}${productData.size}
            </h2>
            <hr />
            <DeleteButton onClick={() => removeFromCart(productData.id)}>
              Remove
            </DeleteButton>
          </RemoveFromCart>
        </Modifications>
      </Element>
    </>
  );
};

export default ShoppingCartElement;
