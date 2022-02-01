import { useSelector } from "react-redux";

export const useSelectCatalogs = () => {
  const catalogs = useSelector((state) => state.catalogs);
  return {
    catalogs: catalogs.catalogs,
    status: catalogs.status,
  };
};
