import { useEffect } from "react";
import { useState } from "react";
import { Failed } from "../../common/components/Failed";
import { Loader } from "../../common/components/Loader";
import { FAILED, PENDING, SUCCEEDED } from "../../common/constants";
import { CatalogsList } from "./CatalogsList";
import { useCatalogsFetch } from "./useCatalogsFetch";
import { useSelectCatalogs } from "./useSelectCatalogs";

export const Catalogs = () => {
  const [content, setContent] = useState(null)
  const [catalogs, status] = useSelectCatalogs();
  useCatalogsFetch(status);
  useEffect(() => {
    if (status === PENDING) setContent(<Loader />);
    if (status === FAILED) setContent(<Failed />);
    if (status === SUCCEEDED) setContent(<CatalogsList catalogs={catalogs} />);
  }, [status]);
  return content;
};