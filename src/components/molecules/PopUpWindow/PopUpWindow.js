import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "providers/StoreProvider";
import styled from "styled-components";

const PopUp = styled.div`
  width: 50%;
  height: auto;
  margin: 50vh 25% auto 25%;
  background-color: whitesmoke;
  color: black;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: -2px 4px 10px lightgrey;
  border-radius: 20px;
  transition: all 0.1s ease-in-out;
  font-size: 1rem;
  img {
    width: 50px;
    height: 50px;
    margin: 0 20px 0 0px;
  }

  @media (min-width: 1024px) {
    width: 15%;
    height: auto;
    box-shadow: -2px 4px 10px lightgrey;
    border-radius: 20px;
    margin: 35% 42.5% auto 42.5%;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

const PopUpWindow = ({ type }) => {
  const { popUp, setPopUp } = useContext(StoreContext);
  //alert(popUp.type)
  return (
    <>
      {popUp.type == "passed" ? (
        <PopUp>
          <img src="https://img.icons8.com/plasticine/100/000000/checked--v1.png" />
          <p>Item added to cart</p>
        </PopUp>
      ) : (
        //alert(popUp.type)
        <PopUp>
          <img src="https://img.icons8.com/plasticine/100/000000/cancel.png" />
          <p>Cart Is Empty !</p>
        </PopUp>
      )}
    </>
  );
};

export default PopUpWindow;
