import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";
import { FAILED, IDLE, PENDING, RESET_ALL_PENDING, SUCCEEDED } from "../../common/constants";

export const fetchProducts = createAsyncThunk(
  "products/fetchAllProductsStatus",
  async ({ catalog, filter }) => {
    const data = await productsApi.fetchByCatalog(catalog, filter);
    return {
      products: data.products,
      catalog: {
        url: catalog,
        id: data.catalog._id,
      },
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
    if (action.payload.isFilter) {
      state.filters = [];
    }
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
    isFilterInited: false,
  },
  reducers: {
    initUrlFilter(state, action) {
      state.filters = action.payload.filter.split(",");
      state.isFilterInited = true;
    },
    addFilter(state, action) {
      state.filters = [...state.filters, action.payload.filter];
      state.status = IDLE;
      state.isFilterInited = false;
    },
    deleteFilter(state, action) {
      console.log(action);
      state.filters = state.filters.filter((f) => action.payload.filter !== f);
      state.status = IDLE;
      state.isFilterInited = false;
    },
    resetFilter(state) {
      state.filters = [];
      state.status = RESET_ALL_PENDING;
      state.isFilterInited = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, fetchAllProductsReducer.pending)
      .addCase(fetchProducts.fulfilled, fetchAllProductsReducer.fulfilled)
      .addCase(fetchProducts.rejected, fetchAllProductsReducer.rejected);
  },
});

export const { initUrlFilter, addFilter, deleteFilter, resetFilter } =
  productsSlice.actions;
