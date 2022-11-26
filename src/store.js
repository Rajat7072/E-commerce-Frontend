//import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
// import productListReducers from "./createApi/productReducers";
// import productsFetch from "./createSlice/productSlice";
import { productsApi } from "./createApi/productApi";
// import productReducer from "./createSlice/productSlice";
import { productDetailApi } from "./createApi/productDetailApi";
import cartReducer from "./createSlice/cartSlice";
import addressSlice from "./createSlice/addressSlice";

//const reducer = combineReducers({});
//const initialState = {};
//const middleware = [thunk];
const store = configureStore({
  reducer: {
    // products: productListReducers,
    // product: productReducer,
    [productDetailApi.reducerPath]: productDetailApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    //[LoginApi.reducerPath]: LoginApi.reducer,
    cart: cartReducer,
    address: addressSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      productDetailApi.middleware
      //LoginApi.middleware
    ),
});
// store.dispatch(productsFetch());
export default store;
