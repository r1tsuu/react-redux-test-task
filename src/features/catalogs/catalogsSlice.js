import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catalogsApi } from "../../api/catalogsApi";
import { FAILED, IDLE, PENDING, SUCCEEDED } from "../../common/constants";

export const fetchAllCatalogs = createAsyncThunk(
  "catalogs/fetchAllCatalogsStatus",
  async () => {
    return await catalogsApi.fetchAll();
  }
);

const fetchCatalogsPendingReducer = (state) => {
  state.status = PENDING;
};

const fetchCatalogsFulfilledReducer = (state, action) => {
  state.catalogs = action.payload;
  state.status = SUCCEEDED;
};

const fetchCatalogsRejectedReducer = (state) => {
  state.status = FAILED;
};

export const catalogsSlice = createSlice({
  name: "catalogs",
  initialState: {
    catalogs: [],
    status: IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCatalogs.pending, fetchCatalogsPendingReducer)
      .addCase(fetchAllCatalogs.fulfilled, fetchCatalogsFulfilledReducer)
      .addCase(fetchAllCatalogs.rejected, fetchCatalogsRejectedReducer);
  },
});