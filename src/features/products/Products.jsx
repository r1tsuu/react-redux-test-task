import { Failed } from "../../common/components/Failed";
import { Loader } from "../../common/components/Loader";
import { FAILED, PENDING, SUCCEEDED } from "../../common/constants";
import { ProductsList } from "./ProductsList";
import { useProductsFetch } from "./useProductsFetch";
import { useSelectProducts } from "./useSelectProducts";

export const Products = ({ catalog }) => {
  const { products, status, stateCatalog, filter } = useSelectProducts();

  useProductsFetch(catalog, stateCatalog, status);
  
  if (status === PENDING) return <Loader />;
  if (status === FAILED) return <Failed />;
  if (status === SUCCEEDED) return <ProductsList products={products} />;
  return null;
};
