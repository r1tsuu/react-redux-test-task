import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";
import { FAILED, IDLE, PENDING, SUCCEEDED } from "../../common/constants";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProductsStatus",
  async (catalog, filter) => {
    if (!filter) return await productsApi.fetchAllByCatalog(catalog);
    return await productsApi.fetchAllByCatalog(catalog, filter);
  }
);

const fetchAllProductsReducer = {
  pending: (state) => {
    state.status = PENDING;
  },
  fulfilled: (state, action) => {
    [state.catalog, state.products] = [
      action.payload.catalog,
      action.payload.products,
    ];
    state.status = SUCCEEDED;
  },
  rejected: (state) => {
    state.status = FAILED;
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    catalog: null,
    products: [],
    status: IDLE,
    filter: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, fetchAllProductsReducer.pending)
      .addCase(fetchAllProducts.fulfilled, fetchAllProductsReducer.fulfilled)
      .addCase(fetchAllProducts.rejected, fetchAllProductsReducer.rejected);
  },
});
