import React, { useState, useContext } from "react";
import { Wrapper } from "./Products.styles";
import Product from "components/organisms/Product/Product";
import { StoreContext } from "providers/StoreProvider";

const Hoodies = () => {
  const { hoodies } = useContext(StoreContext);

  return (
    <>
      <Wrapper>
        {hoodies.map((item, num) => (
          <Product product={item} key={item.id} />
        ))}
      </Wrapper>
    </>
  );
};

export default Hoodies;
