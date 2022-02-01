import { FAILED, PENDING, SUCCEEDED } from "../../../common/constants";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const { filtersApi } = require("../../../api/filtersApi");

export const fetchAllFilters = createAsyncThunk(
  "filters/fetchAllFiltersStatus",
  async (catalogId) => {
    return await filtersApi.fetchAllByCatalog(catalogId);
  }
);

const fetchAllFiltersReducer = {
  pending: (state) => {
    state.status = PENDING;
  },
  fulfilled: (state, action) => {
    state.filters.push(action.payload);
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilters.pending, fetchAllFiltersReducer.pending)
      .addCase(fetchAllFilters.fulfilled, fetchAllFiltersReducer.fulfilled)
      .addCase(fetchAllFilters.rejected, fetchAllFiltersReducer.rejected);
  },
});
