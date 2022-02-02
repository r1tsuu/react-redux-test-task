import { combineReducers } from "@reduxjs/toolkit";
import { catalogsSlice } from "../features/catalogs/catalogsSlice";
import { productsSlice } from "../features/products/productsSlice";

export const rootReducer = combineReducers({
  catalogs: catalogsSlice.reducer,
  products: productsSlice.reducer,
});
