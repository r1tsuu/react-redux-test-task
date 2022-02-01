import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IDLE } from "../../common/constants";
import { fetchAllProducts } from "./productsSlice";

export const useProductsFetch = (catalog, stateCatalog, status) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === IDLE || catalog !== stateCatalog) dispatch(fetchAllProducts(catalog));
  }, []);
};
