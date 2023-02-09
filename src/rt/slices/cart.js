import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(
  localStorage.getItem("cart") || "{items: [], total: 0}"
);

// DRY => DON'T REPEAT YOURSELF

function setLocalCart(item) {
  localStorage.setItem("cart", JSON.stringify(item));
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.items.find((i) => i.product.id === action.payload.id);

      if (item) item.count++;
      else state.items.push({ count: 1, product: action.payload });

      setLocalCart(state);
    },

    incItemCount(state, action) {
      state.items.find((i) => i.product.id === action.payload).count++;
      setLocalCart(state);
    },

    decItemCount(state, action) {
      state.items.find((i) => i.product.id === action.payload).count--;
      setLocalCart(state);
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.product.id !== action.payload);
      setLocalCart(state);
    },
  },
});

export const { addToCart, incItemCount, decItemCount, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
