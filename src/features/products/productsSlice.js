import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";
import { FAILED, IDLE, PENDING, SUCCEEDED } from "../../common/constants";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProductsStatus",
  async (catalog) => {
    return await productsApi.fetchAllByCatalog(catalog);
  }
);

const fetchAllProductsPendingReducer = (state) => {
  state.status = PENDING;
};

const fetchAllProductsFulfilledReducer = (state, action) => {
  [state.catalog, state.products] = [
    action.payload.catalog,
    action.payload.products,
  ];
  state.status = SUCCEEDED;
};

const fetchAllProductsRejectedReducer = (state) => {
  state.status = FAILED;
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
      .addCase(fetchAllProducts.pending, fetchAllProductsPendingReducer)
      .addCase(fetchAllProducts.fulfilled, fetchAllProductsFulfilledReducer)
      .addCase(fetchAllProducts.rejected, fetchAllProductsRejectedReducer);
  },
});
