import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  massage: "",
};

const massageReducer = createSlice({
  name: "massages",
  initialState,
  reducers: {
    addMassage(state, action) {
      state.massage = action.payload;
    },
  },
});

export const { addMassage } = massageReducer.actions;

export default massageReducer.reducer;
