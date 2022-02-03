import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { filtersApi } from "../../../api/filtersApi";
import { utils } from "../../../common/utils";
import { useSelectProducts } from "../productsHooks";


export const useFetchFilters = (catalogId) => {
  const [filters, setFilters] = useState(null);
  useEffect(() => {
    if (catalogId) {
      filtersApi
        .fetchByCatalog(catalogId)
        .then((filters) => setFilters(filters));
    }
  }, [catalogId]);
  if (filters) return filters;
};

export const useFilterNavigation = () => {
  const navigate = useNavigate();
  const { filters, isFilterInited } = useSelectProducts();
  useEffect(() => {
    if (filters.length) {
      if (isFilterInited) return;
      navigate(utils.combineFilters(filters));
      return
    }
    navigate('')
  }, [filters]);
};