import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IDLE } from "../../../common/constants";
import { fetchAllFilters } from "./filtersSlice";

const useFetchFilters = (catalog) => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    if (filters.status === IDLE) dispatch(fetchAllFilters(catalog));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
