import { useSelector } from "react-redux";

export const useSelectFilters = (catalogId) => {
  const filtersState = useSelector(
    (state) => state.filters,
    (filters) => filters.catalogId === catalogId
  );
  return filtersState
};
