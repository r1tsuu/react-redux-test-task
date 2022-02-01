import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";
import { FAILED, IDLE, PENDING, SUCCEEDED } from "../../common/constants";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProductsStatus",
  async (catalog) => {
    return await productsApi.fetchByCatalog(catalog);
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, fetchAllProductsReducer.pending)
      .addCase(fetchAllProducts.fulfilled, fetchAllProductsReducer.fulfilled)
      .addCase(fetchAllProducts.rejected, fetchAllProductsReducer.rejected);
  },
});
