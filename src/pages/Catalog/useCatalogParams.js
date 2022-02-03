import { useParams } from "react-router-dom";

export const useCatalogParams = () => {
  const {catalog, filter} = useParams();
  console.log(catalog, filter)
  return [catalog, filter]
};
