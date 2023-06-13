import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

const messageReducer = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMassage(state, action) {
      console.log(action.payload);
      state.message = action.payload;
    },
  },
});

export const { addMassage } = messageReducer.actions;

export default messageReducer.reducer;
