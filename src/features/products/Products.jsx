import React, { useState } from "react";
import { useEffect } from "react";
import { Failed } from "../../common/components/Failed";
import { Loader } from "../../common/components/Loader";
import { FAILED, PENDING, SUCCEEDED } from "../../common/constants";
import { ProductsList } from "./ProductsList";
import { useProductsFetch } from "./useProductsFetch";
import { useSelectProducts } from "./useSelectProducts";

export const Products = ({ catalog }) => {
  const [content, setContent] = useState(null);
  const [products, status] = useSelectProducts(catalog);
  useProductsFetch(catalog);
  useEffect(() => {
    if (status === PENDING) setContent(<Loader />);
    if (status === FAILED) setContent(<Failed/>)
    if (status === SUCCEEDED) setContent(<ProductsList products={products}/>)
  });
  return content;
};
