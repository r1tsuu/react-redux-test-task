import { configureStore } from "@reduxjs/toolkit";
import { config } from "./config";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: !config.production,
});
