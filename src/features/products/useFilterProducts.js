import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { utils } from "../../common/utils";
import { fetchProducts } from "./productsSlice";
import { useSelectProducts } from "./useSelectProducts";

// export const useFilterProducts = () => {
//   const dispatch = useDispatch();
//   const { products, filters } = useSelectProducts();
//   useEffect( () => {
//     if (filters) {
//       const filter = utils.combineFilters(filters)
//       console.log(filter)
//       console.log("ASDADSSDASDADASDADADSADSADADSADSSDASDadsa")
//       dispatch(fetchProducts(products.catalog, filter))  
//     } 
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [filters]);
// };

export const useFilterProducts = () => {
  const dispatch = useDispatch()
  
}