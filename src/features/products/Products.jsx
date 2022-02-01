import React, { useState } from "react";
import { Failed } from "../../common/components/Failed";
import { FAILED, PENDING, SUCCEEDED } from "../../common/constants";
import { ProductsList } from "./ProductsList";
import { useProductsFetch } from "./useProductsFetch";
import { useSelectProducts } from "./useSelectProducts";

export const Products = ({ catalog }) => {
  const [products, status, stateCatalog] = useSelectProducts(catalog);

  useProductsFetch(catalog, stateCatalog, status);

  if (status === FAILED) return <Failed />;
  if (status === SUCCEEDED) return <ProductsList products={products} />;
  if (status === SUCCEEDED) return <ProductsList products={products} />;
  return null;
};
