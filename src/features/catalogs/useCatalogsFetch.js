import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IDLE } from "../../common/constants";
import { fetchAllCatalogs } from "./catalogsSlice";

export const useCatalogsFetch = (status) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === IDLE) {
      dispatch(fetchAllCatalogs());
    }
  }, []);
};
