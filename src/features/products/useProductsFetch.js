import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IDLE } from "../../common/constants";
import { fetchProducts } from "./productsSlice";

export const useProductsFetch = (catalog, stateCatalog, status, filter) => {
  const dispatch = useDispatch();
  useEffect( () => {
    if (status === IDLE || catalog !== stateCatalog)
      dispatch(fetchProducts(catalog, filter));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
};
