import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IDLE } from "../../common/constants";
import { fetchProducts } from "./productsSlice";

export const useProductsFetch = (catalog, stateCatalog, status, filters) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === IDLE || catalog !== stateCatalog.url) {
      dispatch(fetchProducts({ catalog, filters }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalog, filters]);
};

export const useSelectProducts = () => {
  const productsState = useSelector((state) => state.products);
  return {
    products: productsState.products,
    status: productsState.status,
    stateCatalog: productsState.catalog,
    filters: productsState.filters,
  };
};

export const useFilterProducts = () => {};
