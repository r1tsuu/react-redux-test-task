import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addFilter, deleteFilter, resetFilter } from "../productsSlice";
import { filtersApi } from "../../../api/filtersApi";
import { RESET, RESET_ALL } from "../../../common/constants";

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

export const useFilterProducts = (filterId, prevFilterId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Да, здесь наверное более чисто смотрится если заменить if'ы на switch (filterId)
    // Но мне if'ы как-то больше нравятся)
    if (!filterId) return;
    if (filterId === RESET) {
      dispatch(
        deleteFilter({
          filter: filterId,
        })
      );
      return;
    }
    // В этой реализации у этого кейса есть один минус - если у нас n выборов фильтра
    // то данный код выполнится n раз и action resetFilter тоже
    // Но вроде как в этом нет проблемы
    if (filterId === RESET_ALL) {
      dispatch(resetFilter({}));
      return;
    }
    if (prevFilterId) {
      dispatch(deleteFilter({ filter: prevFilterId.value }));
    }
    dispatch(addFilter({ filter: filterId.value }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterId]);
};
