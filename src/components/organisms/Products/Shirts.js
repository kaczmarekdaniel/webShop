import React from "react";
import { Wrapper } from "./Products.styles";
import Product from "components/organisms/Product/Product";

const Shirts = ({ shirts }) => {
  return (
    <>
      <Wrapper>
        {shirts.map((item, num) => (
          <Product product={item} key={num} />
        ))}
      </Wrapper>
    </>
  );
};

export default Shirts;
