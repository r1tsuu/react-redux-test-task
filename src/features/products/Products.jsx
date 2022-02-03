import { Failed } from "../../common/components/Failed";
import { Loader } from "../../common/components/Loader";
import { FAILED, PENDING, SUCCEEDED } from "../../common/constants";
import { Filter } from "./Filter/Filter";
import { useProductsFetch, useSelectProducts } from "./productsHooks";
import { ProductsList } from "./ProductsList";

export const Products = ({ catalog }) => {
  const { products, status, stateCatalog } = useSelectProducts();

  useProductsFetch(catalog, stateCatalog, status);

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
