import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItem: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQty: 0,
  cartTotalAmt: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const index = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index >= 0) {
        state.cartItem[index].cartTotalQty += 1;
        toast.info("Quantity increased successfully", {
          position: "bottom-left",
        });
      } else {
        const tempItem = { ...action.payload, cartTotalQty: 1 };
        state.cartItem.push(tempItem);
        toast.success(`${action.payload.title} added successfully`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    removeFromCart(state, action) {
      const filterItem = state.cartItem.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItem = filterItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
      toast.error(`${action.payload.title} removed successfully`, {
        position: "bottom-left",
      });
    },
    decreaseCart(state, action) {
      const cartIndex = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartItem[cartIndex].cartTotalQty > 1) {
        state.cartItem[cartIndex].cartTotalQty -= 1;
      } else {
        const nextCart = state.cartItem.filter(
          (item) => item._id !== action.payload._id
        );
        state.cartItem = nextCart;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
      toast.info(`${action.payload.title} removed from cart`, {
        position: "bottom-left",
      });
    },
    increaseCart(state, action) {
      const cartIndex = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartItem[cartIndex].cartTotalQty < 5) {
        state.cartItem[cartIndex].cartTotalQty += 1;
        toast.info(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
      } else {
        toast.info("You can not add more tha 5 qty", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    totalAmout(state, action) {
      const oneItemlTotal = state.cartItem.reduce(
        (accum, item) => {
          let itemValue = item.cartTotalQty * item.price;
          accum.total += itemValue;
          accum.quantity += item.cartTotalQty;
          return accum;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmt = oneItemlTotal.total;
      state.cartTotalQty = oneItemlTotal.quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  totalAmout,
} = cartSlice.actions;
export default cartSlice.reducer;
