import React from "react";
import styled from "styled-components";
import AddToCartSection from "components/organisms/AddToCartSection/AddToCartSection";
import Photo from "data/photos/nikeSBGFX4hoodie.jpg";

const Wrapper = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  img {
    width: auto;
    max-width: 100%;
    height: 100%;
    border: none;
  }
`;

const PhotoCarousel = ({ photo }) => {
  //alert(photo);
  //console.log(photo);
  return (
    <>
      <Wrapper>
        <img src={photo} />
      </Wrapper>
    </>
  );
};
export default PhotoCarousel;
