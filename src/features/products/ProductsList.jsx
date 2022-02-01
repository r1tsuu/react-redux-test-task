import React from "react";
import styled from "styled-components";
import { ProductItem } from "./ProductItem";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 4rem;
  @media (max-width: 767) {
    flex-direction: column;
  }
`;

export const ProductsList = ({ products }) => {
  return (
    <List>
      {products.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </List>
  );
};
