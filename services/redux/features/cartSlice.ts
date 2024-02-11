import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const carts: any[] = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts,
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addTocartData: (state, action) => {
      const newCartItems = action.payload;
      const existingItem = state.carts.find(
        (item) => item.id === newCartItems.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.carts.push({
          id: newCartItems.id,
          quantity: 1,
          name: newCartItems.name,
          price: newCartItems.store_product_properties[0].selling_price,
        });
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      } else {
        existingItem.quantity++;
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemIndex].quantity > 1) {
        state.carts[itemIndex].quantity -= 1;
      } else if (state.carts[itemIndex].quantity === 1) {
        const nextCartItems = state.carts.filter(
          (item) => item.id !== action.payload.id
        );

        state.carts = nextCartItems;
      }
    },
    removeFromCart(state, action) {
      state.carts.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.carts.filter(
            (item) => item.id !== cartItem.id
          );
          state.carts = nextCartItems;
        }

        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.carts.reduce(
        (cartTotal, cart) => {
          const { price, quantity } = cart;

          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.totalQuantity = quantity;
      state.totalAmount = total;
    },
    clearCart(state, action) {
      state.carts = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addTocartData,
  getTotals,
  removeFromCart,
  decreaseCart,
  clearCart,
} = cartSlice.actions;
