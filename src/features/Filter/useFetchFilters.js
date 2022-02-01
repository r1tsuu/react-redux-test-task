import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IDLE } from "../../../common/constants";
import { fetchAllFilters } from "./filtersSlice";

export const useFetchFilters = (catalog, status) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === IDLE) dispatch(fetchAllFilters(catalog._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
