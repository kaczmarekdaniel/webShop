import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "providers/StoreProvider";

const Wrapper = styled.div`
  width: 75%;
  height: 100%;
  margin: 10px 0 10px 0;
  display: flex;
  .active {
    width: 70px;
    height: 40px;
    min-height: 30px;
    margin: 2%;
    border: none;
    border-radius: 10px;
    background-size: 300% 100%;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.lightGrey},
      whitesmoke,
      #ffd1dc,
      #ffd1dc
    );
  }
  .clickedButton {
    width: 70px;
    height: 40px;
    min-height: 30px;
    margin: 2%;
    border: none;
    border-radius: 10px;
    background-size: 300% 100%;
    background-image: linear-gradient(
      to right,
      #ffd1dc,
      #ffd1dc,
      #ffd1dc,
      #ffd1dc
    );
  }
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  min-height: 30px;
  margin: 2%;
  border: none;
  border-radius: 10px;
  background-size: 300% 100%;
  transition: all 0.3s ease-out;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.lightGrey},
    whitesmoke,
    #ffd1dc,
    #ffd1dc
  );
  box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};

  background-color: blue;

  &:hover {
    background-position: 100% 0;
  }
  &:focus {
    outline: none;
  }
`;

const ChooseSize = ({ takeSize, product, focus, setFocus }) => {
  const { cleanButton, setCleanButtons } = useContext(StoreContext);

  const takeActiveButton = (val) => {
    //alert(typeof(val.target.id))
    console.log(val);
    if (focus == "") {
      setFocus(val.target.id);
      document.getElementById(val.target.id).className = "clickedButton";
    } else if (focus == false) {
      alert("xd");
    } else {
      document.getElementById(focus).className = "active";
      setFocus(val.target.id);
      document.getElementById(val.target.id).className = "clickedButton";
    }
  };

  const setActiveButton = () => {
    //alert(focus)
    //document.getElementById(focus).className="clickedButton" ;
  };

  let size = "";
  return (
    <Wrapper>
      <Button
        id={"1" + product.id}
        className="active"
        onClick={() => {
          (size = "S"), takeSize(size), takeActiveButton(event);
        }}
      >
        S
      </Button>
      <Button
        id={"2" + product.id}
        className="active"
        onClick={() => {
          (size = "M"), takeSize(size), takeActiveButton(event);
        }}
      >
        M
      </Button>
      <Button
        id={"3" + product.id}
        className="active"
        onClick={() => {
          (size = "L"), takeSize(size), takeActiveButton(event);
        }}
      >
        L
      </Button>
      <Button
        id={"4" + product.id}
        className="active"
        onClick={() => {
          (size = "XL"), takeSize(size), takeActiveButton(event);
        }}
      >
        XL
      </Button>
    </Wrapper>
  );
};

export default ChooseSize;
