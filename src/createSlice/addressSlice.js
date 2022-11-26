import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addressDetail: localStorage.getItem("addressDetailStorage")
    ? JSON.parse(localStorage.getItem("addressDetailStorage"))
    : [],
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addressDetailReducer(state, action) {
      state.addressDetail = action.payload;
      localStorage.setItem(
        "addressDetailStorage",
        JSON.stringify(state.addressDetail)
      );
    },
  },
});

export const { addressDetailReducer } = addressSlice.actions;
export default addressSlice.reducer;
