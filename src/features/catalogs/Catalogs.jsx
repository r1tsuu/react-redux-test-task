import { Failed } from "../../common/components/Failed";
import { Loader } from "../../common/components/Loader";
import { FAILED, PENDING, SUCCEEDED } from "../../common/constants";
import { CatalogsList } from "./CatalogsList";
import { useCatalogsFetch } from "./useCatalogsFetch";
import { useSelectCatalogs } from "./useSelectCatalogs";

export const Catalogs = () => {
  const { catalogs, status } = useSelectCatalogs();

  useCatalogsFetch(status);

  if (status === PENDING) return <Loader />;
  if (status === FAILED) return <Failed />;
  if (status === SUCCEEDED) return <CatalogsList catalogs={catalogs} />;
  return null;
};
