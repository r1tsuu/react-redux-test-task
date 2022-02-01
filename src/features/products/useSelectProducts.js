import { useSelector } from "react-redux";

export const useSelectProducts = () => {
  const productsState = useSelector((state) => state.products);
  return [productsState.products, productsState.status];
};
