import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginDetail: [],
};

const loginSlice = createSlice({
  name: "loginCred",
  initialState,
  reducers: {
    loginReducer(state, action) {
      state.loginDetail = action.payload;
    },
  },
});

export const { loginReducer } = loginSlice.actions;
export default loginSlice.reducer;
