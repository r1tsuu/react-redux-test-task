import { Failed } from "../../common/components/Failed";
import { Loader } from "../../common/components/Loader";
import { FAILED, PENDING, SUCCEEDED } from "../../common/constants";
import { Filter } from "./Filter";
import { ProductsList } from "./ProductsList";
import { useFetchFilters } from "./useFetchFilters";
import { useProductsFetch } from "./useProductsFetch";
import { useSelectProducts } from "./useSelectProducts";

export const Products = ({ catalog }) => {
  const { products, status, stateCatalog } = useSelectProducts();

  useProductsFetch(catalog, stateCatalog, status);
  useFetchFilters(stateCatalog.id);

  if (status === PENDING) return <Loader />;
  if (status === FAILED) return <Failed />;
  if (status === SUCCEEDED)
    return (
      <div>
        <Filter catalogId={stateCatalog.id} />
        <ProductsList products={products} />
      </div>
    );
  return null;
};
