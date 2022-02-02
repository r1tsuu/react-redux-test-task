import { useEffect, useState } from "react";
import { filtersApi } from "../../api/filtersApi";
import { useDispatch, useSelector } from "react-redux";
import { IDLE, RESET } from "../../common/constants";
import { addFilter, deleteFilter, fetchProducts, resetFilter } from "./productsSlice";

export const useFetchFilters = (catalogId) => {
  const [filters, setFilters] = useState(null);
  console.log(catalogId);
  useEffect(() => {
    if (catalogId) {
      filtersApi
        .fetchByCatalog(catalogId)
        .then((filters) => setFilters(filters));
    }
  }, [catalogId]);
  if (filters) return filters;
};

export const useProductsFetch = (catalog, stateCatalog, status) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === IDLE || catalog !== stateCatalog.url.ua)
      dispatch(fetchProducts(catalog));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
};

export const useSelectProducts = () => {
  const productsState = useSelector((state) => state.products);
  return {
    products: productsState.products,
    status: productsState.status,
    stateCatalog: productsState.catalog,
    filter: productsState.filter,
  };
};

export const useFilterProducts = (filterId, prevFilterId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (filterId === RESET) {
      dispatch(resetFilter());
      return;
    }
    dispatch(addFilter(filterId));
    if (prevFilterId) dispatch(deleteFilter(prevFilterId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterId]);
}; 