import React from "react";
import { Wrapper } from "./Products.styles";
import Product from "components/organisms/Product/Product";

const Hoodies = ({ hoodies }) => {
  return (
    <>
      <Wrapper>
        {hoodies.map((item, num) => (
          <Product product={item} />
        ))}
      </Wrapper>
    </>
  );
};

export default Hoodies;
