import { useEffect, useState } from "react";
import { filtersApi } from "../../api/filtersApi";

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
