import { Failed } from "../../common/components/Failed";
import { Loader } from "../../common/components/Loader";
import { FAILED, PENDING, SUCCEEDED } from "../../common/constants";
import { Selector } from "./Selector/Selector";
import { useFetchFilters } from "./useFetchFilters";
import { useSelectFilters } from "./useSelectFilters";

export const Filter = ({ catalog }) => {
  const { filters, stateCatalog, status } = useSelectFilters();

  useFetchFilters(catalog, status);

  if (status === PENDING) return <Loader />;
  if (status === FAILED) return <Failed />;
  if (status === SUCCEEDED) return <Selector filters={filters} />;

  return null;
};
