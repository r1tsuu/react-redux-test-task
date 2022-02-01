import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, PENDING, SUCCEEDED } from "../../../common/constants";
import { filtersApi } from "../../api/filtersApi";
import { IDLE } from "../../common/constants";

export const fetchAllFilters = createAsyncThunk(
  "filters/fetchAllFiltersStatus",
  async (catalogId) => {
    return {
      filters: await filtersApi.fetchByCatalog(catalogId),
      catalogId: catalogId,
    };
  }
);

const fetchAllFiltersReducer = {
  pending: (state) => {
    state.status = PENDING;
  },
  fulfilled: (state, action) => {
    state.filters = action.payload.filters;
    state.catalogId = action.payload.catalogId;
    state.status = SUCCEEDED;
  },
  rejected: (state) => {
    state.status = FAILED;
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    data: [],
    catalogId: null,
    status: IDLE,
  },
  reducers: (builder) => {
    builder.addCase();
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilters.pending, fetchAllFiltersReducer.pending)
      .addCase(fetchAllFilters.fulfilled, fetchAllFiltersReducer.fulfilled)
      .addCase(fetchAllFilters.rejected, fetchAllFiltersReducer.rejected);
  },
});
