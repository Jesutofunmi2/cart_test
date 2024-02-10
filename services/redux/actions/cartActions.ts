import { CartActionTypes, CartItem, CartAction } from '@/types/cartItems';

export const addToCartAction = (product: CartItem): CartAction => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: product,
});