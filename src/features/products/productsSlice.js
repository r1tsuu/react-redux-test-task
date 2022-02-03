import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";
import { FAILED, IDLE, PENDING, SUCCEEDED } from "../../common/constants";

export const fetchProducts = createAsyncThunk(
  "products/fetchAllProductsStatus",
  async (catalog) => {
    const data = await productsApi.fetchByCatalog(catalog);
    return {
      products: data.products,
      catalog: {
        url: catalog,
        id: data.catalog._id
      },
    };
  }
);

// export const addFilter = createAction("products/filter/addFilter");
// export const deleteFilter = createAction("products/filter/deleteFilter");
// export const resetFilter = createAction("products/filter/resetFilter");

const fetchAllProductsReducer = {
  pending: (state) => {
    state.status = PENDING;
  },
  fulfilled: (state, action) => {
    state.products = action.payload.products;
    state.catalog = action.payload.catalog;
    state.status = SUCCEEDED;
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
      url: null
    },
    products: [],
    status: IDLE,
    filters: [],
  },
  reducers: {
    addFilter(state, action) {
      state.filters = [...state.filters, action.payload.filter]
    },
    deleteFilter(state, action) {
      console.log(action)
      console.log(state.filters)
      state.filters = state.filters.filter((f) => action.payload.filter !== f);
    },
    resetFilter(state) {
      state.filters = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, fetchAllProductsReducer.pending)
      .addCase(fetchProducts.fulfilled, fetchAllProductsReducer.fulfilled)
      .addCase(fetchProducts.rejected, fetchAllProductsReducer.rejected);
  },
});

export const {addFilter, deleteFilter, resetFilter} = productsSlice.actions
