import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { StoreContext } from "providers/StoreProvider";
import ChooseSize from "components/atoms/ChooseSize/ChooseSize";
import { v4 as uuidv4 } from "uuid";

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

  padding: 1% 0% 0% 5%;
  h2 {
    font-weight: normal;
    font-size: 1.5rem;
    margin: 0px;
  }
  h3 {
    font-weight: normal;
    font-size: 0.8rem;
    margin: 2px 0px 0px 0px;
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
    font-size: 1.5rem;
    color: white;
  }
  p {
    font-weight: normal;
    margin: 0px;
    color: white;
    margin-top: auto;
  }

  @media (min-width: 2000px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;
const Element = styled.div`
  height: 40%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  padding: 0 5% 0 5%;
`;

const AddToCart = styled.button`
  margin-top: 5%;
  width: 75%;
  height: 25%;
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
`;

const AddToCartSection = ({ product }) => {
  const { handleAddToCart, setPopUp, popUp } = useContext(StoreContext);
  const [focus, setFocus] = React.useState("");
  const [size, setSize] = React.useState("");

  const showPopUp = (type) => {
    setPopUp({ show: true, type: type });
  };

  const takeSize = (val) => {
    setSize(val);
  };

  const cleanButtons = () => {
    for (let i = 1; i < 5; i++) {
      document.getElementById(i + product.id + "").className = "active";
    }
  };

  const sizeChecked = () => {
    //alert(size)
    if (size != "") {
      handleAddToCart(product, size, uuidv4());
      showPopUp("passed");
      //alert(size);
    } else {
      showPopUp("error");
    }
  };

  return (
    <>
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
        </Element>
        <PriceAndButton>
          <h1>${product.price}</h1>
          <AddToCart
            size={size}
            onClick={() => {
              sizeChecked(), cleanButtons(), setFocus(""), setSize("");
            }}
          >
            Add To Cart
          </AddToCart>
        </PriceAndButton>
      </Wrapper>
    </>
  );
};

export default AddToCartSection;
