import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "providers/StoreProvider";
import ChooseSize from "components/atoms/ChooseSize/ChooseSize";

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  hr {
    margin: 0px;
    width: 75%;
    height: 1px;
    background-color: black;
    border: none;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const ProductName = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: whitesmoke;
  flex-wrap: no-wrap;

  @media (min-width: 2000px) {
    height: 100%;
  }
  h2 {
    font-weight: normal;
    margin: 10px 0px 0px 30px;
  }
  h3 {
    font-weight: normal;
    margin: 0px 0px 0px 30px;
  }
`;

const PriceAndButton = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  padding: 0px;
  @media (min-width: 2000px) {
    height: 60%;
  }

  hr {
    margin: 5px;
    width: 75%;
    height: 1px;
    background-color: black;
    border: none;
  }
  h1 {
    font-weight: normal;
    margin: 0px;
    color: white;
  }
  p {
    font-weight: normal;
    margin: 0px;
    color: white;
    margin-top: auto;
  }
`;
const Element = styled.div`
  height: 40%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: normal;

  @media (min-width: 2000px) {
  }

  hr {
    margin: 0px;
    width: 50%;
    height: 1px;
    background-color: black;
    border: none;
  }

  p {
    font-weight: normal;
    margin: 0px;
    color: white;
    margin-top: 5px;
  }
`;

const AddToCart = styled.button`
  width: 90%;
  height: 80%;
  border: none;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
  border: none;
  background-size: 300% 100%;
  transition: all 0.3s ease-out;
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
  &:focus {
    outline: none;
  }

  @media (min-width: 1024px (max-width: 1999px)) {
    min-width: 100px;
    min-height: 40px;
    width: 50%;
    height: 40%;
    margin: 10px 0px 10px 0px;
  }

  @media (min-width: 2000px) {
    min-width: 100px;
    min-height: 40px;
    width: 50%;
    height: 35%;
    margin: 5px 10px 10px 10px;
  }
`;

const AddToCartSection = ({ product }) => {
  const { handleAddToCart, cart, addToCart } = useContext(StoreContext);
  const { cleanButton, setCleanButtons } = useContext(StoreContext);
  const [size, setSize] = React.useState("xd");
  const [focus, setFocus] = React.useState("");

  const changeSize = (val) => {
    console.log(product.size);

    console.log("-----");
  };

  const takeSize = (val) => {
    if (!cart.includes(product)) {
      setSize(val);
    } else {
      changeSize(val);
    }
  };
  const cleanButtons = () => {
    for (let i = 1; i < 5; i++) {
      document.getElementById(i + product.id + "").className = "active";
    }
  };

  return (
    <Wrapper>
      <ProductName>
        <h2>{product.name}</h2>
        <h3>{product.model}</h3>
      </ProductName>
      <Element>
        <ChooseSize
          product={product}
          takeSize={takeSize}
          focus={focus}
          setFocus={setFocus}
        />
        <hr />
      </Element>
      <PriceAndButton>
        <h1>${product.price}</h1>
        <AddToCart
          onClick={() => {
            handleAddToCart(product, size), cleanButtons();
          }}
        >
          Add To Cart
        </AddToCart>
      </PriceAndButton>
    </Wrapper>
  );
};

export default AddToCartSection;
