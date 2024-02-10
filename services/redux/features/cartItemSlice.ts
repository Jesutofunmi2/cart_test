import { InitialState } from '@/types/cartItems'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


const initialState: InitialState = {
  currentCartItem: null,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    cartData: (state, action) => {
      state.currentCartItem = action.payload
    }
  },
})

export const { cartData } = cartSlice.actions
export const userData = (state: RootState) => state.cart
export default cartSlice.reducer