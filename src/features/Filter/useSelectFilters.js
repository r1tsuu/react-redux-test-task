import { useSelector } from "react-redux";
import { IDLE } from "../../common/constants";
export const useSelectFilters = (catalog) => {
  const filters = useSelector((state) => state.filters);
  if (filters.catalog !== catalog) return { status: IDLE };
  return {
    filters: filters.filters,
    status: filters.status,
  };
};
