import { useParams } from "react-router-dom";

export const useCatalogParams = () => {
  const params = useParams();
  return params.catalog;
};
