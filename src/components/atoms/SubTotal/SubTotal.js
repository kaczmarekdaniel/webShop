import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { StoreContext } from "providers/StoreProvider";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  transition: all 1s ease-in-out;
  position: absolute;
`;

const GlobalSubTotal = () => {
  const { cart, update, forceUpdate } = useContext(StoreContext);
  const [subTotal, setSubTotal] = React.useState(0);

  useEffect(() => {
    let calc = 0;
    cart.forEach((product) => (calc = calc + product.itemtotal));
    setSubTotal(calc);
  }, [cart]);

  return (
    <Wrapper>
      <p> {subTotal}</p>
    </Wrapper>
  );
};

export default GlobalSubTotal;
