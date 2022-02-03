import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IDLE, RESET_ALL_PENDING } from "../../common/constants";
import { fetchProducts, initUrlFilter, resetFilter } from "./productsSlice";

export const useProductsFetch = (catalog, stateCatalog, status, filter) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetFilter());
    if (filter) dispatch(initUrlFilter({ filter: filter }));
  }, [catalog]);

  useEffect(() => {
    if (status === RESET_ALL_PENDING) {
      dispatch(fetchProducts({ catalog }));
    }
  }, [status]);

  useEffect(() => {
    if (status === IDLE || catalog !== stateCatalog.url) {
      dispatch(fetchProducts({ catalog, filter }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalog, filter]);
};

export const useSelectProducts = () => {
  const productsState = useSelector((state) => state.products);
  return {
    products: productsState.products,
    status: productsState.status,
    stateCatalog: productsState.catalog,
    filters: productsState.filters,
    isFilterInited: productsState.isFilterInited,
  };
};
