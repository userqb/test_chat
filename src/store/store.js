import { configureStore } from "@reduxjs/toolkit";
import message from "./reducers/message_reducer";

export const store = configureStore({
  reducer: { message },
});
