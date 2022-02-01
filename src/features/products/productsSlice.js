import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";
import { FAILED, IDLE, PENDING, SUCCEEDED } from "../../common/constants";

export const fetchProducts = createAsyncThunk(
  "products/fetchAllProductsStatus",
  async (catalog, filter) => {
    if (!filter) return await productsApi.fetchByCatalog(catalog);
    const products = await productsApi.fetchByCatalog(catalog, filter);
    return {
      products: products,
      filter: filter,
    };
  }
);

export const addFilter = createAction("products/filter/addFilter", (filter) => {
  return {
    filter: filter,
  };
});

export const deleteFilter = createAction(
  "products/filter/deleteFilter",
  (filter) => {
    return {
      filter: filter,
    };
  }
);

export const resetFilter = createAction("products/filter/resetFilter", () => {
  return {
    filters: [],
  };
});

const productsFilterReducer = {
  add: (state, action) => {
    state.filters.push(action.payload.filter);
  },
  delete: (state, action) => {
    state.filter = state.filters.filter((f) => action.payload.filter !== f);
  },
  reset: (state, action) => {
    state.filters = action.payload.filters;
  },
};

const fetchAllProductsReducer = {
  pending: (state) => {
    state.status = PENDING;
  },
  fulfilled: (state, action) => {
    state.products = action.payload.products;
    state.filter = action.payload.filter;
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
    filters: [],
  },
  reducers: (builder) => {
    builder
      .addCase(addFilter, productsFilterReducer.add)
      .addCase(deleteFilter, productsFilterReducer.delete)
      .addCase(resetFilter, productsFilterReducer.reset);
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, fetchAllProductsReducer.pending)
      .addCase(fetchProducts.fulfilled, fetchAllProductsReducer.fulfilled)
      .addCase(fetchProducts.rejected, fetchAllProductsReducer.rejected);
  },
});
