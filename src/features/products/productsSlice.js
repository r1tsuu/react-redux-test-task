import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";
import { FAILED, IDLE, PENDING, SUCCEEDED } from "../../common/constants";
import { utils } from "../../common/utils";

export const fetchProducts = createAsyncThunk(
  "products/fetchAllProductsStatus",
  async ({ catalog, filters }) => {
    const data = await productsApi.fetchByCatalog(
      catalog,
      filters.length ? utils.combineFilters(filters) : null
    );
    return {
      products: data.products,
      catalog: {
        url: catalog,
        id: data.catalog._id,
      },
      isFilter: Boolean(filters.length),
    };
  }
);

const fetchAllProductsReducer = {
  pending: (state) => {
    state.status = PENDING;
  },
  fulfilled: (state, action) => {
    state.products = action.payload.products;
    state.catalog = action.payload.catalog;
    state.status = SUCCEEDED;
    if (!action.payload.isFilter) state.filters = [];
  },
  rejected: (state) => {
    state.status = FAILED;
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    catalog: {
      id: null,
      url: null,
    },
    products: [],
    status: IDLE,
    filters: [],
  },
  reducers: {
    addFilter(state, action) {
      state.filters = [...state.filters, action.payload.filter];
      state.status = IDLE;
    },
    deleteFilter(state, action) {
      console.log(action);
      state.filters = state.filters.filter((f) => action.payload.filter !== f);
      state.status = IDLE;
    },
    resetFilter(state) {
      state.filters = [];
      state.status = IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, fetchAllProductsReducer.pending)
      .addCase(fetchProducts.fulfilled, fetchAllProductsReducer.fulfilled)
      .addCase(fetchProducts.rejected, fetchAllProductsReducer.rejected);
  },
});

export const { addFilter, deleteFilter, resetFilter } = productsSlice.actions;
