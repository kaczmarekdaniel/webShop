import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "providers/StoreProvider";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .active {
    width: 25%;
    height: 65%;
    min-height: 30px;
    margin: 2%;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    background-size: 300% 100%;
    transition: all 0.3s ease-out;
    background-size: 300% 100%;
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
  }
  .clickedButton {
    width: 25%;
    height: 65%;
    min-height: 30px;
    margin: 2%;
    border: none;
    border-radius: 10px;
    background-size: 300% 100%;
    background-image: none;
    background-color: #ffd1dc;
  }
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  min-height: 30px;
  margin: 2%;
  border: none;
  border-radius: 10px;

  box-shadow: -2px 4px 10px ${({ theme }) => theme.colors.darkGrey};

  background-color: blue;

  &:focus {
    outline: none;
  }
`;

const ChooseSize = ({ takeSize, product, focus, setFocus }) => {
  const { cleanButton, setCleanButtons } = useContext(StoreContext);

  const takeActiveButton = (val) => {
    //alert(typeof(val.target.id))
    //alert(val.target.value)
    //console.log(val);
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
    //alert(focus.value)
    //document.getElementById(focus).className="clickedButton" ;
  };

  const giveSize = (e) => {
    //alert(e.target.value)
    return takeSize(e.target.value);
  };

  let size = "";
  return (
    <Wrapper>
      <Button
        id={"1" + product.id}
        className="active"
        value="S"
        onClick={() => {
          (size = "S"), giveSize(event), takeActiveButton(event);
        }}
      >
        S
      </Button>
      <Button
        id={"2" + product.id}
        className="active"
        value="M"
        onClick={() => {
          (size = "M"), giveSize(event), takeActiveButton(event);
        }}
      >
        M
      </Button>
      <Button
        id={"3" + product.id}
        className="active"
        value="L"
        onClick={() => {
          (size = "L"), giveSize(event), takeActiveButton(event);
        }}
      >
        L
      </Button>
      <Button
        id={"4" + product.id}
        className="active"
        value="XL"
        onClick={() => {
          (size = "XL"), giveSize(event), takeActiveButton(event);
        }}
      >
        XL
      </Button>
    </Wrapper>
  );
};

export default ChooseSize;
