import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catalogsApi } from "../../api/catalogsApi";
import { FAILED, IDLE, PENDING, SUCCEEDED } from "../../common/constants";

export const fetchAllCatalogs = createAsyncThunk(
  "catalogs/fetchAllCatalogsStatus",
  async () => {
    return await catalogsApi.fetchAll();
  }
);

const fetchAllCatalogsReducer = {
  pending: (state) => {
    state.status = PENDING;
  },
  fullfilled: (state, action) => {
    state.catalogs = action.payload;
    state.status = SUCCEEDED;
  },
  rejected: (state) => {
    state.status = FAILED;
  },
};

export const catalogsSlice = createSlice({
  name: "catalogs",
  initialState: {
    catalogs: [],
    status: IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCatalogs.pending, fetchAllCatalogsReducer.pending)
      .addCase(fetchAllCatalogs.fulfilled, fetchAllCatalogsReducer.fullfilled)
      .addCase(fetchAllCatalogs.rejected, fetchAllCatalogsReducer.rejected);
  },
});
