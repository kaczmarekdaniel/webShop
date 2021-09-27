import React from "react";
import styled from "styled-components";
import AddToCartSection from "components/molecules/AddToCartSection/AddToCartSection";
import PhotoCarousel from "components/molecules/PhotoCarousel/PhotoCarousel";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: 1px solid black;
  margin: 20px;
  @media (min-width: 1000px) {
    width: 25%;
    height: 45vh;
  }
`;

const Product = ({ product }) => (
  <Wrapper>
    <PhotoCarousel />
    <AddToCartSection product={product}> </AddToCartSection>
  </Wrapper>
);

export default Product;
