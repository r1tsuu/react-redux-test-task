import { useSelector } from "react-redux";

export const useSelectProducts = (catalog) => {
  const productsState = useSelector((state) => state.products);
  return [productsState.products, productsState.status, productsState.catalog];
};
