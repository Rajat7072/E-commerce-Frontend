// import { createSlice } from "@reduxjs/toolkit";
// import productsFetch from "../actionCreators/productsAction";

// const initialState = {
//   products: [],
//   status: null,
//   error: null,
// };

// export const productListSlice = createSlice({
//   name: "productListReducers",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [productsFetch.pending]: (state, action) => {
//       state.status = "pending";
//     },
//     [productsFetch.fulfilled]: (state, action) => {
//       state.status = "success";
//       state.products = action.payload;
//     },
//     [productsFetch.rejected]: (state, action) => {
//       state.status = "rejected";
//       state.error = action.payload;
//     },
//   },
// });
// export const productListReducers = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case "PRODUCT_LIST_REQUEST":
//       return {
//         loading: true,
//         products: [],
//       };
//     case "PRODUCT_LIST_SUCCESS":
//       return {
//         loading: false,
//         products: action.payload,
//       };
//     case "PRODUCT_LIST_FAILS":
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default productListSlice.reducer;
