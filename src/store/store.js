import { configureStore } from "@reduxjs/toolkit";
import massage from "./reducers/massage_reducer";

export const store = configureStore({
  reducer: { massage },
});
