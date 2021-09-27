import React from "react";
import styled from "styled-components";

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
`;

const ProductName = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: whitesmoke;
  flex-wrap: wrap;
  border: 0.5px solid black;

  h2 {
    font-weight: normal;
    margin: 10px 0px 0px 30px;
  }
  h3 {
    font-weight: normal;
    margin: 0px 0px 0px 30px;
  }
`;

const Element = styled.div`
  border: 0.5px solid black;
  height: 50%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
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

const AddToCart = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid #ffd1dc;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #ffd1dc;
  }
`;

const AddToCartSection = ({ product }) => (
  <Wrapper>
    <ProductName>
      <h2>{product.name}</h2>
      <h3>{product.model}</h3>
    </ProductName>
    <Element>
      <h1>{product.price}</h1>
    </Element>
    <Element>
      <AddToCart>Add To Cart</AddToCart>
    </Element>
  </Wrapper>
);

export default AddToCartSection;
