import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { IDLE } from "../../common/constants";
import { utils } from "../../common/utils";
import { fetchProducts, initUrlFilter } from "./productsSlice";

export const useProductsFetch = (catalog, stateCatalog, status, filter) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === IDLE || catalog !== stateCatalog.url) {
      dispatch(fetchProducts({ catalog, filter }));
      if (filter) dispatch(initUrlFilter({ filter: filter }));
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
    isFilterInited: productsState.isFilterInited
  };
};
