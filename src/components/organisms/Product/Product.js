import React from "react";
import styled from "styled-components";
import AddToCartSection from "components/organisms/AddToCartSection/AddToCartSection";
import PhotoCarousel from "components/molecules/PhotoCarousel/PhotoCarousel";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: -2px 4px 10px lightgrey;
  border-radius: 20px;
  overflow: hidden;
  margin: 20px;
  @media (min-width: 1000px) {
    width: 25%;
    height: 45vh;
  }
`;

const Product = ({ product }) => (
  <Wrapper>
    <PhotoCarousel photo={product.photo} />
    <AddToCartSection product={product}> </AddToCartSection>
  </Wrapper>
);

export default Product;
