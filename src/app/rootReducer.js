import { combineReducers } from "@reduxjs/toolkit";
import { catalogsSlice } from '../features/catalogs/catalogsSlice'

export const rootReducer = combineReducers({
  catalogs: catalogsSlice.reducer
})