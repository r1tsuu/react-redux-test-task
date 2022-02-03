import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { filtersApi } from "../../../api/filtersApi";


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
