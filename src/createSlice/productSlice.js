// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const productsFetch = createAsyncThunk(
//   "productListReducers/productsFetch",
//   async (id = null, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:8080/api/ProductRouter/products"
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export default productsFetch;
// import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   productItem: [],
// // };
// const productSlice = createSlice({
//   name: "product",
//   initialState: [],
//   reducers: {
//     productDetail(state, action) {
//       state.productSlice.push(action.payload);
//     },
//   },
// });

// export const { productDetail } = productSlice.actions;
// export default productSlice.reducer;
